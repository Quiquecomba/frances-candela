export default function ScoreSummary({ score, total, onRestart, onHome }) {
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const grade = pct >= 80 ? 'excellent' : pct >= 60 ? 'good' : 'needsWork';
  const messages = {
    excellent: '¡Excelente trabajo! Dominas este tema.',
    good: 'Bien hecho. Repasa los errores para mejorar.',
    needsWork: 'Sigue practicando, puedes mejorar mucho.',
  };

  return (
    <div className="score-summary">
      <div className={`score-circle score-${grade}`}>
        <span className="score-number">{pct}%</span>
        <span className="score-fraction">{score}/{total}</span>
      </div>
      <p className="score-message">{messages[grade]}</p>
      <div className="score-actions">
        <button className="btn btn-primary" onClick={onRestart}>Practicar de nuevo</button>
        <button className="btn btn-secondary" onClick={onHome}>Inicio</button>
      </div>
    </div>
  );
}
