import { useState } from 'react';
import QuestionCard from './QuestionCard';
import ProgressBar from './ProgressBar';

export default function ErrorReview({ errorList, onHome, onRecord, onSaveSession }) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  if (errorList.length === 0) {
    return (
      <div className="exercise-screen">
        <div className="exercise-header">
          <button className="btn btn-ghost back-btn" onClick={onHome}>← Inicio</button>
        </div>
        <div className="empty-errors">
          <span className="empty-icon">🎉</span>
          <h2>Sin errores pendientes</h2>
          <p>Cuando falles una pregunta aparecerá aquí para repasar.</p>
          <button className="btn btn-primary" onClick={onHome}>Volver al inicio</button>
        </div>
      </div>
    );
  }

  if (done) {
    const pct = Math.round((score / errorList.length) * 100);
    const grade = pct >= 80 ? 'excellent' : pct >= 60 ? 'good' : 'needsWork';
    return (
      <div className="exercise-screen">
        <div className="exercise-header">
          <button className="btn btn-ghost back-btn" onClick={onHome}>← Inicio</button>
        </div>
        <div className="score-summary">
          <div className={`score-circle score-${grade}`}>
            <span className="score-number">{pct}%</span>
            <span className="score-fraction">{score}/{errorList.length}</span>
          </div>
          <p className="score-message">
            {pct === 100
              ? '¡Has repasado todos los errores correctamente!'
              : 'Sigue practicando los que aún fallan.'}
          </p>
          <div className="score-actions">
            <button className="btn btn-primary" onClick={onHome}>Inicio</button>
          </div>
        </div>
      </div>
    );
  }

  const current = errorList[index];

  function handleAnswer(isCorrect) {
    onRecord(current.exercise, isCorrect, current.moduleId);
    if (isCorrect) setScore(s => s + 1);
  }

  function handleNext() {
    const next = index + 1;
    if (next >= errorList.length) {
      onSaveSession('errores', score, errorList.length);
      setDone(true);
    } else {
      setIndex(next);
    }
  }

  return (
    <div className="exercise-screen">
      <div className="exercise-header">
        <button className="btn btn-ghost back-btn" onClick={onHome}>← Inicio</button>
        <div className="score-badge error-badge">✗ {errorList.length} pendientes</div>
      </div>
      <ProgressBar current={index} total={errorList.length} />
      <div className="error-label">Repasando errores · {index + 1}/{errorList.length}</div>
      <QuestionCard
        key={`err-${current.exercise.id}-${index}`}
        exercise={current.exercise}
        moduleId={current.moduleId}
        examMode={false}
        onAnswer={handleAnswer}
        onNext={handleNext}
      />
    </div>
  );
}
