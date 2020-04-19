import { Reducer } from 'redux'
import { ActionWithEntry, Selector } from '../../helpers/types'

export type Dices = number[]

export interface DicesState {
  dices: Dices
}

export const DICES_COUNT = 5

enum Constants {
  GENERATE_RANDOM_DICES = 'GENERATE_RANDOM_DICES',
  RESET_DICES = 'RESET_DICES',
}

type DicesActionReturn = ActionWithEntry<Constants, Dices>

export const dicesDefaultState: Dices = [-1, -1, -1, -1, -1]

type GenerateRandomDices = (dices: Dices) => DicesActionReturn

export const generateRandomDices: GenerateRandomDices = (dices) => ({
  type: Constants.GENERATE_RANDOM_DICES,
  entry: dices,
})

type ResetDices = () => DicesActionReturn

export const resetDices: ResetDices = () => ({
  type: Constants.RESET_DICES,
  entry: [],
})

export const dicesSelector: Selector<Dices> = ({ dices }) => dices

export const dices: Reducer<Dices, DicesActionReturn> = (
  state = dicesDefaultState,
  { type, entry },
) => {
  switch (type) {
    case Constants.GENERATE_RANDOM_DICES:
      return [...entry]
    case Constants.RESET_DICES:
      return [...dicesDefaultState]
    default:
      return state
  }
}
