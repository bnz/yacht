import CasinoIcon from '@material-ui/icons/Casino'
import styled from '@material-ui/styles/styled'
import { Themed } from '../../../helpers/types'

export const CasinoIconStyled = styled(CasinoIcon)(({ theme: { spacing } }: Themed) => ({
  marginRight: spacing(1),
}))
