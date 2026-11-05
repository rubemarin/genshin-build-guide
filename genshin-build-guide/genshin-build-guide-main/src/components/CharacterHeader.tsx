interface CharacterHeaderProps {
  name: string;
  subtitle: string;
  image: string;
}

export function CharacterHeader({ name, subtitle, image }: CharacterHeaderProps) {
  return (
    <header className="character-header">
      <img className="character-header__image" src={image} alt={`${subtitle}【${name}】`} />
      <h1 className="sr-only">{subtitle}【{name}】</h1>
    </header>
  );
}
