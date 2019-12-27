import { Reducer } from 'redux'
import { ActionWithEntry } from '../../helpers/types'
import { DICES_COUNT } from './dices'
import { i18n } from '../../helpers/i18n/i18n'

export enum Combination {
  ONE = 1,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  BONUS = 'bonus',
  SMALL_STRAIGHT = 'smallStraight',
  BIG_STRAIGHT = 'bigStraight',
  TWO_PAIR = 'twoPair',
  FULL_HOUSE = 'fullHouse',
  THE_YACHT = 'theYacht',
  CHANCE = 'chance',
  EQUAL_3 = 'equal_3',
  EQUAL_4 = 'equal_4',
}

export type EMPTY_CELL = '—'

export const EMPTY_CELL: EMPTY_CELL = '—'

export const BONUS_CONDITION = 63

export const BONUS_POINTS = 35

export const isBonus = (combination: Combination) => combination === Combination.BONUS

export interface CombinationInfo {
  name: string
  title: string
  combination: Combination
  max: number
}

export interface CombinationsState {
  combinations: CombinationInfo[]
}

type CombinationsReturn = ActionWithEntry<{}, CombinationInfo[]>

export const combinationsDefaultState: CombinationInfo[] = [
  {
    name: i18n('combination.ones'),
    title: i18n('combination.ones.title'),
    combination: Combination.ONE,
    max: Combination.ONE * DICES_COUNT,
  },
  {
    name: i18n('combination.twos'),
    title: i18n('combination.twos.title'),
    combination: Combination.TWO,
    max: Combination.TWO * DICES_COUNT,
  },
  {
    name: i18n('combination.threes'),
    title: i18n('combination.threes.title'),
    combination: Combination.THREE,
    max: Combination.THREE * DICES_COUNT,
  },
  {
    name: i18n('combination.fours'),
    title: i18n('combination.fours.title'),
    combination: Combination.FOUR,
    max: Combination.FOUR * DICES_COUNT,
  },
  {
    name: i18n('combination.fives'),
    title: i18n('combination.fives.title'),
    combination: Combination.FIVE,
    max: Combination.FIVE * DICES_COUNT,
  },
  {
    name: i18n('combination.sixes'),
    title: i18n('combination.sixes.title'),
    combination: Combination.SIX,
    max: Combination.SIX * DICES_COUNT,
  },
  {
    name: i18n('combination.bonus'),
    title: i18n('combination.bonus.title'),
    combination: Combination.BONUS,
    max: BONUS_POINTS,
  },
  {
    name: i18n('combination.threeOfAKind'),
    title: i18n('combination.threeOfAKind.title'),
    combination: Combination.EQUAL_3,
    max: Combination.SIX * 3,
  },
  {
    name: i18n('combination.fourOfAKind'),
    title: i18n('combination.fourOfAKind.title'),
    combination: Combination.EQUAL_4,
    max: Combination.SIX * 4,
  },
  {
    name: i18n('combination.smallStraight'),
    title: i18n('combination.smallStraight.title'),
    combination: Combination.SMALL_STRAIGHT,
    max: 25,
  },
  {
    name: i18n('combination.bigStraight'),
    title: i18n('combination.bigStraight.title'),
    combination: Combination.BIG_STRAIGHT,
    max: 30,
  },
  {
    name: i18n('combination.twoPair'),
    title: i18n('combination.twoPair.title'),
    combination: Combination.TWO_PAIR,
    max: 25,
  },
  {
    name: i18n('combination.fullHouse'),
    title: i18n('combination.fullHouse.title'),
    combination: Combination.FULL_HOUSE,
    max: 30,
  },
  {
    name: i18n('combination.yacht'),
    title: i18n('combination.yacht.title'),
    combination: Combination.THE_YACHT,
    max: 50,
  },
  {
    name: i18n('combination.chance'),
    title: i18n('combination.chance.title'),
    combination: Combination.CHANCE,
    max: Combination.SIX * 5,
  },
]

export const MAX_POSSIBLE_POINTS = combinationsDefaultState.reduce(
  (prev, curr) => prev + curr.max,
  0,
)

export const combinations: Reducer<CombinationInfo[], CombinationsReturn> = (
  state = combinationsDefaultState,
) => state
