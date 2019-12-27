import styled from '@material-ui/styles/styled'
import { Themed } from '../../helpers/types'

export const DicesActionsWrapper = styled('div')(({
  theme: { spacing, breakpoints: { down } },
}: Themed) => ({
  marginBottom: spacing(3),
  [down('xs')]: {
    textAlign: 'center',
  },
}))
