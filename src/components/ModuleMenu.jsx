export default function ModuleMenu({ title, desc, onPractice, onExam, onHome }) {
  return (
    <div className="exercise-screen">
      <div className="exercise-header">
        <button className="btn btn-ghost back-btn" onClick={onHome}>← Inicio</button>
      </div>
      <div className="module-menu-card">
        <h2 className="module-menu-title">{title}</h2>
        <p className="module-menu-desc">{desc}</p>
        <div className="module-menu-options">
          <button className="mode-card" onClick={onPractice}>
            <strong>Modo práctica</strong>
            <span>10 preguntas aleatorias con pistas y explicaciones</span>
          </button>
          <button className="mode-card mode-exam" onClick={onExam}>
            <strong>Modo examen</strong>
            <span>20 preguntas sin pistas · corrección al final</span>
          </button>
        </div>
      </div>
    </div>
  );
}
