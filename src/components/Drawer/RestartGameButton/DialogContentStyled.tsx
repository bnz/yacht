/*tslint:disable:no-magic-numbers*/
import styled from '@material-ui/styles/styled'
import { Themed } from '../../../helpers/types'
import DialogContent from '@material-ui/core/DialogContent'

export const DialogContentStyled = styled(DialogContent)(({ theme }: Themed) => ({
  minWidth: '30em',
  padding: '2em 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))
