import { createSelector } from 'reselect'
import { diceSize } from '../pureSelectors/diceSize'
import { simpleCombiner } from '../combiners/simpleCombiner'

export const makeDiceSizeSelector = () => createSelector(diceSize, simpleCombiner)
