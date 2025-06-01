import type { GameItem } from '@/types/game-item'

export const ALL_SPEEDUP_SOURCES = ['goblin_market', 'vip_shop']
export type SpeedupSource = (typeof ALL_SPEEDUP_SOURCES)[number]

export const ALL_SPEEDUP_TYPES = [
  'universal',
  'training',
  'research',
  'building',
]
export type SpeedupType = (typeof ALL_SPEEDUP_TYPES)[number]

export type Speedup = {
  item_id: GameItem['id']
  source: SpeedupSource
  type: SpeedupType
  minutes: number
  price: number
  minutes_per_gem: number
  sale: number
  amount: number
}
