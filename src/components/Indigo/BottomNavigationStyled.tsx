/*tslint:disable:no-magic-numbers*/
import styled from '@material-ui/styles/styled'
import { Themed } from '../../helpers/types'

export const BottomNavigationStyled = styled('div')(({ theme: { spacing } }: Themed) => ({
  '& > div': {
    margin: spacing(0, 'auto', 3, 3),
  },
}))
