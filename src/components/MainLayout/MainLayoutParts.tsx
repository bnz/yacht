import styled from '@material-ui/styles/styled'
import { Themed } from '../../helpers/types'
import { replaceKeysInObject } from '../../helpers/replaceKeysInObject'
import { DrawerOpenedConnectorProps } from './MainLayoutConnected'
import { cwp } from '../../helpers/cwp'
import { conditionalCSS } from '../../helpers/conditionalCSS'
import React, { FC } from 'react'
import { stretch } from '../../helpers/css'

const WrapperComponent: FC = cwp()<DrawerOpenedConnectorProps>('drawer')

WrapperComponent.displayName = 'Wrapper'

export const Wrapper = styled(WrapperComponent)(({
  theme: {
    game,
    spacing,
    transitions: { create, easing, duration },
    drawerWidth,
    mainLayout: { footerHeight },
  },
  drawer,
}: Themed<DrawerOpenedConnectorProps>) => conditionalCSS([
  {
    position: 'relative',
    minHeight: '100%',
    userSelect: 'none',

    // Equal to height of footer
    // But also accounting for potential margin-bottom of last child
    marginBottom: spacing(footerHeight) * -1,

    marginLeft: drawer ? spacing(drawerWidth) : 0,
    transition: create('margin-left', {
      easing: easing.sharp,
      duration: duration.enteringScreen,
    }),
  },
  [game === 'indigo', {
    // height: '100%',
  }],
]))

const PushComponent: FC = (props) => (
  <div {...props} />
)

PushComponent.displayName = 'Push'

export const Push = styled(PushComponent)(({
  theme: { spacing, mainLayout: { footerHeight } },
}: Themed) => ({
  height: spacing(footerHeight),
}))

const FooterComponent: FC = cwp('footer')<DrawerOpenedConnectorProps>('drawer')

FooterComponent.displayName = 'Footer'

export const Footer = styled(FooterComponent)(({
  theme: {
    spacing, transitions: { create, easing, duration },
    breakpoints: { down },
    drawerWidth,
    mainLayout: { footerHeight, innerPadding, innerPaddingMobile },
  },
  drawer,
}: Themed<DrawerOpenedConnectorProps>) => ({
  userSelect: 'none',
  display: 'flex',
  alignItems: 'center',
  height: spacing(footerHeight),
  padding: spacing(0, innerPadding),
  marginLeft: drawer ? spacing(drawerWidth) : 0,
  transition: create('margin-left', {
    easing: easing.sharp,
    duration: duration.enteringScreen,
  }),
  [down('xs')]: {
    padding: spacing(0, innerPaddingMobile),
    justifyContent: 'center',
  },
}))

const InnerComponent: FC = (props) => (
  <div {...props} />
)

InnerComponent.displayName = 'Inner'

export const Inner = styled(InnerComponent)(({
  theme: {
    game,
    spacing, mixins: { toolbar },
    breakpoints: { down },
    mainLayout: { innerPadding, innerPaddingMobile, footerHeight },
  },
}: Themed) => conditionalCSS([
  [game === 'yacht', {
    maxWidth: spacing(130),
    padding: spacing(2, innerPadding),
    ...replaceKeysInObject(
      toolbar,
      'minHeight',
      'paddingTop',
      (value: number): number => spacing(value / 6),
    ),
    [down('xs')]: {
      paddingLeft: spacing(innerPaddingMobile),
      paddingRight: spacing(innerPaddingMobile),
    },
  }, {
    'body.rules &': {
      maxWidth: spacing(130),
      padding: spacing(2, innerPadding),
      ...replaceKeysInObject(
        toolbar,
        'minHeight',
        'paddingTop',
        (value: number): number => spacing(value / 6),
      ),
      [down('xs')]: {
        paddingLeft: spacing(innerPaddingMobile),
        paddingRight: spacing(innerPaddingMobile),
      },
    },

    'body:not(.rules) &': {
      margin: '0 auto',
      paddingTop: 0,
      ...stretch(0, 0, spacing(footerHeight)),
      ...replaceKeysInObject(
        toolbar,
        'minHeight',
        'top',
        (value: number): number => spacing(value / 6),
      ),
    }
  }],
]))
