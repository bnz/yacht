import { createSelector } from 'reselect'
import { combinations } from '../pureSelectors/combinations'
import { simpleCombiner } from '../../helpers/simpleCombiner'

export const makeCombinationsSelector = () => createSelector(combinations, simpleCombiner)
