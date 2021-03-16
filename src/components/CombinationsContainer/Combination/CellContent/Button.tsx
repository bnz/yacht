import styled from '@material-ui/styles/styled'
import MaterialButton, { ButtonProps } from '@material-ui/core/Button'
import { TableSizes } from '../../../../redux/reducers/tableSize'
import React from 'react'
import { stretch } from '../../../../helpers/css'

interface ButtonStyledProps extends Pick<ButtonProps, 'size' | 'color' | 'onClick' | 'children'> {
}

export const Button = styled(
  ({ size, color, ...props }: ButtonStyledProps) => (
    <MaterialButton
      {...props}
      fullWidth
      color={color}
      variant="contained"
      size={size === TableSizes.MEDIUM ? 'large' : size}
    />
  ),
)({
  ...stretch(),
  textTransform: 'lowercase',
  borderRadius: 0,
  padding: 0,
  fontSize: 'inherit',
})
