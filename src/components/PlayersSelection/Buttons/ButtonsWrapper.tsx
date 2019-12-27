import styled from '@material-ui/styles/styled'
import { Themed } from '../../../helpers/types'

export const ButtonsWrapper = styled('div')(({
  theme: { spacing, breakpoints: { down } },
}: Themed) => ({
  '& button': {
    marginRight: spacing(2),
    marginBottom: spacing(2),
  },
  [down('xs')]: {
    display: 'flex',
    flexDirection: 'column',
    margin: spacing(4, 2),
    '& button': {
      marginBottom: spacing(4),
      marginRight: 0,
    },
  },
}))
