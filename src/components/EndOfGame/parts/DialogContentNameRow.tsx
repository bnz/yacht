import styled from '@material-ui/styles/styled'
import { Themed } from '../../../helpers/types'

export const DialogContentNameRow = styled('div')(({
  theme: {
    spacing,
    typography: { h6 },
    palette: { background: { paper } },
  },
}: Themed) => ({
  ...h6,
  padding: spacing(2),
  backgroundColor: paper,
  marginBottom: 1,
}))
