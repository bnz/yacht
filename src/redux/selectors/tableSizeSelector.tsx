import { createSelector } from 'reselect'
import { State } from '../defaultState'
import { TableSizes } from '../reducers/tableSize'

export const tableSizeSelector = createSelector<State, TableSizes, TableSizes>(
  ({ tableSize }) => tableSize,
  (tableSize) => tableSize,
)
