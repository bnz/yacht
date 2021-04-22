import styled from '@material-ui/styles/styled'
import { Themed } from '../../helpers/types'
import { DrawerOpenedConnectorProps } from './MainLayoutConnected'
import { cwp } from '../../helpers/cwp'
import { FC } from 'react'

const WrapperComponent: FC = cwp()<DrawerOpenedConnectorProps>('drawer')

WrapperComponent.displayName = 'Wrapper'

export const Wrapper = styled(WrapperComponent)(({ theme: { spacing } }: Themed) => ({
  position: 'relative',
  minHeight: '100%',
  userSelect: 'none',
  padding: spacing(2),
}))

const FooterComponent: FC = cwp('footer')<DrawerOpenedConnectorProps>('drawer')

FooterComponent.displayName = 'Footer'

export const Footer = styled(FooterComponent)(({
  theme: {
    spacing,
    breakpoints: { down },
    mainLayout: { footerHeight, innerPadding, innerPaddingMobile },
  },
}: Themed<DrawerOpenedConnectorProps>) => ({
  userSelect: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: spacing(footerHeight),
  padding: spacing(0, innerPaddingMobile),
}))
