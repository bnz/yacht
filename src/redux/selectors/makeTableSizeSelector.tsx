import { createSelector } from 'reselect'
import { tableSize } from '../pureSelectors/tableSize'

export const makeTableSizeSelector = () => createSelector(
  tableSize,
  (tableSize) => tableSize,
)
