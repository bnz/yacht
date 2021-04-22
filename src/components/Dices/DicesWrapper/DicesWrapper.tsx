import styled from '@material-ui/styles/styled'
import { Themed } from '../../../helpers/types'
import { diceSizeDefaultState, DiceSizeState } from '../../../redux/reducers/diceSize'
import { cwp } from '../../../helpers/cwp'

type iDicesWrapper = Partial<DiceSizeState>

export const DicesWrapper = styled(
  cwp()<iDicesWrapper>('diceSize'),
)(({ theme: { spacing }, diceSize = diceSizeDefaultState }: Themed<iDicesWrapper>) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  fontSize: spacing(diceSize),
  paddingBottom: spacing(diceSize / 3),
  justifyContent: 'center',
  overflow: 'hidden',
  margin: spacing(1, 0, 2),
}))
