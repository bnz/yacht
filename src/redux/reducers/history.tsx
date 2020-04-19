import { Combination } from './combinations'
import { Dices } from './dices'
import { ActionWithEntry, Selector } from '../../helpers/types'
import { Action, Reducer } from 'redux'
import update from 'immutability-helper'
import { createSelector } from 'reselect'
import { Player } from './players'
import { State } from '../defaultState'

enum Constants {
  ADD_TO_HISTORY = 'ADD_TO_HISTORY',
  RESET_HISTORY = 'RESET_HISTORY',
}

export interface Move {
  tries: Dices[]
  result: {
    [key in Combination]?: number
  }
  dicesSelected: Dices[]
}

interface History {
  [playerId: string]: Move[]
}

export interface HistoryState {
  history: History
}

type HistoryActionReturn = ActionWithEntry<Constants, History>

export const historyDefaultState: History = {}

type AddToHistory = (history: History) => HistoryActionReturn

export const addToHistory: AddToHistory = (history) => ({
  type: Constants.ADD_TO_HISTORY,
  entry: history,
})

export const resetHistory = (): Action<Constants> => ({
  type: Constants.RESET_HISTORY,
})

export const historySelector: Selector<History> = ({ history }) => history

interface Props {
  playerId: Player['id']
}

export const makeHistorySelector = () => createSelector<State, Props, History, Player['id'], Move[]>(
  historySelector,
  (_, { playerId }) => playerId,
  (history, playerId) => history[playerId] || [],
)

export const history: Reducer<History, HistoryActionReturn> = (state = historyDefaultState, { type, entry }) => {
  switch (type) {
    case Constants.ADD_TO_HISTORY:
      return update(entry, {})
    case Constants.RESET_HISTORY:
      return update(historyDefaultState, {})
    default:
      return state
  }
}
