import type { ComboGuide } from '../types/character';

function ComboLine({ label, actions }: { label: string; actions: string[] }) {
  return (
    <div className="combo-line-block">
      <h3>{label}</h3>
      <div className="combo-line" aria-label={`${label}のコンボ`}>
        {actions.map((action, index) => (
          <span className={`combo-token ${action === 'Q' || action === 'N3C' ? 'is-highlight' : ''}`} key={`${action}-${index}`}>{action}</span>
        ))}
      </div>
    </div>
  );
}

export function ComboSection({ combo }: { combo: ComboGuide }) {
  return (
    <section className="section-stack">
      <div className="panel">
        <h2>使い方・コンボ</h2>
        <p className="muted">これだけ覚えておきたい基本コンボ</p>
        <ComboLine label="元素爆発あり" actions={combo.withBurst} />
        <ComboLine label="元素爆発なし" actions={combo.withoutBurst} />
      </div>

      <div className="panel">
        <h2>コンボ中の用語</h2>
        <div className="glossary-list">
          {combo.glossary.map((item) => (
            <div className="glossary-row" key={item.code}>
              <strong>{item.code}</strong>
              <span>{item.name}</span>
              <p>{item.explanation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
