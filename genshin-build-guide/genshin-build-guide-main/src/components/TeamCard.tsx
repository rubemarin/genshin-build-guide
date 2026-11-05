import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { TeamGuide } from '../types/character';
import { RotationTable } from './RotationTable';

export function TeamCard({ team }: { team: TeamGuide }) {
  const [showRotation, setShowRotation] = useState(false);

  return (
    <article className="team-card">
      <div className="team-card__heading">
        <h3>{team.title}</h3>
        <button className="secondary-button" type="button" onClick={() => setShowRotation((value) => !value)}>
          {showRotation ? 'ローテを閉じる' : 'ローテを表示'}
        </button>
      </div>

      <div className="team-members">
        {team.members.map((member, index) => (
          <div className="team-member" key={`${team.id}-${member.characterId}-${index}`}>
            <Link className="team-member__link" to={`/characters/${member.characterId}`} aria-label={`${member.name}のページ`}>
              {member.icon ? (
                <img className="team-member__icon" src={member.icon} alt="" />
              ) : (
                <span className="team-member__placeholder" aria-hidden="true">?</span>
              )}
              <strong>{member.name}</strong>
            </Link>
            <span className="team-member__artifact">{member.artifactSet}</span>
          </div>
        ))}
      </div>

      {team.notes.length > 0 && (
        <ul className="team-notes">
          {team.notes.map((note) => <li key={note}>{note}</li>)}
        </ul>
      )}

      {showRotation && (
        <div className="rotation-panel">
          <h4>ローテーション</h4>
          <RotationTable rows={team.rotation} />
        </div>
      )}
    </article>
  );
}
