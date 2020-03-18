import { createSelector } from 'reselect'
import { combinations } from '../pureSelectors/combinations'
import { simpleCombiner } from '../combiners/simpleCombiner'

export const makeCombinationsSelector = () => createSelector(combinations, simpleCombiner)
