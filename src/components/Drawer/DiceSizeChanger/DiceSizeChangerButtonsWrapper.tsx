/*tslint:disable:no-magic-numbers*/
import styled from '@material-ui/styles/styled'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import React from 'react'
import { Themed } from '../../../helpers/types'

export const DiceSizeChangerButtonsWrapper = styled(
  (props) => <ButtonGroup variant="text" size="small" {...props} />,
)(({ theme: {spacing} }: Themed) => ({
  marginRight: spacing(2),
}))
