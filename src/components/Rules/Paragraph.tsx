import React from 'react'
import styled from '@material-ui/styles/styled'
import { Themed } from '../../helpers/types'
import Typography from '@material-ui/core/Typography'

export const Paragraph = styled(
  (props) => (
    <Typography paragraph {...props} />
  ),
)(({ theme: { spacing } }: Themed) => ({
  margin: `${spacing(1)} 0`,
}))
