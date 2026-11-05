import type { WeaponGuide } from '../types/character';

export function WeaponSection({ weapons }: { weapons: WeaponGuide[] }) {
  return (
    <section className="section-stack">
      <div className="panel">
        <h2>おすすめ武器</h2>
        <div className="weapon-grid">
          {weapons.map((weapon) => (
            <article className="weapon-card" key={weapon.name}>
              <img className="weapon-card__image" src={weapon.image} alt="" />
              <div className="weapon-card__body">
                <div className="weapon-card__heading">
                  <span className="weapon-card__rarity">{weapon.rarity}</span>
                  <h3>{weapon.name}</h3>
                </div>
                <dl className="weapon-card__stats">
                  <div><dt>基礎攻撃力</dt><dd>{weapon.baseAttack}</dd></div>
                  <div><dt>サブステータス</dt><dd>{weapon.subStat}</dd></div>
                </dl>
                <div className="weapon-card__passive">
                  <p>武器効果（{weapon.refinement}）</p>
                  <ul>{weapon.effects.map((effect) => <li key={effect}>{effect}</li>)}</ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
