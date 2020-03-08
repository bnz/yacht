import { createSelector } from 'reselect'
import { State } from '../defaultState'
import { PlayerMoveState } from '../reducers/playerMove'

type R1 = PlayerMoveState['playerMove']

export const makePlayerMoveSelector = () => createSelector<State, R1, R1>(
  ({ playerMove }) => playerMove,
  (playerMove) => playerMove,
)

