import { useState } from 'react';
import { writingTemplates, vocabularyWords } from '../data/exercises';

const vocabFr = vocabularyWords.map(w => w.fr.toLowerCase().replace(/^(le |la |les |l'|l')/, ''));

export default function WritingPractice({ onHome }) {
  const template = writingTemplates[0];
  const [lines, setLines] = useState(template.prompts.map(() => ''));
  const [showExample, setShowExample] = useState(false);
  const [checked, setChecked] = useState(false);

  const fullText = lines.join('\n');

  const checks = [
    {
      label: '¿Tiene al menos 4 frases?',
      pass: lines.filter(l => l.trim().length > 5).length >= 4,
    },
    {
      label: '¿Usa verbos en francés?',
      pass: /\b(est|sont|a|avons|il y a|faut|pense|va|vont|peut)\b/i.test(fullText),
    },
    {
      label: '¿Usa vocabulario de medio ambiente?',
      pass: vocabFr.some(w => w.length > 3 && fullText.toLowerCase().includes(w)),
    },
    {
      label: '¿Tiene estructura clara (4 partes)?',
      pass: lines.every(l => l.trim().length > 2),
    },
  ];

  const passCount = checks.filter(c => c.pass).length;

  function updateLine(i, val) {
    setLines(prev => prev.map((l, idx) => idx === i ? val : l));
    setChecked(false);
  }

  return (
    <div className="exercise-screen">
      <div className="exercise-header">
        <button className="btn btn-ghost back-btn" onClick={onHome}>← Inicio</button>
      </div>

      <div className="writing-card">
        <h2 className="writing-title">{template.title}</h2>

        <div className="vocab-hints">
          <span className="vocab-hint-label">Vocabulario útil:</span>
          {template.vocabularyHints.map(w => (
            <span key={w} className="vocab-tag">{w}</span>
          ))}
        </div>

        <div className="writing-form">
          {template.prompts.map((prompt, i) => (
            <div key={i} className="writing-row">
              <label className="writing-label">{prompt.label}</label>
              <textarea
                className="writing-textarea"
                value={lines[i]}
                onChange={e => updateLine(i, e.target.value)}
                placeholder={prompt.placeholder}
                rows={2}
              />
            </div>
          ))}
        </div>

        <div className="writing-actions">
          <button className="btn btn-primary" onClick={() => setChecked(true)}>
            Revisar mi redacción
          </button>
          <button className="btn btn-ghost" onClick={() => setShowExample(s => !s)}>
            {showExample ? 'Ocultar ejemplo' : 'Ver ejemplo'}
          </button>
        </div>

        {showExample && (
          <div className="writing-example">
            <strong>Ejemplo:</strong>
            <pre className="example-text">{template.example}</pre>
          </div>
        )}

        {checked && (
          <div className="checklist">
            <h3 className="checklist-title">Resultado: {passCount}/4</h3>
            {checks.map((c, i) => (
              <div key={i} className={`check-item ${c.pass ? 'check-pass' : 'check-fail'}`}>
                <span className="check-icon">{c.pass ? '✓' : '✗'}</span>
                <span>{c.label}</span>
              </div>
            ))}
            {passCount === 4 && (
              <p className="checklist-congrats">¡Perfecto! Tu redacción tiene todo lo necesario.</p>
            )}
            {passCount < 4 && (
              <p className="checklist-tip">Completa las partes que faltan y vuelve a revisar.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
