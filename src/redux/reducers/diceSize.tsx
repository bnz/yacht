import { ActionWithEntry, ThunkAction } from '../../helpers/types'
import { Reducer } from 'redux'
import { isMobile } from '../../helpers/isMobile'

export type DiceSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

const increaseDecreaseStep = 1
export const minDiceSize: DiceSize = 1
export const maxDiceSize: DiceSize = 9

export interface DiceSizeState {
  diceSize: DiceSize
}

enum Constants {
  INCREASE_DICE_SIZE = 'INCREASE_DICE_SIZE',
  DECREASE_DICE_SIZE = 'DECREASE_DICE_SIZE'
}

type DiceSizeReturn = ActionWithEntry<Constants, DiceSize>

let initial: DiceSize = isMobile ? 3 : 5

export const diceSizeDefaultState: DiceSize = initial

export type DiceSizeThunk = ThunkAction

export const increaseDiceSize: DiceSizeThunk = () => (dispatch, getState) => {
  const { diceSize } = getState()
  if (diceSize < maxDiceSize) {
    dispatch<DiceSizeReturn>({
      type: Constants.INCREASE_DICE_SIZE,
      entry: (diceSize + increaseDecreaseStep as DiceSize),
    })
  }
}

export const decreaseDiceSize: DiceSizeThunk = () => (dispatch, getState) => {
  const { diceSize } = getState()
  if (diceSize > minDiceSize) {
    dispatch<DiceSizeReturn>({
      type: Constants.DECREASE_DICE_SIZE,
      entry: (diceSize - increaseDecreaseStep as DiceSize),
    })
  }
}

export const diceSize: Reducer<DiceSize, DiceSizeReturn> = (state = diceSizeDefaultState, { type, entry }) => {
  switch (type) {
    case Constants.INCREASE_DICE_SIZE:
    case Constants.DECREASE_DICE_SIZE:
      return entry
    default:
      return state
  }
}
