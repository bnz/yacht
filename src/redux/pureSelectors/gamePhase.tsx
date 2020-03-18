import { Selector } from '../../helpers/types'
import { GamePhases } from '../reducers/gamePhase'

export const gamePhase: Selector<GamePhases> = ({ gamePhase }) => gamePhase
