import { useState, useMemo, useEffect } from 'react';
import { vocabularyWords } from '../data/exercises';
import ProgressBar from './ProgressBar';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function VocabularyCards({ onHome, onRecord, onSaveSession }) {
  const [view, setView] = useState('menu'); // menu | cards | test-mc | test-write

  return (
    <div className="exercise-screen">
      <div className="exercise-header">
        <button className="btn btn-ghost back-btn" onClick={view === 'menu' ? onHome : () => setView('menu')}>
          {view === 'menu' ? '← Inicio' : '← Vocabulario'}
        </button>
      </div>

      {view === 'menu' && <VocabMenu onSelect={setView} />}
      {view === 'cards' && <FlashCards onDone={() => setView('menu')} />}
      {view === 'test-mc' && (
        <VocabTest
          mode="mc"
          onHome={() => setView('menu')}
          onRecord={onRecord}
          onSaveSession={onSaveSession}
        />
      )}
      {view === 'test-write' && (
        <VocabTest
          mode="write"
          onHome={() => setView('menu')}
          onRecord={onRecord}
          onSaveSession={onSaveSession}
        />
      )}
    </div>
  );
}

function VocabMenu({ onSelect }) {
  return (
    <div className="vocab-menu">
      <h2 className="section-title">Vocabulario · Medio Ambiente</h2>
      <p className="section-subtitle">{vocabularyWords.length} palabras</p>
      <div className="vocab-menu-grid">
        <button className="module-card vocab-option" onClick={() => onSelect('cards')}>
          <span className="module-icon">🃏</span>
          <strong>Tarjetas</strong>
          <small>Estudia las palabras una a una</small>
        </button>
        <button className="module-card vocab-option" onClick={() => onSelect('test-mc')}>
          <span className="module-icon">☑️</span>
          <strong>Test: elige</strong>
          <small>Ve el francés, elige la traducción</small>
        </button>
        <button className="module-card vocab-option" onClick={() => onSelect('test-write')}>
          <span className="module-icon">✏️</span>
          <strong>Test: escribe</strong>
          <small>Ve el español, escribe en francés</small>
        </button>
      </div>
    </div>
  );
}

function FlashCards({ onDone }) {
  const cards = useMemo(() => shuffle(vocabularyWords), []);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = cards[idx];
  const isLast = idx === cards.length - 1;

  return (
    <div className="flashcard-screen">
      <ProgressBar current={idx + 1} total={cards.length} />
      <div
        className={`flashcard ${flipped ? 'flipped' : ''}`}
        onClick={() => setFlipped(f => !f)}
      >
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <span className="fc-lang">Francés</span>
            <p className="fc-word">{card.fr}</p>
            <p className="fc-tap">Toca para ver la traducción</p>
          </div>
          <div className="flashcard-back">
            <span className="fc-lang">Español</span>
            <p className="fc-word">{card.es}</p>
            <p className="fc-example">{card.example}</p>
          </div>
        </div>
      </div>
      <div className="flashcard-actions">
        <button className="btn btn-secondary" onClick={() => { setIdx(i => Math.max(0, i - 1)); setFlipped(false); }} disabled={idx === 0}>
          ← Anterior
        </button>
        {!isLast ? (
          <button className="btn btn-primary" onClick={() => { setIdx(i => i + 1); setFlipped(false); }}>
            Siguiente →
          </button>
        ) : (
          <button className="btn btn-primary" onClick={onDone}>
            Volver al menú
          </button>
        )}
      </div>
    </div>
  );
}

