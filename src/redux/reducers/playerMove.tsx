import { Reducer } from 'redux'
import { ActionWithEntry } from '../../helpers/types'

enum Constants {
  NEXT_TURN = 'NEXT_TURN',
  INCREASE_SHOT = 'INCREASE_SHOT',
  RESET_PLAYER_MOVE = 'RESET_PLAYER_MOVE',
}

export type Move = [string, number]

export interface PlayerMoveState {
  playerMove: Move
}

export const MAX_SHOT_COUNT = 3

type PlayerMoveActionReturn = ActionWithEntry<Constants, Move>

export const playerMoveDefaultState: Move = ['', 0]

type NextTurn = (move: Move) => PlayerMoveActionReturn

export const nextTurn: NextTurn = (move) => ({
  type: Constants.NEXT_TURN,
  entry: move,
})

type IncreaseShot = () => PlayerMoveActionReturn

export const increaseShot: IncreaseShot = () => ({
  type: Constants.INCREASE_SHOT,
  entry: playerMoveDefaultState,
})

type ResetPlayerMove = () => PlayerMoveActionReturn

export const resetPlayerMove: ResetPlayerMove = () => ({
  type: Constants.RESET_PLAYER_MOVE,
  entry: playerMoveDefaultState,
})

export const playerMove: Reducer<Move, PlayerMoveActionReturn> = (state = playerMoveDefaultState, { type, entry }) => {
  switch (type) {
    case Constants.INCREASE_SHOT: {
      const { 0: playerId, 1: shot } = state
      return [playerId, shot + 1]
    }
    case Constants.NEXT_TURN:
      return entry
    case Constants.RESET_PLAYER_MOVE:
      return entry
    default:
      return state
  }
}
