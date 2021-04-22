import ListItem from '@material-ui/core/ListItem'
import styled from '@material-ui/styles/styled'
import { Themed } from '../../../../../helpers/types'

export const ListItemStyled = styled(ListItem)(({ theme: { spacing } }: Themed) => ({
  whiteSpace: 'nowrap',
  justifyContent: 'center',
  margin: spacing(2, 0),
}))
