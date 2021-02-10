/*tslint:disable:no-magic-numbers*/
import styled from '@material-ui/styles/styled'
import { Themed } from '../../../helpers/types'

export const PlayersWrapper = styled('div')(({ theme: { spacing } }: Themed) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(2, 1fr)',
  gap: spacing(3, 3),
  maxWidth: spacing(100),
  margin: '0 auto',
  padding: spacing(3),
}))
