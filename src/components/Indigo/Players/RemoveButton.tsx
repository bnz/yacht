import styled from '@material-ui/styles/styled'
import Fab from '@material-ui/core/Fab'
import { Themed } from '../../../helpers/types'
import React from 'react'
import ClearIcon from '@material-ui/icons/Clear'

interface RemoveButtonProps {
  onClick?(): void
}

export const RemoveButton = styled(({ onClick, ...props }: RemoveButtonProps) => (
  <Fab {...props} size="small" color="secondary" onClick={onClick}>
    <ClearIcon />
  </Fab>
))(({ theme: { spacing } }: Themed<RemoveButtonProps>) => ({
  position: 'absolute',
  right: spacing(1),
  top: spacing(1),
}))
