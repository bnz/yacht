import React from 'react'
import styled from '@material-ui/styles/styled'
import Typography from '@material-ui/core/Typography'
import { Themed } from '../../helpers/types'
import { conditionalCSS } from '../../helpers/conditionalCSS'
import { stretch } from '../../helpers/css'

export const Heading = styled((props) => (
  <Typography variant="h4" component="h1" {...props} />
))(({
  theme: { palette: { type }, breakpoints: { down }, mainLayout: { darkBackgroundColor } },
}: Themed) => conditionalCSS([
  [type === 'light', {
    color: darkBackgroundColor,
  }],
  {
    [down('xs')]: {
      ...stretch(),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
]))
