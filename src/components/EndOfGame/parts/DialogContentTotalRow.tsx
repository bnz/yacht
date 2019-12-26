import styled from '@material-ui/styles/styled'
import { Themed } from '../../../helpers/types'

export const DialogContentTotalRow = styled('div')(({
  theme: {
    spacing, typography: { h2 }, palette: { background: { paper } },
  },
}: Themed) => ({
  ...h2,
  padding: `${spacing(2)}px 0`,
  backgroundColor: paper,
}))
