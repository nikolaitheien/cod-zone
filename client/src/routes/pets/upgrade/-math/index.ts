import { Actions } from '@/types/pet-upgrade/actions'
import { Prices } from '@/types/pet-upgrade/prices'
import { StarLevel } from '@/types/pet-upgrade/star-level'
import { calcDuplicates } from './calc-duplicates'
import { calcPrice } from './calc-price'
import { calcRegens } from './calc-regens'

export type TalentResult = {
  totalDups: Record<StarLevel, number>
  totalPrice: number
  totalRegens: number
}

export function calcUpgrade(
  actions: Actions,
  prices: Prices,
  failRate: number,
  avgRegens: number
): TalentResult {
  // Calculate the duplicates needed
  const totalDups = calcDuplicates(actions, failRate)

  // Calculate the price in pet coins. Fail rate does not affect price.
  const totalPrice = calcPrice(actions, prices, calcDuplicates(actions, 0))

  // Calculate the number of regeneration potions needed
  const totalRegens = calcRegens(avgRegens, actions, totalDups)

  return { totalDups, totalPrice, totalRegens }
}
