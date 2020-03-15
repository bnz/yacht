import { createSelector } from 'reselect'
import { State } from '../defaultState'
import { GamePhase, gamePhase } from '../pureSelectors/gamePhase'

type R1 = ReturnType<GamePhase>

export const makeGamePhaseSelector = () => createSelector<State, R1, R1>(
  gamePhase,
  (gamePhase) => gamePhase,
)
