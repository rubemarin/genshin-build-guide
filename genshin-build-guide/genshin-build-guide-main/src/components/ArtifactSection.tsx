import type { ArtifactGuide } from '../types/character';

export function ArtifactSection({ guide }: { guide: ArtifactGuide }) {
  return (
    <section className="section-stack">
      <div className="panel">
        <h2>おすすめ聖遺物</h2>
        <h3 className="set-name">{guide.recommendedSet}</h3>
        <div className="effect-grid">
          {guide.effects.map((effect) => (
            <div className="effect-card" key={effect.count}>
              <h4>{effect.count}</h4>
              <ul>
                {effect.effects.map((line) => <li key={line}>{line}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="panel">
        <h2>メインステータス</h2>
        <div className="main-stat-list">
          {guide.mainStats.map((stat) => (
            <div className="main-stat-row" key={stat.slot}>
              <strong>{stat.slot}</strong>
              <div>
                <span>1位：{stat.first}</span>
                {stat.second && <span>2位：{stat.second}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {guide.alternatives && guide.alternatives.length > 0 && (
        <div className="panel">
          <h2>代替聖遺物</h2>
          {guide.alternatives.map((item) => <p key={item}>{item}</p>)}
        </div>
      )}
    </section>
  );
}
