import React, { FC } from 'react'
import styled from '@material-ui/styles/styled'
import Typography from '@material-ui/core/Typography'
import { mainDarkBGColor } from '../../helpers/themeProviderHOC'
import { Themed } from '../../helpers/types'
import { conditionalCSS } from '../../helpers/conditionalCSS'

const HeadingFC: FC = (props) => (
  <Typography variant="h4" component="h1" {...props} />
)

export const Heading = styled(HeadingFC)(({
  theme: { palette: { type } },
}: Themed) => conditionalCSS([
  [type === 'light', {
    color: mainDarkBGColor,
  }],
]))
