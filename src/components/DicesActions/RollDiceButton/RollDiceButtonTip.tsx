/*tslint:disable:no-magic-numbers*/
import styled from '@material-ui/styles/styled'
import { Themed } from '../../../helpers/types'
import red from '@material-ui/core/colors/red'

export const RollDiceButtonTip = styled('span')(({
  theme: { spacing, palette: { grey } },
}: Themed) => ({
  marginLeft: spacing(1),
  textTransform: 'none',
  color: red.A100,

  '& span': {
    color: grey['600'],
    fontWeight: 'bold',
  },
}))
