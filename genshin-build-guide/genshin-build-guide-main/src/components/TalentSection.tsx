import type { TalentTarget } from '../types/character';

export function TalentSection({ talents, note }: { talents: TalentTarget[]; note: string }) {
  return (
    <section className="section-stack">
      <div className="panel">
        <h2>目標天賦Lv.</h2>
        <div className="talent-list">
          {talents.map((talent) => (
            <div className="talent-row" key={talent.name}>
              <strong>{talent.name}</strong>
              <span>{talent.level}</span>
            </div>
          ))}
        </div>
        <p className="muted">{note}</p>
      </div>
    </section>
  );
}
