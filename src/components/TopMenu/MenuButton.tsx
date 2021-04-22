import React, { FC, useCallback } from 'react'
import styled from '@material-ui/styles/styled'
import { Themed } from '../../helpers/types'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { makeDrawerOpenedSelector } from '../../redux/selectors/makeDrawerOpenedSelector'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDrawerOpened } from '../../redux/reducers/drawerOpened'
import { StyledProps } from '@material-ui/core/styles'
import { observer } from 'mobx-react'
import Fab from '@material-ui/core/Fab'
import { stretch } from '../../helpers/css'

const drawerOpenedSelector = makeDrawerOpenedSelector()

export const MenuButton: FC<StyledProps> = observer(({ className }) => {
  const drawerOpened = useSelector(drawerOpenedSelector)
  const dispatch = useDispatch()
  const onClick = useCallback(
    () => dispatch(toggleDrawerOpened(!drawerOpened)),
    [drawerOpened, dispatch],
  )

  return (
    <Fab
      className={className}
      onClick={onClick}
      size='large'
      color="secondary"
    >
      {drawerOpened ? (
        <CloseIcon fontSize='large' />
      ) : (
        <MenuIcon fontSize='large' />
      )}
    </Fab>
  )
})

export const MenuButtonStyled = styled(MenuButton)(({
  theme: {
    spacing,
    zIndex: { snackbar },
    palette: { type, common: { black, white } },
    breakpoints: { down, up },
  },
}: Themed) => ({
  ...stretch(spacing(0.5), 'auto', 'auto', spacing(0.5)),
  color: type === 'dark' ? white : black,
  zIndex: snackbar,

  '&:hover': {
    background: 'none',
  },

  [up('sm')]: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },

  [down('xs')]: {
    ...stretch('auto', spacing(2), spacing(2), 'auto'),
  },
}))
