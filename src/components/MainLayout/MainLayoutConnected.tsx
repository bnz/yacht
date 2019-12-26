import { connect } from 'react-redux'

import { Wrapper as LayoutWrapper, Footer as LayoutFooter } from './MainLayoutParts'
import { State } from '../../redux/defaultState'
import { DrawerOpenedState } from '../../redux/reducers/drawerOpened'
import { ComponentType, ReactNode } from 'react'

export interface DrawerOpenedConnectorProps {
  drawer?: boolean
}

interface MapStateToProps extends DrawerOpenedState {
}

interface MapDispatchToProps {
  children: ReactNode
}

interface MainLayoutWrapperConnectedProps extends MapDispatchToProps, DrawerOpenedConnectorProps {
}

export const drawerOpenedConnector = (Component: ComponentType) => connect(
  ({ drawerOpened }: State): MapStateToProps => ({
    drawerOpened,
  }),
  {},
  (
    { drawerOpened }: MapStateToProps,
    _,
    { children }: MapDispatchToProps,
  ): MainLayoutWrapperConnectedProps => ({
    drawer: drawerOpened,
    children,
  }),
)(Component)

export const Wrapper = drawerOpenedConnector(LayoutWrapper)

export const Footer = drawerOpenedConnector(LayoutFooter)
