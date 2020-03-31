import styled from '@material-ui/styles/styled'
import { Themed } from '../../../helpers/types'
import { diceSizeDefaultState, DiceSizeState } from '../../../redux/reducers/diceSize'
import { cwp } from '../../../helpers/cwp'

interface DicesWrapper extends Partial<DiceSizeState> {
}

export const DicesWrapper = styled(
  cwp()<DicesWrapper>('diceSize'),
)(({ theme: { spacing, breakpoints: { down } }, diceSize }: Themed<DicesWrapper>) => {
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
