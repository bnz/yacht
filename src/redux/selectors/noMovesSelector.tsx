import { createSelector } from 'reselect'
import { State } from '../defaultState'
import { isMoveAvailable } from '../../helpers/isMoveAvailable'
import { CombinationsState } from '../reducers/combinations'
import { DicesState } from '../reducers/dices'
import { PlayerPointsState } from '../reducers/playerPoints'
import { MAX_SHOT_COUNT, PlayerMoveState } from '../reducers/playerMove'

export interface R1 extends CombinationsState, DicesState, PlayerPointsState, PlayerMoveState {
}

export const isMoveAvailableSelector = createSelector<State, R1, boolean>(
  ({ combinations, dices, playerPoints, playerMove }) => ({
    combinations,
    dices,
    playerPoints,
    playerMove,
  }),
  ({ combinations, dices, playerPoints, playerMove: [activePlayerId, shot] }) =>
    isMoveAvailable(
      combinations,
      dices,
      playerPoints,
      activePlayerId,
      shot === MAX_SHOT_COUNT,
    ),
)
