export type GuideTab = 'weapons' | 'artifacts' | 'status' | 'talents' | 'teams' | 'combo';

export interface WeaponGuide {
  name: string;
  rarity: string;
  baseAttack: string;
  subStat: string;
  refinement: string;
  effects: string[];
  image: string;
}

export interface ArtifactEffect {
  count: string;
  effects: string[];
}

export interface MainStatOption {
  slot: string;
  first: string;
  second?: string;
}

export interface ArtifactGuide {
  recommendedSet: string;
  effects: ArtifactEffect[];
  mainStats: MainStatOption[];
  alternatives?: string[];
}

export interface StatusProfile {
  id: string;
  label: string;
  attack: string;
  mastery: string;
  energyRecharge: string;
  critRate: string;
  critDamage: string;
}

export interface TalentTarget {
  name: string;
  level: string;
}

export interface TeamMember {
  characterId: string;
  name: string;
  artifactSet: string;
  icon?: string;
}

export interface RotationRow {
  characterName: string;
  actions: string;
}

export interface TeamGuide {
  id: string;
  title: string;
  members: TeamMember[];
  notes: string[];
  rotation: RotationRow[];
}

export interface ComboGuide {
  withBurst: string[];
  withoutBurst: string[];
  glossary: { code: string; name: string; explanation: string }[];
}

export interface CharacterGuide {
  id: string;
  name: string;
  subtitle: string;
  headerImage: string;
  iconImage: string;
  weapons: WeaponGuide[];
  artifacts: ArtifactGuide;
  statusProfiles: StatusProfile[];
  statusNote: string;
  talents: TalentTarget[];
  talentNote: string;
  teams: TeamGuide[];
  combo: ComboGuide;
}
