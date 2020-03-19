import { createSelector } from 'reselect'
import { playerPoints } from '../pureSelectors/playerPoints'
import { simpleCombiner } from '../combiners/simpleCombiner'

export const makePlayerPointsSelector = () => createSelector(playerPoints, simpleCombiner)
