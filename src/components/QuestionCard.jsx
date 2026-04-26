import { useState } from 'react';
import RulePanel from './RulePanel';

export default function QuestionCard({ exercise, moduleId, examMode, onAnswer, onNext }) {
  const [selected, setSelected] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  function handleSelect(opt) {
    if (confirmed) return;
    setSelected(opt);
  }

  function handleConfirm() {
    if (!selected || confirmed) return;
    const correct = selected === exercise.answer;
    setIsCorrect(correct);
    setConfirmed(true);
    onAnswer(correct);
  }

  const showFeedback = confirmed && !examMode;

  return (
    <div className="question-card">
      <div className="question-sentence">
        {renderSentence(exercise, moduleId)}
      </div>

      <div className={`options-grid options-${exercise.options.length}`}>
        {exercise.options.map(opt => {
          let cls = 'option-btn';
          if (confirmed) {
            if (opt === exercise.answer) cls += ' correct';
            else if (opt === selected) cls += ' wrong';
            else cls += ' neutral';
          } else if (opt === selected) {
            cls += ' selected';
          }
          return (
            <button key={opt} className={cls} onClick={() => handleSelect(opt)}>
              {opt}
            </button>
          );
        })}
      </div>

      {!confirmed && (
        <button
          className="btn btn-primary confirm-btn"
          onClick={handleConfirm}
          disabled={!selected}
        >
          Comprobar
        </button>
      )}

      {showFeedback && (
        <div className={`feedback-box ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`}>
          <span className="feedback-icon">{isCorrect ? '✓' : '✗'}</span>
          <div>
            <strong>{isCorrect ? '¡Correcto!' : `Incorrecto — Respuesta: ${exercise.answer}`}</strong>
            {exercise.explanation && (
              <p
                className="feedback-explanation"
                dangerouslySetInnerHTML={{ __html: exercise.explanation }}
              />
            )}
          </div>
        </div>
      )}

      {confirmed && examMode && (
        <div className={`feedback-box ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`}>
          <span>{isCorrect ? '✓ Correcto' : '✗ Incorrecto'}</span>
        </div>
      )}

      {!confirmed && <RulePanel moduleId={moduleId} />}

      {confirmed && (
        <button className="btn btn-primary next-btn" onClick={onNext}>
          Siguiente →
        </button>
      )}
    </div>
  );
}

function renderSentence(exercise, moduleId) {
  if (moduleId === 'quique') {
    return (
      <p>
        {exercise.before}{' '}
        <span className="blank-word">___</span>{' '}
        {exercise.after}
      </p>
    );
  }
  if (moduleId === 'cod') {
    return (
      <>
        <p className="sentence-label">Sustituye el complemento directo:</p>
        <p className="sentence-main">{exercise.original}</p>
        <p className="sentence-label">→ Elige la forma correcta:</p>
      </>
    );
  }
  const parts = (exercise.sentence || '').split('____');
  return (
    <p>
      {parts[0]}
      <span className="blank-word">____</span>
      {parts[1] ?? ''}
    </p>
  );
}
