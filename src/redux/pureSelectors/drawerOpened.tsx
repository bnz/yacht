import { Selector } from '../../helpers/types'
import { DrawerOpenedState } from '../reducers/drawerOpened'

export const drawerOpened: Selector<DrawerOpenedState['drawerOpened']> = ({ drawerOpened }) => drawerOpened
