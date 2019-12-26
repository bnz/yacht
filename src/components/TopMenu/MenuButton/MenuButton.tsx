import React from 'react'
import styled from '@material-ui/styles/styled'
import { Themed } from '../../../helpers/types'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

export const MenuButton = styled(
  (props) => (
    <IconButton edge="start" color="inherit" {...props}>
      <MenuIcon fontSize="large" />
    </IconButton>
  ),
)(({ theme: { spacing, palette: { type, common: { black, white } } } }: Themed) => ({
  marginRight: spacing(1),
  color: type === 'dark' ? white : black,
}))
