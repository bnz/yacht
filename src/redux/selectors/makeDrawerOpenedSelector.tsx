import { createSelector } from 'reselect'
import { drawerOpened } from '../pureSelectors/drawerOpened'
import { simpleCombiner } from '../combiners/simpleCombiner'

export const makeDrawerOpenedSelector = () => createSelector(drawerOpened, simpleCombiner)
