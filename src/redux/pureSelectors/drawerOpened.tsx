import { Selector } from '../../helpers/types'
import { DrawerOpenedState } from '../reducers/drawerOpened'

export type DrawerOpened = Selector<DrawerOpenedState['drawerOpened']>

export const drawerOpened: DrawerOpened = ({ drawerOpened }) => drawerOpened
