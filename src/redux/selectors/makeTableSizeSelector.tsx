import { createSelector } from 'reselect'
import { tableSize } from '../pureSelectors/tableSize'
import { simpleCombiner } from '../combiners/simpleCombiner'

export const makeTableSizeSelector = () => createSelector(tableSize, simpleCombiner)
