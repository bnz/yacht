/*tslint:disable:no-magic-numbers*/
import styled from '@material-ui/styles/styled'
import WarningIcon from '@material-ui/icons/Warning'
import { Themed } from '../../../../../helpers/types'
import yellow from '@material-ui/core/colors/yellow'

export const WarningIconStyled = styled(WarningIcon)(({ theme: { spacing } }: Themed) => ({
  marginRight: spacing(1),
  color: yellow.A700,
}))
