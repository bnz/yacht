import { createSelector } from 'reselect'
import { simpleCombiner } from '../combiners/simpleCombiner'
import { playerMove } from '../pureSelectors/playerMove'

export const makePlayerMoveSelector = () => createSelector(playerMove, simpleCombiner)

