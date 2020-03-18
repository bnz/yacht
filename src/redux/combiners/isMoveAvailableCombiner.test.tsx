import { isMoveAvailableCombiner } from './isMoveAvailableCombiner'
import { MAX_SHOT_COUNT } from '../reducers/playerMove'

const combinations: any = [
  {
    name: 'Единицы',
    title: 'Сумма всех костей, на которых выпали 1',
    combination: 1,
    max: 5,
  },
  {
    name: 'Двойки',
    title: 'Сумма всех костей, на которых выпали 2',
    combination: 2,
    max: 10,
  },
  {
    name: 'Тройки',
    title: 'Сумма всех костей, на которых выпали 3',
    combination: 3,
    max: 15,
  },
  {
    name: 'Четверки',
    title: 'Сумма всех костей, на которых выпали 4',
    combination: 4,
    max: 20,
  },
  {
    name: 'Пятерки',
    title: 'Сумма всех костей, на которых выпали 5',
    combination: 5,
    max: 25,
  },
  {
    name: 'Шестёрки',
    title: 'Сумма всех костей, на которых выпали 6',
    combination: 6,
    max: 30,
  },
  {
    name: 'Бонус',
    title: 'Если игрок набирает по крайней мере 63 очков (по три кости с каждым числом) в верхней секции, он получает бонус в виде 35 очков',
    combination: 'bonus',
    max: 35,
  },
  {
    name: 'Сэт',
    title: 'Три Одинаковых: Три кости, на которых выпали одинаковые значения. В очки записывается сумма этих трёх костей',
    combination: 'equal_3',
    max: 18,
  },
  {
    name: 'Карэ',
    title: 'Четыре Одинаковых: Четыре кости, на которых выпали одинаковые значения. В очки записывается сумма этих четырёх костей',
    combination: 'equal_4',
    max: 24,
  },
  {
    name: 'Младший стрит',
    title: 'Любые четыре последовательных числа (1, 2, 3, 4 или 2, 3, 4, 5 или 3, 4, 5, 6). Записывается 25 очков',
    combination: 'smallStraight',
    max: 25,
  },
  {
    name: 'Старший стрит',
    title: 'Пять последовательных чисел (1, 2, 3, 4, 5 или 2, 3, 4, 5, 6). Записывается 30 очков',
    combination: 'bigStraight',
    max: 30,
  },
  {
    name: 'Две пары',
    title: 'Две пары любых одинаковых костей. Записывается 25 очков',
    combination: 'twoPair',
    max: 25,
  },
  {
    name: 'Фул Хаус',
    title: 'Пара и тройка любых одинаковых костей. Записывается 30 очков',
    combination: 'fullHouse',
    max: 30,
  },
  {
    name: 'Яхта',
    title: 'Пять костей, на которых выпали одинаковые значения. Записывается 50 очков',
    combination: 'theYacht',
    max: 50,
  },
  {
    name: 'Шанс',
    title: 'Записывается сумма всех выпавших костей',
    combination: 'chance',
    max: 30,
  },
]

const dices = [
  1,
  2,
  2,
  2,
  2,
]

const playerPoints = {
  'playerId': {
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 16,
    '5': 15,
    '6': 0,
    smallStraight: 25,
    bonus: -32,
    chance: 21,
    twoPair: 25,
    bigStraight: 30,
    equal_3: 6,
    equal_4: 12,
    fullHouse: 30,
  },
}

describe('checkMoveAvailable', () => {

  it('should have move available', () => {
    expect(isMoveAvailableCombiner(
      combinations,
      dices,
      playerPoints,
      ['playerId', 3],
    )).toBeTruthy()
  })

  it('player have empty combinations, but should have no moves', () => {
    expect(
      isMoveAvailableCombiner(
        [
          {
            name: 'Единицы',
            title: 'Сумма всех костей, на которых выпали 1',
            combination: 1,
            max: 5,
          },
          {
            name: 'Двойки',
            title: 'Сумма всех костей, на которых выпали 2',
            combination: 2,
            max: 10,
          },
        ],
        [2, 3, 5, 2, 5],
        {
          'playerId': {
            1: 5,
          },
        },
        ['playerId', 3],
      ),
    ).toBeFalsy()
  })

  it('should detect available combination', () => {
    expect(
      isMoveAvailableCombiner(
        [
          {
            name: 'Единицы',
            title: 'Сумма всех костей, на которых выпали 1',
            combination: 1,
            max: 5,
          },
          {
            name: 'Двойки',
            title: 'Сумма всех костей, на которых выпали 2',
            combination: 2,
            max: 10,
          },
        ],
        [2, 1, 1, 2, 1],
        {
          'playerId': {
            2: 10,
          },
        },
        ['playerId', 3],
      ),
    ).toBeTruthy()
  })

  it('should have no moves available', () => {
    expect(isMoveAvailableCombiner(
      [
        {
          name: 'Единицы',
          title: 'Сумма всех костей, на которых выпали 1',
          combination: 1,
          max: 5,
        },
        {
          name: 'Бонус',
          title: 'Если игрок набирает по крайней мере 63 очков (по три кости с каждым числом) в верхней секции, он получает бонус в виде 35 очков',
          // @ts-ignore
          combination: 'bonus',
          max: 35,
        },
        {
          name: 'Шанс',
          title: 'Записывается сумма всех выпавших костей',
          // @ts-ignore
          combination: 'chance',
          max: 30,
        },
      ],
      [1, 5, 2, 3, 6],
      {
        '7e4f7e04-6611-43b0-b847-60256f527519': {
          chance: 11,
          bonus: -63,
        },
      },
      ['7e4f7e04-6611-43b0-b847-60256f527519', 3],
    )).toBeFalsy()
  })

})
