import { ThunkAction } from '../../helpers/types'
import { nextTurn } from '../reducers/playerMove'

export const nextTurnThunk: ThunkAction = () => (dispatch, getState) => {
  const state = getState()
  let { playerMove: { 0: playerId } } = state
  const { players } = state

  if (!playerId) {
    playerId = players[0].id
  } else {
    const index = players.findIndex(({ id }) => id === playerId)
    const player = players[index + 1]
    playerId = player ? player.id : state.players[0].id
  }

  dispatch(nextTurn([playerId, 0]))
}
