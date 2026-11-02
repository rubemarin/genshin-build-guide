import type { CharacterGuide } from '../../../types/character';

// 新しいキャラクターを追加するときは、このファイルをコピーして編集してください。
export const characterTemplate: CharacterGuide = {
  id: 'character-id',
  name: 'キャラクター名',
  subtitle: '育て方・使い方',
  headerImage: '/images/characters/character-id/header.webp',
  iconImage: '/images/characters/character-id/icon.webp',
  artifacts: {
    recommendedSet: 'おすすめ聖遺物セット',
    effects: [],
    mainStats: [],
    alternatives: [],
  },
  statusProfiles: [],
  statusNote: '',
  talents: [],
  talentNote: '',
  teams: [],
  combo: { withBurst: [], withoutBurst: [], glossary: [] },
};
