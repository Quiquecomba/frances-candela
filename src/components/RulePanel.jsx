import { useState } from 'react';
import { rules } from '../data/exercises';

export default function RulePanel({ moduleId }) {
  const [open, setOpen] = useState(false);
  const moduleRules = rules[moduleId];
  if (!moduleRules) return null;

  return (
    <div className="rule-panel">
      <button className="btn btn-ghost rule-toggle" onClick={() => setOpen(o => !o)}>
        {open ? '▲ Ocultar regla' : '▼ Ver regla'}
      </button>
      {open && (
        <div className="rule-content">
          {moduleId === 'presente' && moduleRules.map(r => (
            <div key={r.title} className="rule-block">
              <strong>{r.title}</strong>
              <div className="conjugation-grid">
                {r.conjugation.map(c => <span key={c} className="conj-cell">{c}</span>)}
              </div>
              <p className="rule-use">{r.use}</p>
            </div>
          ))}
          {moduleId === 'quique' && moduleRules.map(r => (
            <div key={r.title} className="rule-block">
              <strong className="rule-tag">{r.title}</strong>
              <p>{r.rule}</p>
              <p className="rule-example">Ej: {r.example}</p>
            </div>
          ))}
          {moduleId === 'cod' && (
            <table className="rule-table">
              <thead><tr><th>Pronombre</th><th>Uso</th><th>Ejemplo</th></tr></thead>
              <tbody>
                {moduleRules.map(r => (
                  <tr key={r.pronoun}>
                    <td><strong>{r.pronoun}</strong></td>
                    <td>{r.use}</td>
                    <td className="rule-example">{r.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {moduleId === 'preguntas' && (
            <table className="rule-table">
              <thead><tr><th>Palabra</th><th>Significa</th><th>Ejemplo</th></tr></thead>
              <tbody>
                {moduleRules.map(r => (
                  <tr key={r.word}>
                    <td><strong>{r.word}</strong></td>
                    <td>{r.meaning}</td>
                    <td className="rule-example">{r.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}
