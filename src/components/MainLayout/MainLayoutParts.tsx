import React from 'react'
import styled from '@material-ui/styles/styled'
import { Themed } from '../../helpers/types'
import { replaceKeysInObject } from '../../helpers/replaceKeysInObject'
import { DrawerOpenedConnectorProps } from './MainLayoutConnected'

const $footerHeight = 10

const $innerPadding = 5

const $innerPaddingMobile = 2

export const Wrapper = styled(
  ({ drawer, ...props }: DrawerOpenedConnectorProps) => (
    <div {...props} />
  ),
)(({
  theme: {
    spacing,
    transitions: { create, easing, duration },
    drawerWidth,
  },
  drawer,
}: Themed<DrawerOpenedConnectorProps>) => ({
  minHeight: '100%',

  // Equal to height of footer
  // But also accounting for potential margin-bottom of last child
  marginBottom: spacing($footerHeight) * -1,

  marginLeft: drawer ? spacing(drawerWidth) : 0,
  transition: create('margin-left', {
    easing: easing.sharp,
    duration: duration.enteringScreen,
  }),
}))

export const Push = styled('div')(({ theme: { spacing } }: Themed) => ({
  height: spacing($footerHeight),
}))

export const Footer = styled(
  ({ drawer, ...props }: DrawerOpenedConnectorProps) => (
    <footer {...props} />
  ),
)(({
  theme: {
    spacing, transitions: { create, easing, duration },
    breakpoints: { down },
    drawerWidth,
  },
  drawer,
}: Themed<DrawerOpenedConnectorProps>) => ({
  display: 'flex',
  alignItems: 'center',
  height: spacing($footerHeight),
  padding: spacing(0, $innerPadding),
  marginLeft: drawer ? spacing(drawerWidth) : 0,
  transition: create('margin-left', {
    easing: easing.sharp,
    duration: duration.enteringScreen,
  }),
  [down('xs')]: {
    padding: spacing(0, $innerPaddingMobile),
    justifyContent: 'center',
  },
}))

export const Inner = styled('div')(({
  theme: {
    spacing, mixins: { toolbar },
    breakpoints: { down },
  },
}: Themed) => ({
  padding: spacing(2, $innerPadding),
  ...replaceKeysInObject(
    toolbar,
    'minHeight',
    'paddingTop',
    (value: number): number => spacing(value / 6),
  ),
  maxWidth: spacing(130),
  [down('xs')]: {
    paddingLeft: spacing($innerPaddingMobile),
    paddingRight: spacing($innerPaddingMobile),
  },
}))
