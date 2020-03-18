import { Selector } from '../../helpers/types'
import { CombinationInfo } from '../reducers/combinations'

type Combinations = Selector<CombinationInfo[]>

export const combinations: Combinations = ({ combinations }) => combinations
