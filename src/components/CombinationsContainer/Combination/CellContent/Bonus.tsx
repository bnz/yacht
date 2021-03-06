import styled from '@material-ui/styles/styled'
import grey from '@material-ui/core/colors/grey'
import { Themed } from '../../../../helpers/types'
import { conditionalCSS } from '../../../../helpers/conditionalCSS'
import { cwp } from '../../../../helpers/cwp'

interface BonusProps {
  alt?: boolean
}

export const Bonus = styled(
  cwp()<BonusProps>('alt'),
)(({ theme: { palette: { type } }, alt }: Themed<BonusProps>) =>
  conditionalCSS([
    [alt, {
      fontStyle: 'italic',
      color: type === 'dark' ? grey[700] : grey[400],
    }],
  ]))
