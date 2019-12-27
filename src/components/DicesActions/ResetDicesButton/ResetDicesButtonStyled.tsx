import styled from '@material-ui/styles/styled'
import { Themed } from '../../../helpers/types'
import Fab from '@material-ui/core/Fab'
import React from 'react'

export const ResetDicesButtonStyled = styled((props) => (
  <Fab color="secondary" variant="extended" {...props} />
))(({ theme: { spacing, breakpoints: { down } } }: Themed) => ({
  marginBottom: spacing(2),
  [down('xs')]: {
    marginTop: spacing(2),
  },
}))
