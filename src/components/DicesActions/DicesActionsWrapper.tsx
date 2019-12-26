/*tslint:disable:no-magic-numbers*/
import styled from '@material-ui/styles/styled'
import { Themed } from '../../helpers/types'

export const DicesActionsWrapper = styled('div')(({ theme: { spacing } }: Themed) => ({
  // margin: spacing(2),
  // height: '20em',
  marginBottom: spacing(3),
}))
