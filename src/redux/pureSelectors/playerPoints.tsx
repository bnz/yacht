import { PlayerPoints } from '../reducers/playerPoints'
import { Selector } from '../../helpers/types'

export const playerPoints: Selector<PlayerPoints> = ({ playerPoints }) => playerPoints
