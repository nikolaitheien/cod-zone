export const ALL_CATEGORIES = [
  'artifact',
  'resource',
  'speedup',
  'boost',
  'other',
  'pet_item',
] as const

export type GameItemCategory = (typeof ALL_CATEGORIES)[number]

export type GameItem = {
  id: string
  name: string
  category: GameItemCategory
  gem_value: number
  gem_value_explanation: string
}
