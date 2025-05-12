
export const AbilityName = {
  Vigor: "生命力",
  Mind: "精神力",
  Endurance: "持久力",
  Strength: "筋力",
  Dexterity: "技量",
  Intelligence: "知力",
  Faith: "信仰",
  Arcane: "神秘",
} as const;
export type AbilityName = (typeof AbilityName)[keyof typeof AbilityName];

export const ClassName = {
  Vagabond: "放浪騎士",
  Warrior: "剣士",
  Hero: "勇者",
  Bandit: "盗賊",
  Astrologer: "星見",
  Prophet: "預言者",
  Samurai: "侍",
  Prisoner: "囚人",
  Confessor: "密使",
  Wretch: "素寒貧",
} as const;
export type ClassName = (typeof ClassName)[keyof typeof ClassName];

export const ClassLabel = "素性";
export const LevelLabel = "レベル";

export type Clazz = Record<AbilityName, number> & {
  [ClassLabel]: ClassName;
  [LevelLabel]: number;
}
