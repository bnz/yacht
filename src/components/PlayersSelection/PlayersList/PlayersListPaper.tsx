import styled from '@material-ui/styles/styled'
import { Themed } from '../../../helpers/types'
import Paper from '@material-ui/core/Paper'

export const PlayersListPaper = styled(Paper)(({ theme: { spacing } }: Themed) => ({
  marginBottom: spacing(2),
  maxWidth: spacing(75),
}))
