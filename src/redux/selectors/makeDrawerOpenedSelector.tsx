import { createSelector } from 'reselect'
import { State } from '../defaultState'
import { DrawerOpened, drawerOpened } from '../pureSelectors/drawerOpened'

type R1 = ReturnType<DrawerOpened>

export const makeDrawerOpenedSelector = () => createSelector<State, R1, R1>(
  drawerOpened,
  (drawerOpened) => drawerOpened,
)
