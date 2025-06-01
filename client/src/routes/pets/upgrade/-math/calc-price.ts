import { Actions } from '@/types/pet-upgrade/actions'
import { Prices } from '@/types/pet-upgrade/prices'
import { StarLevel } from '@/types/pet-upgrade/star-level'

export function calcPrice(
  actions: Actions,
  prices: Prices,
  duplicates: Record<StarLevel, number>
): number {
  let coins = 0
  for (const tier of [0, 1, 2] as const) {
    if (actions[tier] === 'release') {
      const next = (tier + 1) as StarLevel
      coins += duplicates[tier] * prices[next]
    }
  }
  return coins
}
