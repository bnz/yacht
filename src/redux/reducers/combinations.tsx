import { Reducer } from 'redux'
import { ActionWithEntry } from '../../helpers/types'
import { DICES_COUNT } from './dices'

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
    name: 'Единицы',
    title: 'Сумма всех костей, на которых выпали 1',
    combination: Combination.ONE,
    max: Combination.ONE * DICES_COUNT,
  },
  {
    name: 'Двойки',
    title: 'Сумма всех костей, на которых выпали 2',
    combination: Combination.TWO,
    max: Combination.TWO * DICES_COUNT,
  },
  {
    name: 'Тройки',
    title: 'Сумма всех костей, на которых выпали 3',
    combination: Combination.THREE,
    max: Combination.THREE * DICES_COUNT,
  },
  {
    name: 'Четверки',
    title: 'Сумма всех костей, на которых выпали 4',
    combination: Combination.FOUR,
    max: Combination.FOUR * DICES_COUNT,
  },
  {
    name: 'Пятерки',
    title: 'Сумма всех костей, на которых выпали 5',
    combination: Combination.FIVE,
    max: Combination.FIVE * DICES_COUNT,
  },
  {
    name: 'Шестёрки',
    title: 'Сумма всех костей, на которых выпали 6',
    combination: Combination.SIX,
    max: Combination.SIX * DICES_COUNT,
  },
  {
    name: 'Бонус',
    title: 'Если игрок набирает по крайней мере 63 очков (по три кости с каждым числом) в верхней секции, он получает бонус в виде 35 очков',
    combination: Combination.BONUS,
    max: BONUS_POINTS,
  },
  {
    name: 'Сэт', // [sum]
    title: 'Три Одинаковых: Три кости, на которых выпали одинаковые значения. В очки записывается сумма этих трёх костей',
    combination: Combination.EQUAL_3,
    max: Combination.SIX * 3,
  },
  {
    name: 'Карэ', // [sum]
    title: 'Четыре Одинаковых: Четыре кости, на которых выпали одинаковые значения. В очки записывается сумма этих четырёх костей',
    combination: Combination.EQUAL_4,
    max: Combination.SIX * 4,
  },
  {
    name: 'Младший стрит', // [25]
    title: 'Любые четыре последовательных числа (1, 2, 3, 4 или 2, 3, 4, 5 или 3, 4, 5, 6). Записывается 25 очков',
    combination: Combination.SMALL_STRAIGHT,
    max: 25,
  },
  {
    name: 'Старший стрит', // [30]
    title: 'Пять последовательных чисел (1, 2, 3, 4, 5 или 2, 3, 4, 5, 6). Записывается 30 очков',
    combination: Combination.BIG_STRAIGHT,
    max: 30,
  },
  {
    name: 'Две пары', // [25]
    title: 'Две пары любых одинаковых костей. Записывается 25 очков',
    combination: Combination.TWO_PAIR,
    max: 25,
  },
  {
    name: 'Фул Хаус', // [30]
    title: 'Пара и тройка любых одинаковых костей. Записывается 30 очков',
    combination: Combination.FULL_HOUSE,
    max: 30,
  },
  {
    name: 'Яхта', // [50]
    title: 'Пять костей, на которых выпали одинаковые значения. Записывается 50 очков',
    combination: Combination.THE_YACHT,
    max: 50,
  },
  {
    name: 'Шанс', // [sum]
    title: 'Записывается сумма всех выпавших костей',
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
