import styled from '@material-ui/styles/styled'
import { Themed } from '../../../helpers/types'
import { diceSizeDefaultState, DiceSizeState } from '../../../redux/reducers/diceSize'
import { cwp } from '../../../helpers/cwp'

interface iDicesWrapper extends Partial<DiceSizeState> {
}

export const DicesWrapper = styled(
  cwp()<iDicesWrapper>('diceSize'),
)(({ theme: { spacing, breakpoints: { down } }, diceSize }: Themed<iDicesWrapper>) => {
  const size = diceSize ? diceSize : diceSizeDefaultState

  return {
    display: 'flex',
    flexWrap: 'nowrap',
    fontSize: spacing(size),
    paddingBottom: spacing(size / 3),

    [down('xs')]: {
      justifyContent: 'center',
    },
  }
})
