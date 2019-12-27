import Fab from '@material-ui/core/Fab'
import { Themed } from '../../../helpers/types'
import React from 'react'
import styled from '@material-ui/styles/styled'

export const RollDiceButtonStyled = styled(
  (props) => (
    <Fab
      variant="extended"
      color="primary"
      {...props}
    />
  ),
)(({ theme: { spacing, breakpoints: { down } } }: Themed) => ({
  marginRight: spacing(2),
  marginBottom: spacing(2),
  minWidth: spacing(40),
  [down('xs')]: {
    marginRight: 0,
  },
}))
