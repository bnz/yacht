import { createSelector } from 'reselect'
import { State } from '../defaultState'
import { GamePhases } from '../reducers/gamePhase'

export const makeGamePhaseSelector = () => createSelector<State, GamePhases, GamePhases>(
  ({ gamePhase }) => gamePhase,
  (gamePhase) => gamePhase,
)
