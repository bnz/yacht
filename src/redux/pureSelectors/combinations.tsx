import { Selector } from '../../helpers/types'
import { CombinationInfo } from '../reducers/combinations'

export const combinations: Selector<CombinationInfo[]> = ({ combinations }) => combinations
