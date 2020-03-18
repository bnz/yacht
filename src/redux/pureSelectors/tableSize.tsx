import { Selector } from '../../helpers/types'
import { TableSizes } from '../reducers/tableSize'

export const tableSize: Selector<TableSizes> = ({ tableSize }) => tableSize
