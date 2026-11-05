import { Link } from 'react-router-dom';
import { characterGuides } from '../data/characters';

export function CharacterSelectPage() {
  const guides = Object.values(characterGuides);

  return (
    <main className="character-select">
      <header className="character-select__header">
        <p className="character-select__eyebrow">GENSHIN IMPACT</p>
        <h1>原神 育成ガイド</h1>
        <p>キャラクターを選択してください。</p>
      </header>

      <section className="character-select__section" aria-labelledby="character-list-title">
        <h2 id="character-list-title">キャラクター一覧</h2>
        <div className="character-select__grid">
          {guides.map((guide) => (
            <Link
              className="character-select__card"
              to={`/characters/${guide.id}`}
              key={guide.id}
            >
              <img src={guide.iconImage} alt="" className="character-select__icon" />
              <span className="character-select__name">{guide.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <footer className="page-footer">原神 育成ガイド</footer>
    </main>
  );
}
