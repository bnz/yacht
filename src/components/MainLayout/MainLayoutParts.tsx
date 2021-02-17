import styled from '@material-ui/styles/styled'
import { Themed } from '../../helpers/types'
import { replaceKeysInObject } from '../../helpers/replaceKeysInObject'
import { DrawerOpenedConnectorProps } from './MainLayoutConnected'
import { cwp } from '../../helpers/cwp'
import { conditionalCSS } from '../../helpers/conditionalCSS'

export const Wrapper = styled(
  cwp()<DrawerOpenedConnectorProps>('drawer'),
)(({
  theme: {
    spacing,
    transitions: { create, easing, duration },
    drawerWidth,
    mainLayout: { footerHeight },
  },
  drawer,
}: Themed<DrawerOpenedConnectorProps>) => ({
  minHeight: '100%',

  // Equal to height of footer
  // But also accounting for potential margin-bottom of last child
  marginBottom: spacing(footerHeight) * -1,

  marginLeft: drawer ? spacing(drawerWidth) : 0,
  transition: create('margin-left', {
    easing: easing.sharp,
    duration: duration.enteringScreen,
  }),
}))

export const Push = styled('div')(({
  theme: { spacing, mainLayout: { footerHeight } },
}: Themed) => ({
  height: spacing(footerHeight),
}))

export const Footer = styled(
  cwp('footer')<DrawerOpenedConnectorProps>('drawer'),
)(({
  theme: {
    spacing, transitions: { create, easing, duration },
    breakpoints: { down },
    drawerWidth,
    mainLayout: { footerHeight, innerPadding, innerPaddingMobile },
  },
  drawer,
}: Themed<DrawerOpenedConnectorProps>) => ({
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

export const Inner = styled('div')(({
  theme: {
    game,
    spacing, mixins: { toolbar },
    breakpoints: { down },
    mainLayout: { innerPadding, innerPaddingMobile },
  },
}: Themed) => conditionalCSS([
  {
    padding: spacing(2, innerPadding),
    ...replaceKeysInObject(
      toolbar,
      'minHeight',
      'paddingTop',
      (value: number): number => spacing(value / 6),
    ),
    maxWidth: spacing(130),
  },
  [game === 'yacht', {
    [down('xs')]: {
      paddingLeft: spacing(innerPaddingMobile),
      paddingRight: spacing(innerPaddingMobile),
    },
  }, {
    margin: '0 auto',
    maxWidth: spacing(150),
    // paddingLeft: 0,
    // paddingRight: 0,
  }],
]))