function VocabTest({ mode, onHome, onRecord, onSaveSession }) {
  const questions = useMemo(() => buildQuestions(mode), [mode]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [answer, setAnswer] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selected, setSelected] = useState(null);

  const q = questions[index];

  function confirmAnswer() {
    if (confirmed) return;
    const userAnswer = mode === 'mc' ? selected : answer.trim().toLowerCase();
    const correct = checkAnswer(userAnswer, q.answer);
    setIsCorrect(correct);
    setConfirmed(true);
    onRecord({ id: `vocab-${q.id}`, answer: q.answer }, correct, 'vocabulario');
    if (correct) setScore(s => s + 1);
  }

  function next() {
    const nextIdx = index + 1;
    setAnswer('');
    setSelected(null);
    setConfirmed(false);
    setIsCorrect(false);
    if (nextIdx >= questions.length) {
      // score state already includes this question's result from confirmAnswer
      setDone(true);
    } else {
      setIndex(nextIdx);
    }
  }

  useEffect(() => {
    if (done) onSaveSession('vocabulario', score, questions.length);
  }, [done]);

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    const grade = pct >= 80 ? 'excellent' : pct >= 60 ? 'good' : 'needsWork';
    return (
      <div className="score-summary">
        <div className={`score-circle score-${grade}`}>
          <span className="score-number">{pct}%</span>
          <span className="score-fraction">{score}/{questions.length}</span>
        </div>
        <p className="score-message">{pct >= 80 ? '¡Vocabulario dominado!' : 'Sigue repasando las tarjetas.'}</p>
        <div className="score-actions">
          <button className="btn btn-primary" onClick={onHome}>Volver al vocabulario</button>
        </div>
      </div>
    );
  }

  return (
    <div className="vocab-test">
      <ProgressBar current={index} total={questions.length} />
      <div className="question-card">
        <div className="question-sentence">
          <p className="sentence-label">{mode === 'mc' ? 'Traduce al español:' : 'Escribe en francés:'}</p>
          <p className="sentence-main">{q.prompt}</p>
        </div>

        {mode === 'mc' ? (
          <div className={`options-grid options-${q.options.length}`}>
            {q.options.map(opt => {
              let cls = 'option-btn';
              if (confirmed) {
                if (opt === q.answer) cls += ' correct';
                else if (opt === selected) cls += ' wrong';
                else cls += ' neutral';
              } else if (opt === selected) cls += ' selected';
              return (
                <button key={opt} className={cls} onClick={() => !confirmed && setSelected(opt)}>
                  {opt}
                </button>
              );
            })}
          </div>
        ) : (
          <input
            className={`write-input ${confirmed ? (isCorrect ? 'input-correct' : 'input-wrong') : ''}`}
            type="text"
            value={answer}
            onChange={e => setAnswer(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !confirmed && confirmAnswer()}
            placeholder="Escribe en francés…"
            disabled={confirmed}
            autoFocus
          />
        )}

        {!confirmed && (
          <button
            className="btn btn-primary confirm-btn"
            onClick={confirmAnswer}
            disabled={mode === 'mc' ? !selected : !answer.trim()}
          >
            Comprobar
          </button>
        )}

        {confirmed && (
          <div className={`feedback-box ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`}>
            <span className="feedback-icon">{isCorrect ? '✓' : '✗'}</span>
            <div>
              <strong>{isCorrect ? '¡Correcto!' : `Respuesta: ${q.answer}`}</strong>
              {q.example && <p className="feedback-explanation">{q.example}</p>}
            </div>
          </div>
        )}

        {confirmed && (
          <button className="btn btn-primary next-btn" onClick={next}>Siguiente →</button>
        )}
      </div>
    </div>
  );
}

function buildQuestions(mode) {
  const shuffled = shuffle(vocabularyWords);
  return shuffled.map(word => {
    if (mode === 'mc') {
      const others = vocabularyWords.filter(w => w.id !== word.id);
      const distractors = shuffle(others).slice(0, 3).map(w => w.es);
      const options = shuffle([word.es, ...distractors]);
      return { id: word.id, prompt: word.fr, answer: word.es, options, example: word.example };
    } else {
      return { id: word.id, prompt: word.es, answer: word.fr, example: word.example };
    }
  });
}

function checkAnswer(userAnswer, correctAnswer) {
  const normalize = s => s.toLowerCase()
    .replace(/[àâä]/g, 'a').replace(/[éèêë]/g, 'e')
    .replace(/[îï]/g, 'i').replace(/[ôö]/g, 'o')
    .replace(/[ûü]/g, 'u').replace(/ç/g, 'c')
    .replace(/['']/g, '\'').trim();

  const correct = normalize(correctAnswer);
  const user = normalize(userAnswer);

  // Accept if the user's answer is contained in the correct or vice versa (handles articles)
  return user === correct ||
    correct.includes(user) ||
    user.includes(correct.split(' ').slice(-1)[0]);
}
