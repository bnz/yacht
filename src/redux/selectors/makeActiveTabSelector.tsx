import { createSelector } from 'reselect'
import { activeTab } from '../pureSelectors/activeTab'
import { simpleCombiner } from '../combiners/simpleCombiner'

export const makeActiveTabSelector = () => createSelector(activeTab, simpleCombiner)
