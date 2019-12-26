import { Reducer } from 'redux'
import { ActionWithEntry, ThunkAction } from '../../helpers/types'

enum Constants {
  TOGGLE_TABLE_SIZE = 'TOGGLE_TABLE_SIZE'
}

export enum TableSizes {
  MEDIUM = 'medium',
  SMALL = 'small',
}

type TableSizeReturnType = ActionWithEntry<Constants, TableSizeState['tableSize']>

export interface TableSizeState {
  tableSize: TableSizes
}

export const tableSizeDefaultState: TableSizeState['tableSize'] = TableSizes.MEDIUM

export type ToggleSize = ThunkAction

export const toggleSize: ToggleSize = () => (dispatch, getState) => {
  const { tableSize } = getState()
  dispatch<TableSizeReturnType>({
    type: Constants.TOGGLE_TABLE_SIZE,
    entry: (tableSize === TableSizes.SMALL) ? TableSizes.MEDIUM : TableSizes.SMALL,
  })
}

export const tableSize: Reducer<TableSizeState['tableSize'], TableSizeReturnType> = (state = tableSizeDefaultState, { type, entry }) => {
  switch (type) {
    case Constants.TOGGLE_TABLE_SIZE: {
      return entry
    }
    default:
      return state
  }
}
