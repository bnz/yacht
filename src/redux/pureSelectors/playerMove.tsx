import { Selector } from '../../helpers/types'
import { Move } from '../reducers/playerMove'

export const playerMove: Selector<Move> = ({ playerMove }) => playerMove
