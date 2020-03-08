import React, { FC, useCallback } from 'react'
import styled from '@material-ui/styles/styled'
import { Themed } from '../../helpers/types'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import { makeDrawerOpenedSelector } from '../../redux/selectors/makeDrawerOpenedSelector'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDrawerOpened } from '../../redux/reducers/drawerOpened'
import { StyledProps } from '@material-ui/core/styles'

const drawerOpenedSelector = makeDrawerOpenedSelector()

export const MenuButton: FC<StyledProps> = ({ className }) => {
  const drawerOpened = useSelector(drawerOpenedSelector)
  const dispatch = useDispatch()
  const onClick = useCallback( // TODO maybe we dont need useCallback here? :/
    () => dispatch(toggleDrawerOpened(!drawerOpened)),
    [drawerOpened, dispatch],
  )

  return (
    <IconButton
      edge="start"
      color="inherit"
      className={className}
      onClick={onClick}
    >
      <MenuIcon fontSize="large" />
    </IconButton>
  )
}

export const MenuButtonStyled = styled(MenuButton)(({
  theme: { spacing, palette: { type, common: { black, white } } },
}: Themed) => ({
  marginRight: spacing(1),
  color: type === 'dark' ? white : black,
  zIndex: 1,
}))
