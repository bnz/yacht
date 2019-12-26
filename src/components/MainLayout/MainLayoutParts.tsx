import React from 'react'
import styled from '@material-ui/styles/styled'
import { Themed } from '../../helpers/types'
import { replaceKeysInObject } from '../../helpers/replaceKeysInObject'
import { DrawerOpenedConnectorProps } from './MainLayoutConnected'
import { DRAWER_WIDTH } from '../Drawer/DrawerStyled'

const footerHeight = 10

export const Wrapper = styled(
  ({ drawer, ...props }: DrawerOpenedConnectorProps) => <div {...props} />,
)(({
  theme: {
    spacing,
    transitions: { create, easing, duration },
  },
  drawer,
}: Themed & DrawerOpenedConnectorProps) => ({
  minHeight: '100%',

  // Equal to height of footer
  // But also accounting for potential margin-bottom of last child
  marginBottom: spacing(footerHeight) * -1,

  marginLeft: drawer ? spacing(DRAWER_WIDTH) : 0,
  transition: create('margin-left', {
    easing: easing.sharp,
    duration: duration.enteringScreen,
  }),
}))

export const Push = styled('div')(({ theme: { spacing } }: Themed) => ({
  height: spacing(footerHeight),
}))

export const Footer = styled(
  ({ drawer, ...props }: DrawerOpenedConnectorProps) => <footer {...props} />,
)(({
  theme: { spacing, transitions: { create, easing, duration } }, drawer,
}: Themed & DrawerOpenedConnectorProps) => ({
  display: 'flex',
  alignItems: 'center',
  height: spacing(footerHeight),
  padding: `0 ${spacing(5)}px`,
  marginLeft: drawer ? spacing(DRAWER_WIDTH) : 0,
  transition: create('margin-left', {
    easing: easing.sharp,
    duration: duration.enteringScreen,
  }),
}))

export const Inner = styled('div')(({ theme: { spacing, mixins: { toolbar } } }: Themed) => ({
  padding: `${spacing(2)}px ${spacing(5)}px`,
  ...replaceKeysInObject(
    toolbar,
    'minHeight',
    'paddingTop',
    (value: number) => spacing(value / 6),
  ),
  maxWidth: spacing(130),
}))
