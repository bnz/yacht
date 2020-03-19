import { createSelector } from 'reselect'
import { combinations } from '../pureSelectors/combinations'
import { playerPoints } from '../pureSelectors/playerPoints'
import { isEndOfGameCombiner } from '../combiners/isEndOfGameCombiner'

export const makeIsEndOfGameSelector = () => createSelector(combinations, playerPoints, isEndOfGameCombiner)
