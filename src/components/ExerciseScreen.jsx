import { useState, useMemo, useEffect, useRef } from 'react';
import QuestionCard from './QuestionCard';
import ProgressBar from './ProgressBar';
import ScoreSummary from './ScoreSummary';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function ExerciseScreen({ moduleId, exercises, mode, onHome, onRecord, onSaveSession }) {
  const maxCount = mode === 'exam' ? 20 : 10;

  const questions = useMemo(
    () => shuffle(exercises).slice(0, Math.min(maxCount, exercises.length)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [moduleId, mode]
  );

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [examResults, setExamResults] = useState([]);
  const scoreRef = useRef(0);

  useEffect(() => {
    if (done) onSaveSession(moduleId, scoreRef.current, questions.length);
  }, [done]);

  function handleAnswer(isCorrect) {
    const exercise = questions[index];
    onRecord(exercise, isCorrect, moduleId);
    if (isCorrect) {
      scoreRef.current += 1;
      setScore(scoreRef.current);
    }
    if (mode === 'exam') setExamResults(prev => [...prev, { exercise, isCorrect }]);
  }

  function handleNext() {
    const next = index + 1;
    if (next >= questions.length) {
      setDone(true);
    } else {
      setIndex(next);
    }
  }

  function handleRestart() {
    setIndex(0);
    setScore(0);
    scoreRef.current = 0;
    setDone(false);
    setExamResults([]);
  }

  if (done) {
    if (mode === 'exam') {
      return (
        <ExamReview
          results={examResults}
          score={score}
          total={questions.length}
          onRestart={handleRestart}
          onHome={onHome}
        />
      );
    }
    return (
      <ScoreSummary
        score={score}
        total={questions.length}
        onRestart={handleRestart}
        onHome={onHome}
      />
    );
  }

  return (
    <div className="exercise-screen">
      <div className="exercise-header">
        <button className="btn btn-ghost back-btn" onClick={onHome}>← Inicio</button>
        <div className="score-badge">✓ {score}</div>
      </div>
      <ProgressBar current={index} total={questions.length} />
      <QuestionCard
        key={`${moduleId}-${index}`}
        exercise={questions[index]}
        moduleId={moduleId}
        examMode={mode === 'exam'}
        onAnswer={handleAnswer}
        onNext={handleNext}
      />
    </div>
  );
}

function ExamReview({ results, score, total, onRestart, onHome }) {
  const pct = Math.round((score / total) * 100);
  const grade = pct >= 80 ? 'excellent' : pct >= 60 ? 'good' : 'needsWork';
  return (
    <div className="exam-review">
      <div className={`score-circle score-${grade}`}>
        <span className="score-number">{pct}%</span>
        <span className="score-fraction">{score}/{total}</span>
      </div>
      <h3 className="exam-review-title">Resultados del examen</h3>
      <div className="exam-results-list">
        {results.map(({ exercise, isCorrect }, i) => (
          <div key={i} className={`exam-result-item ${isCorrect ? 'correct' : 'wrong'}`}>
            <span className="exam-result-icon">{isCorrect ? '✓' : '✗'}</span>
            <div className="exam-result-text">
              <span className="exam-sentence">
                {exercise.sentence || exercise.original || `${exercise.before} ___ ${exercise.after}`}
              </span>
              {!isCorrect && <span className="exam-answer"> → {exercise.answer}</span>}
            </div>
          </div>
        ))}
      </div>
      <div className="score-actions">
        <button className="btn btn-primary" onClick={onRestart}>Repetir examen</button>
        <button className="btn btn-secondary" onClick={onHome}>Inicio</button>
      </div>
    </div>
  );
}
