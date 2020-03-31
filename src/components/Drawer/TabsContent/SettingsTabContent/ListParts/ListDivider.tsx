import styled from '@material-ui/styles/styled'
import { Themed } from '../../../../../helpers/types'
import Divider from '@material-ui/core/Divider'
import { conditionalCSS } from '../../../../../helpers/conditionalCSS'
import { cwp } from '../../../../../helpers/cwp'

interface DrawerListDividerProps {
  top?: boolean
  bottom?: boolean
}

export const ListDivider = styled(
  cwp(Divider)<DrawerListDividerProps>('top', 'bottom'),
)(({
  theme: { spacing }, top = true, bottom = true,
}: Themed<DrawerListDividerProps>) => conditionalCSS([
  [top, {
    marginTop: spacing(1),
  }],
  [bottom, {
    marginBottom: spacing(1),
  }],
]))
