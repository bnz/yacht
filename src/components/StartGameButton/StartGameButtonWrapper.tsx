/*tslint:disable:no-magic-numbers*/
import styled from '@material-ui/styles/styled'
import { Themed } from '../../helpers/types'

export const StartGameButtonWrapper = styled('div')(({
  theme: { spacing, breakpoints: { down } },
}: Themed) => ({
  paddingTop: spacing(2),
  paddingBottom: spacing(4),
  [down('xs')]: {
    textAlign: 'center',
  },
}))
