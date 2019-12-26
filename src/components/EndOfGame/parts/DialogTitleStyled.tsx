import styled from '@material-ui/styles/styled'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Themed } from '../../../helpers/types'

export const DialogTitleStyled = styled(DialogTitle)(({
  theme: { shape: { borderRadius }, palette: { text: { hint }, background: { paper } } },
}: Themed) => ({
  textAlign: 'center',
  color: hint,
  backgroundColor: paper,
  marginBottom: 1,
  borderTopRightRadius: borderRadius,
  borderTopLeftRadius: borderRadius,
}))
