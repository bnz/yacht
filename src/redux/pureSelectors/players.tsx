import { Selector } from '../../helpers/types'
import { Player } from '../reducers/players'

export const players: Selector<Player[]> = ({ players }) => players
