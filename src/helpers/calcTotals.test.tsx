import { calcTotals } from './calcTotals'
import { Player } from '../redux/reducers/players'
import { PlayerPoints } from '../redux/reducers/playerPoints'
import { BONUS_POINTS, Combination } from '../redux/reducers/combinations'

const players: Player[] = [
  {
    id: 'one',
    name: 'one',
  },
  {
    id: 'two',
    name: 'two',
  },
]

const playerPoints: PlayerPoints = {
  'one': {
    [Combination.THREE]: 9,
    [Combination.SIX]: 24,
    [Combination.THE_YACHT]: 50,
    [Combination.BONUS]: -39,
  },
  'two': {
    [Combination.ONE]: 5,
    [Combination.TWO]: 8,
    [Combination.THREE]: 9,
    [Combination.FOUR]: 12,
    [Combination.FIVE]: 15,
    [Combination.SIX]: 24,
    [Combination.BONUS]: BONUS_POINTS,
  }
}

describe('calcTotals', () => {

  it('should return correct totals', () => {
    expect(calcTotals(players, playerPoints)).toEqual({
      one: 83,
      two: 108,
    })
  })

})
