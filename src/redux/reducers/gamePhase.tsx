import { Reducer } from 'redux'
import { ActionWithEntry } from '../../helpers/types'

export enum GamePhases {
  PRE_GAME = 'preGame',
  PLAYERS_SELECTION = 'playersSelection',
  IN_PLAY = 'inPlay',
}

export interface GamePhaseState {
  gamePhase: GamePhases
}

export const gamePhaseDefaultState: GamePhaseState = {
  gamePhase: GamePhases.PRE_GAME,
}

enum Constants {
  CHANGE_GAME_PHASE = 'CHANGE_GAME_PHASE',
}

interface Entry {
  gamePhase: GamePhases
}

type GamePhaseActionReturn = ActionWithEntry<Constants, Entry>

export type ChangeGamePhase = (gamePhase: Entry['gamePhase']) => GamePhaseActionReturn

export const changeGamePhase: ChangeGamePhase = (gamePhase) => ({
  type: Constants.CHANGE_GAME_PHASE,
  entry: {
    gamePhase,
  },
})

export const gamePhase: Reducer<GamePhases, GamePhaseActionReturn> = (state = gamePhaseDefaultState.gamePhase, { type, entry }) => {
  switch (type) {
    case Constants.CHANGE_GAME_PHASE: {
      return entry.gamePhase
    }
    default:
      return state
  }
}
