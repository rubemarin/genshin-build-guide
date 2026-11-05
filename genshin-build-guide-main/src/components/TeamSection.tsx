import type { TeamGuide } from '../types/character';
import { TeamCard } from './TeamCard';

export function TeamSection({ teams }: { teams: TeamGuide[] }) {
  return (
    <section className="section-stack">
      <div className="panel">
        <h2>おすすめ編成</h2>
        <p className="muted">キャラクター画像・名前から各キャラクターのページへ移動できます。メンバー名と聖遺物は guide.ts で編集してください。</p>
        <div className="team-list">
          {teams.map((team) => <TeamCard key={team.id} team={team} />)}
        </div>
      </div>
    </section>
  );
}
