import styled from '@material-ui/styles/styled'
import { Themed } from '../../../helpers/types'

export const ButtonsWrapper = styled('div')(({ theme: { spacing } }: Themed) => ({
  '& button': {
    marginRight: spacing(2),
    marginBottom: spacing(2),
  },
}))
