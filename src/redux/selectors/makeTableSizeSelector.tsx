import { createSelector } from 'reselect'
import { tableSize } from '../pureSelectors/tableSize'
import { simpleCombiner } from '../../helpers/simpleCombiner'

export const makeTableSizeSelector = () => createSelector(tableSize, simpleCombiner)
