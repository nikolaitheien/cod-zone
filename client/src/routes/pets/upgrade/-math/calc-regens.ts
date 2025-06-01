import { StarLevel } from '@/types/pet-upgrade/star-level'
import { Actions } from '../-components/ActionSelect'

export function calcRegens(
  avgRegens: number,
  actions: Actions,
  duplicates: Record<StarLevel, number>
): number {
  const regen0 = actions[0] === 'release' ? duplicates[0] * 0.8 : 0
  const regen1 = actions[1] === 'release' ? duplicates[1] * 0.8 : 0
  const regen2 = actions[2] === 'release' ? Math.min(duplicates[2], 4) : 0
  return (regen0 + regen1 + regen2) * avgRegens
}
