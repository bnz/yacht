import React from 'react'
import styled from '@material-ui/styles/styled'
import { Themed } from '../../../helpers/types'
import { diceSizeDefaultState, DiceSizeState } from '../../../redux/reducers/diceSize'

interface DicesWrapper extends Partial<DiceSizeState> {
}

export const DicesWrapper = styled(
  ({ diceSize, ...props }: DicesWrapper) => (
    <div {...props} />
  ),
)(({ diceSize, theme: { spacing, breakpoints: { down } } }: Themed<DicesWrapper>) => {
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
