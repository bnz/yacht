import { Selector } from '../../helpers/types'
import { Dices } from '../reducers/dices'

export const dices: Selector<Dices> = ({ dices }) => dices
