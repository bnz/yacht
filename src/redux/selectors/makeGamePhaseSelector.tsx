import { createSelector } from 'reselect'
import { gamePhase } from '../pureSelectors/gamePhase'
import { simpleCombiner } from '../combiners/simpleCombiner'

export const makeGamePhaseSelector = () => createSelector(gamePhase, simpleCombiner)
