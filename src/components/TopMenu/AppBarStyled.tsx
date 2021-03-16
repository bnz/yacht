/*tslint:disable:no-magic-numbers*/
import styled from '@material-ui/styles/styled'
import { Themed } from '../../helpers/types'
import AppBar from '@material-ui/core/AppBar'

export const AppBarStyled = styled(AppBar)(({ theme }: Themed) => ({
  zIndex: theme.zIndex.drawer + 1,
  userSelect: 'none',
}))
