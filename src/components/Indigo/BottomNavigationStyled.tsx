/*tslint:disable:no-magic-numbers*/
import styled from '@material-ui/styles/styled'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import { Themed } from '../../helpers/types'

export const BottomNavigationStyled = styled(BottomNavigation)(({
  theme: {
    shape: { borderRadius },
    spacing,
    mainLayout: { footerHeight },
    breakpoints: { down, up },
  },
}: Themed) => ({
  position: 'absolute',
  [down('xs')]: {
    bottom: `-${spacing(footerHeight)}px`,
    left: 0,
    right: 0,
    outline: '1px solid #f00',
  },
  [up('sm')]: {
    height: spacing(footerHeight) - spacing(4),
    bottom: `-${spacing(footerHeight) - spacing(2)}px`,
    left: '50%',
    transform: 'translate(-50%, 0)',
    borderRadius,
    width: spacing(75),
    outline: '1px solid #00f',
  },
}))
