import { Selector } from '../../helpers/types'
import { GamePhases } from '../reducers/gamePhase'

export type GamePhase = Selector<GamePhases>

export const gamePhase: GamePhase = ({ gamePhase }) => gamePhase
