import { vesnaGuide } from './vesna/guide';
import type { CharacterGuide } from '../../types/character';

export const characterGuides: Record<string, CharacterGuide> = {
  vesna: vesnaGuide,
  // キャラクターを追加したら、ここに import と登録を追加します。
};

export function getCharacterGuide(id: string): CharacterGuide | undefined {
  return characterGuides[id];
}
