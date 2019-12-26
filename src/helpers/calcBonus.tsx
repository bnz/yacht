import { PlayerPoints } from '../redux/reducers/playerPoints'
import { BONUS_CONDITION, BONUS_POINTS } from '../redux/reducers/combinations'

export const calcBonus = (state: PlayerPoints, playerId: keyof PlayerPoints): number => {
  const bonus = Object.keys(state[playerId]).reduce((prev, curr) => (
    // @ts-ignore FIXME typings!!!
    isNaN(parseInt(curr, 10)) ? prev : prev + state[playerId][curr]
  ), 0)

  return bonus >= BONUS_CONDITION ? BONUS_POINTS : (BONUS_CONDITION - bonus) * -1
}
