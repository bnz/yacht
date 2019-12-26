import { calcBonus } from './calcBonus'

const testState = {
  'one': {
    '2': 6,
    '4': 16,
    '6': 24,
    twoPair: 25,
    bonus: -17,
    chance: 18,
    theYacht: 0,
    equal_4: 16,
    fullHouse: 0
  },
  'two': {
    '1': 3,
    '2': 8,
    '3': 9,
    '4': 16,
    '5': 15,
    '6': 18,
    bonus: 35,
    twoPair: 25,
    chance: 18
  }
}

describe('calcBonus', () => {

  it('should calc points left till bonus', () => {
    expect(calcBonus(testState, 'one')).toEqual(-17)
  })

  it('should return bonus points', () => {
    expect(calcBonus(testState, 'two')).toEqual(35)
  })

})
