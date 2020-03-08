import { createSelector } from 'reselect'
import { State } from '../defaultState'
import { DrawerOpenedState } from '../reducers/drawerOpened'

type R1 = DrawerOpenedState['drawerOpened']

export const makeDrawerOpenedSelector = () => createSelector<State, R1, R1>(
  ({ drawerOpened }) => drawerOpened,
  (drawerOpened) => drawerOpened,
)
