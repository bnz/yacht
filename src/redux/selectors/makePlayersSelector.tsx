import { createSelector } from 'reselect'
import { State } from '../defaultState'
import { Player, PlayersState } from '../reducers/players'
import { arrayReorderByCondition } from '../../helpers/arrayReorderByCondition'

interface R1 extends PlayersState {
  activePlayerId: string
}

export const makePlayersSelector = () => createSelector<State, R1, Player[]>(
  ({ players, playerMove: { 0: activePlayerId } }) => ({
    activePlayerId,
    players,
  }),
  ({ players, activePlayerId }) => arrayReorderByCondition(
    players,
    ({ id }: Player) => id === activePlayerId,
  ),
)
