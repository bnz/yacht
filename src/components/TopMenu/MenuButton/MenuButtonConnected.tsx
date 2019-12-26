import { connect } from 'react-redux'

import { MenuButton } from './MenuButton'
import { State } from '../../../redux/defaultState'
import { DrawerOpenedState, ToggleDrawerOpened, toggleDrawerOpened } from '../../../redux/reducers/drawerOpened'

interface MapStateToProps extends DrawerOpenedState {
}

interface MapDispatchToProps {
  toggleDrawerOpened: ToggleDrawerOpened
}

export interface MenuButtonProps {
  onClick(): void
}

export const MenuButtonConnected = connect(
  ({ drawerOpened }: State): MapStateToProps => ({
    drawerOpened,
  }),
  { toggleDrawerOpened },
  (
    { drawerOpened }: MapStateToProps,
    { toggleDrawerOpened }: MapDispatchToProps,
    // stateProps: MapStateToProps,
    // dispatchProps: MapDispatchToProps,
    // ownProps: OwnProps,
  ): MenuButtonProps => ({
    onClick() {
      toggleDrawerOpened(!drawerOpened)
    },
  }),
)(MenuButton)
