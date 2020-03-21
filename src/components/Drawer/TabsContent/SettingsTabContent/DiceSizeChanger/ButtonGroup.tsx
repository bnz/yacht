import styled from '@material-ui/styles/styled'
import MaterialButtonGroup, { ButtonGroupProps as MaterialButtonGroupProps } from '@material-ui/core/ButtonGroup'
import React from 'react'
import { Themed } from '../../../../../helpers/types'

interface ButtonGroupProps extends Pick<MaterialButtonGroupProps, 'size'> {
}

export const ButtonGroup = styled(
  ({ size = 'small', ...props }: ButtonGroupProps) => (
    <MaterialButtonGroup variant="text" size={size} {...props} />
  ),
)(({ theme: { spacing, palette: { background: { default: def } } } }: Themed) => ({
  marginRight: spacing(2),
  '& .Mui-disabled': {
    backgroundColor: def,
  },
}))
