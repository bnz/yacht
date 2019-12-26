import styled from '@material-ui/styles/styled'
import { Themed } from '../../../helpers/types'

export const DialogTipStyled = styled('div')(({
  theme: {
    shape: { borderRadius }, spacing, typography: { subtitle2 },
    palette: { background: { paper }, text: { hint } },
  },
}: Themed) => ({
  ...subtitle2,
  color: hint,
  textAlign: 'center',
  padding: spacing(1, 5),
  borderBottomLeftRadius: borderRadius,
  borderBottomRightRadius: borderRadius,
  backgroundColor: paper,
  marginBottom: spacing(2),
}))
