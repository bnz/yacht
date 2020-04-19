import { createSelector } from 'reselect'
import { playerPoints } from '../pureSelectors/playerPoints'
import { isEndOfGameCombiner } from '../combiners/isEndOfGameCombiner'
import { combinationsSelector } from '../reducers/combinations'

export const makeIsEndOfGameSelector = () => createSelector(combinationsSelector, playerPoints, isEndOfGameCombiner)
