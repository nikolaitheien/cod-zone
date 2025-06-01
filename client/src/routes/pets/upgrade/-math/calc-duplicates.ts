import { Actions } from '@/types/pet-upgrade/actions'
import { StarLevel } from '@/types/pet-upgrade/star-level'

const PTS: Record<0 | 1 | 2, Record<Actions[0], number>> = {
  0: { consume: 5, release: 10, promote: 40 },
  1: { consume: 50, release: 100, promote: 400 },
  2: { consume: 500, release: 1000, promote: 4000 },
} as const

export function calcDuplicates(
  actions: Actions,
  failRate = 0
): Record<StarLevel, number> {
  if (failRate < 0 || failRate > 1) {
    throw new RangeError('failRate must be between 0 and 1.')
  }

  const dup: Record<StarLevel, number> = { 0: 0, 1: 0, 2: 0, 3: 1 }

  for (const tier of [2, 1, 0] as const) {
    const next = (tier + 1) as StarLevel

    const ptsPerAttempt = PTS[tier][actions[tier]]
    const successRate = actions[tier] === 'release' ? 1 - failRate : 1
    if (successRate === 0) {
      throw new Error('failRate = 1 makes release impossible.')
    }

    const expectedPtsPerDup = ptsPerAttempt * successRate

    const numPerDup = 1 + PTS[tier].promote / expectedPtsPerDup
    dup[tier] = dup[next] * numPerDup
  }
  return dup
}

// import { Actions } from '@/types/pet-upgrade/actions'
// import { StarLevel } from '@/types/pet-upgrade/star-level'

// const PTS: Record<0 | 1 | 2, Record<Actions[0], number>> = {
//   0: { consume: 5, release: 10, promote: 40 },
//   1: { consume: 50, release: 100, promote: 400 },
//   2: { consume: 500, release: 1000, promote: 4000 },
// } as const

// export function calcDuplicates(actions: Actions): Record<StarLevel, number> {
//   const dup: Record<StarLevel, number> = { 0: 0, 1: 0, 2: 0, 3: 1 }

//   for (const tier of [2, 1, 0] as const) {
//     const next = (tier + 1) as StarLevel
//     const ptsPerDup = PTS[tier][actions[tier]]
//     const numPerDup = 1 + PTS[tier].promote / ptsPerDup
//     dup[tier] = dup[next] * numPerDup
//   }
//   return dup
// }
