import { Selector } from '../../helpers/types'
import { TableSizes } from '../reducers/tableSize'

export type TableSize = Selector<TableSizes>

export const tableSize: TableSize = ({ tableSize }) => tableSize
