import { Dices } from '../redux/reducers/dices'
import { Combination } from '../redux/reducers/combinations'
import { uniq } from './uniq'

export type Return<T> = {
  points?: T
  maxPoints?: T
}

type MaxPoints = 25 | 30 | 50

type ResultsMap = {
  [Combination.SMALL_STRAIGHT]: Return<MaxPoints>
  [Combination.BIG_STRAIGHT]: Return<MaxPoints>
  [Combination.THE_YACHT]: Return<MaxPoints>
  [Combination.TWO_PAIR]: Return<MaxPoints>
  [Combination.FULL_HOUSE]: Return<MaxPoints>
}

export const resultsMap: ResultsMap = {
  [Combination.SMALL_STRAIGHT]: { points: 25, maxPoints: 25 },
  [Combination.BIG_STRAIGHT]: { points: 30, maxPoints: 30 },
  [Combination.THE_YACHT]: { points: 50, maxPoints: 50 },
  [Combination.TWO_PAIR]: { points: 25, maxPoints: 25 },
  [Combination.FULL_HOUSE]: { points: 30, maxPoints: 30 },
}

export type CheckMatch = (combinationType: Combination, dices: Dices) => Return<number>

export const checkMatch: CheckMatch = (combinationType, dices) => {
  const values = Object.values(dices)
  const sequence = values.sort()
  const seq = uniq(sequence)
  const seqString = seq.toString()

  switch (combinationType) {
    case Combination.ONE:
    case Combination.TWO:
    case Combination.THREE:
    case Combination.FOUR:
    case Combination.FIVE:
    case Combination.SIX: {
      const matches = sequence.filter(item => item === combinationType)
      if (matches.length >= 3) {
        return {
          points: matches.length * combinationType,
          maxPoints: 5 * combinationType,
        }
      }
      break
    }
    case Combination.EQUAL_3:
    case Combination.EQUAL_4: {
      const count = parseInt(combinationType.split('_')[1], 10)

      const counts: { [k: string]: number } = {}

      sequence.forEach(x => {
        counts[x] = (counts[x] || 0) + 1
      })

      const number = parseInt(Object.keys(counts).filter(key => counts[key] >= count)[0], 10)

      if (!isNaN(number)) {
        return {
          points: number * count,
          maxPoints: 6 * count,
        }
      }

      break
    }
    case Combination.SMALL_STRAIGHT: {
      const successResult = resultsMap[Combination.SMALL_STRAIGHT]

      if (seq.length === 5) {
        if (['1,2,3,4,5', '2,3,4,5,6'].indexOf(seqString) !== -1) {
          return successResult
        }
        for (let i = 1; i <= seq.length; i++) {
          if (seq[i - 1] !== i) {
            let seqCopy = [...seq]
            seqCopy.shift()
            if (seqCopy.length === 4 && seqCopy.toString() === '3,4,5,6') {
              return successResult
            }
            seqCopy = [...seq]
            seqCopy.pop()
            if (seqCopy.length === 4 && seqCopy.toString() === '1,2,3,4') {
              return successResult
            }
          }
        }
      }

      if (seq.length === 4 && ['1,2,3,4', '2,3,4,5', '3,4,5,6'].indexOf(seqString) !== -1) {
        return successResult
      }
      break
    }
    case Combination.BIG_STRAIGHT: {
      if (seq.length === 5 && ['1,2,3,4,5', '2,3,4,5,6'].indexOf(seqString) !== -1) {
        return resultsMap[Combination.BIG_STRAIGHT]
      }
      break
    }
    case Combination.THE_YACHT: {
      if (seq.length === 1 && seq[0] !== -1) {
        return resultsMap[Combination.THE_YACHT]
      }
      break
    }
    case Combination.CHANCE: {
      return {
        points: sequence.reduce((a, b) => a + b, 0),
        maxPoints: 30,
      }
    }
    case Combination.FULL_HOUSE: {
      if (seq.length === 2) {
        const sorted = [...sequence].sort()
        if (
          (
            sorted[0] === sorted[1] &&
            sorted[1] === sorted[2] &&
            sorted[3] === sorted[4] &&
            sorted[0] !== sorted[3]
          ) || (
            sorted[0] === sorted[1] &&
            sorted[2] === sorted[3] &&
            sorted[3] === sorted[4] &&
            sorted[0] !== sorted[2]
          )
        ) {
          return resultsMap[Combination.FULL_HOUSE]
        }
      }
      break
    }
    case Combination.TWO_PAIR: {
      const sorted = sequence.sort()
      if (
        (
          sorted[0] === sorted[1] &&
          sorted[2] === sorted[3] &&
          sorted[0] !== sorted[2]
        ) || (
          sorted[1] === sorted[2] &&
          sorted[3] === sorted[4] &&
          sorted[1] !== sorted[3]
        ) || (
          sorted[0] === sorted[1] &&
          sorted[3] === sorted[4] &&
          sorted[0] !== sorted[3]
        )
      ) {
        return resultsMap[Combination.TWO_PAIR]
      }
      break
    }
    default:
      return {}
  }

  return {}
}
