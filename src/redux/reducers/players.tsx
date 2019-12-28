import { makeId } from '../../helpers/makeId'
import { ActionWithEntry } from '../../helpers/types'
import { Action, Reducer } from 'redux'
import update from 'immutability-helper'

export interface Player {
  id: string
  name?: string
}

export interface PlayersState {
  players: Player[]
}

export type PlayersTotals = {
  [playerId: string]: number
}

export const playersDefaultState: Player[] = [
  {
    id: '1d777e55-8009-45e7-81b6-2651ad80399c',
    name: 'Numéro un',
  },
]

enum Constants {
  ADD_PLAYER = 'ADD_PLAYER',
  REMOVE_PLAYER = 'REMOVE_PLAYER',
  RESET_PLAYERS = 'RESET_PLAYERS',
}

type PlayersActionReturn = ActionWithEntry<Constants, Player>

export type AddPlayer = (name: Player['name']) => PlayersActionReturn

export const addPlayer: AddPlayer = (name) => ({
  type: Constants.ADD_PLAYER,
  entry: {
    id: makeId(),
    name,
  },
})

export type RemovePlayer = (id: Player['id']) => PlayersActionReturn

export const removePlayer: RemovePlayer = (id) => ({
  type: Constants.REMOVE_PLAYER,
  entry: {
    id,
  },
})

export const resetPlayers = (): Action => ({
  type: Constants.RESET_PLAYERS,
})

export const players: Reducer<Player[], PlayersActionReturn> = (state = playersDefaultState, { type, entry }) => {
  switch (type) {
    case Constants.ADD_PLAYER: {
      return update(state, {
        $push: [entry],
      })
    }
    case Constants.REMOVE_PLAYER:
      return update(state, {
        $splice: [[state.findIndex(({ id }) => id === entry.id), 1]],
      })
    case Constants.RESET_PLAYERS:
      return playersDefaultState
    default:
      return state
  }
}
