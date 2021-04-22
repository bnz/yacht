import styled from '@material-ui/styles/styled'
import { Themed } from '../../helpers/types'

export const DicesActionsWrapper = styled('div')(({ theme: { spacing } }: Themed) => ({
  marginBottom: spacing(3),
  textAlign: 'center',
}))
