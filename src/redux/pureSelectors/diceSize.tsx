import { Selector } from '../../helpers/types'
import { DiceSize as Result } from '../reducers/diceSize'

export type DiceSize = Selector<Result>

export const diceSize: DiceSize = ({ diceSize }) => diceSize
