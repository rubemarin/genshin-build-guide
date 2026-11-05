import type { CharacterGuide } from '../../../types/character';

export const vesnaGuide: CharacterGuide = {
  id: 'vesna',
  name: 'ヴェスナ',
  subtitle: '初心者のための育て方・使い方',
  headerImage: `${import.meta.env.BASE_URL}images/characters/vesna/header.webp`,
  iconImage: `${import.meta.env.BASE_URL}images/characters/vesna/icon.webp`,
  artifacts: {
    recommendedSet: '純血の証 4セット',
    effects: [
      { count: '2セット効果', effects: ['攻撃力 +18%'] },
      { count: '4セット効果', effects: ['会心率 +16%', '星拡散ダメージ +40%'] },
    ],
    mainStats: [
      { slot: '時計', first: '攻撃力%', second: '元素熟知' },
      { slot: '杯', first: '攻撃力%', second: '元素熟知' },
      { slot: '冠', first: '会心率 / 会心ダメージ' },
    ],
    alternatives: [],
  },
  // PDFの4列を、武器名を表示しない「条件A〜D」として掲載しています。
  statusProfiles: [
    { id: 'a', label: '条件A', attack: '3100〜', mastery: '0〜', energyRecharge: '100%〜', critRate: '84%', critDamage: '180%〜' },
    { id: 'b', label: '条件B', attack: '3100〜', mastery: '0〜', energyRecharge: '100%〜', critRate: '84%', critDamage: '180%〜' },
    { id: 'c', label: '条件C', attack: '2650〜', mastery: '0〜', energyRecharge: '100%〜', critRate: '84%', critDamage: '190%〜' },
    { id: 'd', label: '条件D', attack: '2650〜', mastery: '165〜', energyRecharge: '100%〜', critRate: '70%〜84%', critDamage: '170%〜' },
  ],
  statusNote: 'このステータスは戦闘前の目標値です。氷共鳴が発動する場合、会心率は最大70%を目安にします。',
  talents: [
    { name: '通常攻撃', level: 'Lv.1〜6' },
    { name: '元素スキル', level: 'Lv.9〜10' },
    { name: '元素爆発', level: 'Lv.8〜10' },
  ],
  talentNote: '各天賦の目標レベルは元資料の記載に基づいています。',
  teams: [
    {
      id: 'team-1', title: '編成1',
      members: [
        { characterId: 'vesna', name: 'ヴェスナ', artifactSet: '純血の証 4セット', icon: `${import.meta.env.BASE_URL}images/characters/vesna/icon.webp` },
        { characterId: 'member-a', name: 'キャラクター名を設定', artifactSet: '聖遺物セットを設定' },
        { characterId: 'member-b', name: 'キャラクター名を設定', artifactSet: '聖遺物セットを設定' },
        { characterId: 'member-c', name: 'キャラクター名を設定', artifactSet: '聖遺物セットを設定' },
      ],
      notes: ['風共鳴（19秒ローテーションが可能）', '現状最強PTだが、ボス相手に氷拡散が不安定'],
      rotation: [],
    },
    {
      id: 'team-2', title: '編成2',
      members: [
        { characterId: 'vesna', name: 'ヴェスナ', artifactSet: '純血の証 4セット', icon: `${import.meta.env.BASE_URL}images/characters/vesna/icon.webp` },
        { characterId: 'member-a', name: 'キャラクター名を設定', artifactSet: '聖遺物セットを設定' },
        { characterId: 'member-b', name: 'キャラクター名を設定', artifactSet: '聖遺物セットを設定' },
        { characterId: 'member-c', name: 'キャラクター名を設定', artifactSet: '聖遺物セットを設定' },
      ],
      notes: ['氷共鳴（会心率 +15%のため会心率に注意）'],
      rotation: [],
    },
    {
      id: 'team-3', title: '編成3',
      members: [
        { characterId: 'vesna', name: 'ヴェスナ', artifactSet: '純血の証 4セット', icon: `${import.meta.env.BASE_URL}images/characters/vesna/icon.webp` },
        { characterId: 'member-a', name: 'キャラクター名を設定', artifactSet: '聖遺物セットを設定' },
        { characterId: 'member-b', name: 'キャラクター名を設定', artifactSet: '聖遺物セットを設定' },
        { characterId: 'member-c', name: 'キャラクター名を設定', artifactSet: '聖遺物セットを設定' },
      ],
      notes: ['風共鳴 + 氷共鳴', 'ディオナの元素爆発の範囲に注意が必要'],
      rotation: [],
    },
    {
      id: 'team-4', title: '編成4',
      members: [
        { characterId: 'vesna', name: 'ヴェスナ', artifactSet: '純血の証 4セット', icon: `${import.meta.env.BASE_URL}images/characters/vesna/icon.webp` },
        { characterId: 'member-a', name: 'キャラクター名を設定', artifactSet: '聖遺物セットを設定' },
        { characterId: 'member-b', name: 'キャラクター名を設定', artifactSet: '聖遺物セットを設定' },
        { characterId: 'member-c', name: 'キャラクター名を設定', artifactSet: '聖遺物セットを設定' },
      ],
      notes: ['風共鳴 + 氷共鳴', 'サブ火力が高く、翠緑が効果的'],
      rotation: [],
    },
    {
      id: 'team-5', title: '編成5',
      members: [
        { characterId: 'vesna', name: 'ヴェスナ', artifactSet: '純血の証 4セット', icon: `${import.meta.env.BASE_URL}images/characters/vesna/icon.webp` },
        { characterId: 'member-a', name: 'キャラクター名を設定', artifactSet: '聖遺物セットを設定' },
        { characterId: 'member-b', name: 'キャラクター名を設定', artifactSet: '聖遺物セットを設定' },
        { characterId: 'member-c', name: 'キャラクター名を設定', artifactSet: '聖遺物セットを設定' },
      ],
      notes: ['風共鳴', '氷主人公を採用する場合は、バフ維持が難しいため非推奨'],
      rotation: [],
    },
    {
      id: 'team-6', title: '編成6',
      members: [
        { characterId: 'vesna', name: 'ヴェスナ', artifactSet: '純血の証 4セット', icon: `${import.meta.env.BASE_URL}images/characters/vesna/icon.webp` },
        { characterId: 'member-a', name: 'キャラクター名を設定', artifactSet: '聖遺物セットを設定' },
        { characterId: 'member-b', name: 'キャラクター名を設定', artifactSet: '聖遺物セットを設定' },
        { characterId: 'member-c', name: 'キャラクター名を設定', artifactSet: '聖遺物セットを設定' },
      ],
      notes: ['風共鳴 + 氷共鳴', '低コスト編成。星4キャラクターが完凸未満なら、七七と入れ替える案も有力'],
      rotation: [],
    },
  ],
  combo: {
    withBurst: ['E', 'N1C', 'sE', 'N1C', 'sE', 'Q', 'sE', 'N1C', 'sE', 'N1C', 'sE'],
    withoutBurst: ['E', 'N1C', 'sE', 'N1C', 'sE', 'N3C', 'sE', 'N1C', 'sE', 'N1C', 'sE'],
    glossary: [
      { code: 'E', name: 'スキル', explanation: 'スキル短押し' },
      { code: 'sE', name: '特殊スキル', explanation: 'スキル短押し（スキルアイコンが光る）' },
      { code: 'N1C', name: '通常1重撃', explanation: '通常攻撃長押し' },
      { code: 'N3C', name: '通常3重撃', explanation: '通常攻撃2回 + 通常攻撃長押し' },
      { code: 'Q', name: '元素爆発', explanation: '元素爆発短押し（発動可能な場合のみ）' },
    ],
  },
};
