import { checkMatch, resultsMap, Return } from './checkMatch'
import { Combination } from '../redux/reducers/combinations'
import { Dices } from '../redux/reducers/dices'

// @ts-ignore
const reduce = Function.bind.call(Function.call, Array.prototype.reduce)
// @ts-ignore
const isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable)
// @ts-ignore
const concat = Function.bind.call(Function.call, Array.prototype.concat)
const keys = Reflect.ownKeys

if (!Object.values) {
  Object.values = (O: any) => (
    reduce(keys(O), (v: any, k: any) => (
      concat(v, typeof k === 'string' && isEnumerable(O, k) ? [O[k]] : [])
    ), [])
  )
}

if (!Object.entries) {
  Object.entries = (O: any) => (
    reduce(keys(O), (e: any, k: any) => (
      concat(e, typeof k === 'string' && isEnumerable(O, k) ? [[k, O[k]]] : [])
    ), [])
  )
}

type Fail = {}

const fail: Fail = {}

const cm = (combination: Combination, dices: Dices = [], result: Return<number> | Fail): void => {
  expect(checkMatch(combination, dices)).toEqual(result)
}


describe('checkMatch', () => {

  it('should not find any combinations', () => {
    const dices = [3, 1, 5, 5, 6]
    cm(1, dices, fail)
    cm(2, dices, fail)
    cm(3, dices, fail)
    cm(4, dices, fail)
    cm(5, dices, fail)
    cm(6, dices, fail)
  })

  it('should match three 1', () => {
    cm(1, [1, 3, 1, 1, 1], { maxPoints: 5, points: 4 })
  })

  it('5', () => {
    cm(5, [4, 3, 5, 5, 5], { maxPoints: 25, points: 15 })
    cm(5, [4, 5, 5, 5, 3], { maxPoints: 25, points: 15 })
    cm(5, [5, 4, 5, 1, 5], { maxPoints: 25, points: 15 })
    cm(5, [5, 3, 5, 5, 5], { maxPoints: 25, points: 20 })
    cm(5, [2, 5, 5, 5, 5], { maxPoints: 25, points: 20 })
    cm(5, [5, 5, 5, 3, 5], { maxPoints: 25, points: 20 })
    cm(5, [5, 5, 5, 5, 1], { maxPoints: 25, points: 20 })
    cm(5, [5, 5, 5, 5, 5], { maxPoints: 25, points: 25 })
  })

  it('theYacht', () => {
    cm(Combination.THE_YACHT, [-1, -1, -1, -1, -1], fail)
    cm(Combination.THE_YACHT, [6, 6, 6, 6, 6], resultsMap[Combination.THE_YACHT])
  })

  it('smallStraight', () => {
    const success = resultsMap[Combination.SMALL_STRAIGHT]
    cm(Combination.SMALL_STRAIGHT, [1, 2, 1, 4, 3], success)
    cm(Combination.SMALL_STRAIGHT, [2, 2, 5, 4, 3], success)
    cm(Combination.SMALL_STRAIGHT, [1, 5, 3, 6, 4], success)
    cm(Combination.SMALL_STRAIGHT, [5, 4, 3, 1, 4], fail)
    cm(Combination.SMALL_STRAIGHT, [1, 2, 6, 5, 3], fail)
    cm(Combination.SMALL_STRAIGHT, [1, 2, 6, 5, 2], fail)
    cm(Combination.SMALL_STRAIGHT, [1, 2, 1, 5, 2], fail)
    cm(Combination.SMALL_STRAIGHT, [4, 2, 1, 3, 6], success)
    cm(Combination.SMALL_STRAIGHT, [3, 1, 4, 2, 5], success)
  })

  it('bigStraight', () => {
    const success = resultsMap[Combination.BIG_STRAIGHT]
    cm(Combination.BIG_STRAIGHT, [6, 2, 5, 4, 3], success)
    cm(Combination.BIG_STRAIGHT, [5, 2, 1, 4, 3], success)
    cm(Combination.BIG_STRAIGHT, [1, 2, 3, 6, 4], fail)
    cm(Combination.BIG_STRAIGHT, [1, 2, 2, 6, 4], fail)
    cm(Combination.BIG_STRAIGHT, [1, 3, 5, 6, 4], fail)
  })

  it('chance', () => {
    cm(Combination.CHANCE, [6, 4, 2, 2, 3], { maxPoints: 30, points: 17 })
  })

  it('twoPair', () => {
    const success = resultsMap[Combination.TWO_PAIR]
    cm(Combination.TWO_PAIR, [6, 5, 6, 5, 6], success)
    cm(Combination.TWO_PAIR, [1, 1, 2, 3, 2], success)
    cm(Combination.TWO_PAIR, [1, 1, 2, 1, 2], success)
    cm(Combination.TWO_PAIR, [4, 3, 6, 3, 6], success)
    cm(Combination.TWO_PAIR, [4, 1, 4, 3, 3], success)
    cm(Combination.TWO_PAIR, [4, 1, 4, 3, 2], fail)
  })

  it('fullHouse', () => {
    const success = resultsMap[Combination.FULL_HOUSE]
    cm(Combination.FULL_HOUSE, [2, 2, 6, 2, 6], success)
    cm(Combination.FULL_HOUSE, [5, 4, 4, 4, 5], success)
    cm(Combination.FULL_HOUSE, [1, 3, 1, 3, 1], success)
    cm(Combination.FULL_HOUSE, [3, 3, 2, 2, 1], fail)
    cm(Combination.FULL_HOUSE, [1, 2, 3, 4, 5], fail)
    cm(Combination.FULL_HOUSE, [3, 6, 6, 6, 6], fail)
    cm(Combination.FULL_HOUSE, [4, 4, 4, 1, 4], fail)
    cm(Combination.FULL_HOUSE, [2, 2, 2, 5, 2], fail)
  })

  it('equal 3', () => {
    cm(Combination.EQUAL_3, [5, 3, 2, 5, 5], { maxPoints: 18, points: 15 })
    cm(Combination.EQUAL_3, [2, 3, 2, 2, 5], { maxPoints: 18, points: 6 })
    cm(Combination.EQUAL_3, [1, 1, 2, 1, 6], { maxPoints: 18, points: 3 })
  })

  it('equal 4', () => {
    cm(Combination.EQUAL_4, [5, 3, 2, 5, 5], fail)
    cm(Combination.EQUAL_4, [5, 5, 2, 5, 5], { maxPoints: 24, points: 20 })
    cm(Combination.EQUAL_4, [1, 2, 1, 1, 1], { maxPoints: 24, points: 4 })
    cm(Combination.EQUAL_4, [4, 3, 3, 3, 3], { maxPoints: 24, points: 12 })
  })

})
