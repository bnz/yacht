import styled from '@material-ui/styles/styled'
import { Themed } from '../../../helpers/types'

export const DialogContentColumn = styled('div')(({
  theme: { spacing },
}: Themed) => ({
  flex: 1,
  textAlign: 'center',
  minWidth: spacing(20),

  marginLeft: 1,
  '&:first-child': {
    marginLeft: 0,
  },
}))
