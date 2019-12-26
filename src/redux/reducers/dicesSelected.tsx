import { Dices } from './dices'
import { ActionWithEntry } from '../../helpers/types'
import { Action, Reducer } from 'redux'
import update from 'immutability-helper'

export interface DicesSelectedState {
  dicesSelected: Dices
}

enum Constants {
  SELECT_DICE = 'SELECT_DICE',
  UNSELECT_ALL_DICES = 'UNSELECT_ALL_DICES',
}

type DicesSelectedActionReturn = ActionWithEntry<Constants, Dices>

export const dicesSelectedDefaultState: Dices = []

export type SelectDice = (diceIndex: number) => DicesSelectedActionReturn

export const selectDice: SelectDice = (diceIndex) => ({
  type: Constants.SELECT_DICE,
  entry: [diceIndex],
})

export type UnselectAllDices = () => Action

export const unselectAllDices: UnselectAllDices = () => ({
  type: Constants.UNSELECT_ALL_DICES,
})

export const dicesSelected: Reducer<Dices, DicesSelectedActionReturn> = (state = dicesSelectedDefaultState, { type, entry }) => {
  switch (type) {
    case Constants.SELECT_DICE: {
      const diceIndex = entry[0]
      const index = state.indexOf(diceIndex)
      if (index !== -1) {
        return update(state, { $splice: [[index, 1]] })
      }
      return state.length === 4 ? state : update(state, { $push: [diceIndex] })
    }
    case Constants.UNSELECT_ALL_DICES:
      return [...dicesSelectedDefaultState]
    default:
      return state
  }
}
