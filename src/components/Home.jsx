export default function Home({ onNavigate, moduleStats, errorCount, sessions }) {
  const modules = [
    { id: 'presente', icon: '📝', title: 'Presente', desc: 'être · avoir · aller' },
    { id: 'quique',   icon: '🔗', title: 'Qui / Que', desc: 'Pronombres relativos' },
    { id: 'cod',      icon: '🔄', title: 'COD', desc: 'le · la · les · l\'' },
    { id: 'preguntas',icon: '❓', title: 'Preguntas', desc: 'qui · que · où · quand…' },
    { id: 'vocabulario', icon: '🌿', title: 'Vocabulario', desc: 'Medio ambiente' },
    { id: 'redaccion',   icon: '✍️', title: 'Redacción guiada', desc: 'Describe y argumenta' },
  ];

  const recentSessions = sessions.slice(0, 3);

  return (
    <div className="home">
      <header className="home-header">
        <h1 className="app-title">Francés con Candela</h1>
        <p className="app-subtitle">Practica rápido, corrige al instante y repasa tus errores</p>
      </header>

      <div className="modules-grid">
        {modules.map(m => {
          const stats = moduleStats[m.id];
          const pct = stats && stats.attempts > 0
            ? Math.round((stats.correct / stats.attempts) * 100)
            : null;
          return (
            <div key={m.id} className="module-card" onClick={() => onNavigate(m.id)}>
              <span className="module-icon">{m.icon}</span>
              <div className="module-info">
                <strong className="module-title">{m.title}</strong>
                <span className="module-desc">{m.desc}</span>
              </div>
              {pct !== null && (
                <span className={`module-pct ${pct >= 80 ? 'pct-good' : pct >= 50 ? 'pct-mid' : 'pct-low'}`}>
                  {pct}%
                </span>
              )}
            </div>
          );
        })}
      </div>

      <button
        className={`module-card error-card ${errorCount === 0 ? 'error-card-empty' : ''}`}
        onClick={() => onNavigate('errores')}
      >
        <span className="module-icon">🔁</span>
        <div className="module-info">
          <strong className="module-title">Repasar errores</strong>
          <span className="module-desc">
            {errorCount === 0 ? 'Sin errores pendientes' : `${errorCount} pregunta${errorCount !== 1 ? 's' : ''} pendiente${errorCount !== 1 ? 's' : ''}`}
          </span>
        </div>
        {errorCount > 0 && <span className="error-badge-pill">{errorCount}</span>}
      </button>

      {recentSessions.length > 0 && (
        <div className="recent-section">
          <h3 className="recent-title">Últimas sesiones</h3>
          <div className="recent-list">
            {recentSessions.map((s, i) => {
              const pct = Math.round((s.score / s.total) * 100);
              const date = new Date(s.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
              return (
                <div key={i} className="recent-item">
                  <span className="recent-module">{s.module}</span>
                  <span className="recent-date">{date}</span>
                  <span className={`recent-score ${pct >= 80 ? 'pct-good' : pct >= 60 ? 'pct-mid' : 'pct-low'}`}>
                    {s.score}/{s.total}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
