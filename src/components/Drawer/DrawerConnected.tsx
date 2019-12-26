import { connect } from 'react-redux'

import { Drawer } from './Drawer'
import { State } from '../../redux/defaultState'
import { DrawerOpenedState } from '../../redux/reducers/drawerOpened'

interface MapStateToProps extends DrawerOpenedState {
}

export interface DrawerProps extends MapStateToProps {
}

export const DrawerConnected = connect(
  ({ drawerOpened }: State): MapStateToProps => ({
    drawerOpened,
  }),
  null,
  (
    { drawerOpened }: MapStateToProps,
  ): DrawerProps => ({
    drawerOpened,
  }),
)(Drawer)
