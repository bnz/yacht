import { Action, Reducer } from 'redux'
import { Combination } from './combinations'
import { ActionWithEntry, Parameters } from '../../helpers/types'
import { Player } from './players'
import { CheckMatch } from '../../helpers/checkMatch'
import update from 'immutability-helper'
import { calcBonus } from '../../helpers/calcBonus'

export type Points = {
  [key in Combination]?: number
}

export interface PlayerPoints {
  [playerId: string]: Points
}

export interface PlayerPointsState {
  playerPoints: PlayerPoints
}

enum Constants {
  SAVE_COMBINATION = 'SAVE_COMBINATION',
  RESET_PLAYER_POINTS = 'RESET_PLAYER_POINTS',
}

export const playerPointsDefaultState: PlayerPoints = {}

export type SaveCombinationParams = Parameters<SaveCombination>

export type SaveCombinationReturn = ReturnType<SaveCombination>

type SaveCombination = (
  playerId: Player['id'],
  combination: Combination,
  points: ReturnType<CheckMatch>['points'],
) => ActionWithEntry<Constants, {
  playerId: SaveCombinationParams[0],
  combination: SaveCombinationParams[1],
  points: SaveCombinationParams[2],
}>

export const saveCombination: SaveCombination = (playerId, combination, points) => ({
  type: Constants.SAVE_COMBINATION,
  entry: {
    points,
    combination,
    playerId,
  },
})

type ResetPlayerPoints = () => Action

export const resetPlayerPoints: ResetPlayerPoints = () => ({
  type: Constants.RESET_PLAYER_POINTS,
})

export const playerPoints: Reducer<PlayerPoints, SaveCombinationReturn> = (
  state = playerPointsDefaultState,
  { type, entry },
) => {
  switch (type) {
    case Constants.SAVE_COMBINATION:
      const { playerId, combination, points } = entry

      state = update(state, state[playerId] ? {
        [playerId]: {
          $merge: {
            [combination]: points,
          },
        },
      } : {
        $merge: {
          [playerId]: {
            [combination]: points,
          },
        },
      })

      return update(state, {
        [playerId]: {
          [Combination.BONUS]: {
            $set: calcBonus(state, playerId),
          },
        },
      })
    case Constants.RESET_PLAYER_POINTS:
      return update(playerPointsDefaultState, {})
    default:
      return state
  }
}
