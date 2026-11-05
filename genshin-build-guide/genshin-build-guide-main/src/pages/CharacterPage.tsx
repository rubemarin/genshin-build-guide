import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArtifactSection } from '../components/ArtifactSection';
import { CharacterHeader } from '../components/CharacterHeader';
import { ComboSection } from '../components/ComboSection';
import { StatusSection } from '../components/StatusSection';
import { StickyTabs } from '../components/StickyTabs';
import { TalentSection } from '../components/TalentSection';
import { WeaponSection } from '../components/WeaponSection';
import { TeamSection } from '../components/TeamSection';
import { getCharacterGuide } from '../data/characters';
import type { GuideTab } from '../types/character';

export function CharacterPage() {
  const { characterId = '' } = useParams();
  const guide = getCharacterGuide(characterId);
  const [activeTab, setActiveTab] = useState<GuideTab>('weapons');

  if (!guide) {
    return (
      <main className="not-found">
        <h1>このキャラクターのページは準備中です。</h1>
        <p>キャラクター用のデータを登録すると、このURLにページが表示されます。</p>
        <Link to="/">キャラクター選択画面に戻る</Link>
      </main>
    );
  }

  return (
    <>
      <CharacterHeader name={guide.name} subtitle={guide.subtitle} image={guide.headerImage} />
      <StickyTabs activeTab={activeTab} onChange={setActiveTab} />
      <main className="page-content">
        {activeTab === 'weapons' && <WeaponSection weapons={guide.weapons} />}
        {activeTab === 'artifacts' && <ArtifactSection guide={guide.artifacts} />}
        {activeTab === 'status' && <StatusSection profiles={guide.statusProfiles} note={guide.statusNote} />}
        {activeTab === 'talents' && <TalentSection talents={guide.talents} note={guide.talentNote} />}
        {activeTab === 'teams' && <TeamSection teams={guide.teams} />}
        {activeTab === 'combo' && <ComboSection combo={guide.combo} />}
        <footer className="page-footer">原神 育成ガイド</footer>
      </main>
    </>
  );
}
