/*tslint:disable:no-magic-numbers*/
import styled from '@material-ui/styles/styled'
import { Themed } from '../../helpers/types'

export const StartGameButtonWrapper = styled('div')(({
  theme: { spacing, breakpoints: { down }, mainLayout: { innerPadding } },
}: Themed) => ({
  padding: spacing(2, 0, 4),
  [down('xs')]: {
    textAlign: 'center',
  },
}))
