import { createSelector } from 'reselect'
import { diceSize } from '../pureSelectors/diceSize'

export const makeDiceSizeSelector = () => createSelector(
  diceSize,
  (diceSize) => diceSize,
)
