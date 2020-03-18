import { Selector } from '../../helpers/types'
import { DiceSize } from '../reducers/diceSize'

export const diceSize: Selector<DiceSize> = ({ diceSize }) => diceSize
