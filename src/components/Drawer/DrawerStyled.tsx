import React, { FC } from 'react'
import Drawer from '@material-ui/core/Drawer'
import { Theme } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/core/styles/createStyles'
import { makeDrawerOpenedSelector } from '../../redux/selectors/makeDrawerOpenedSelector'
import { useSelector } from 'react-redux'
import { ChangeGameSelectStyled } from '../TopMenu/ChangeGameSelect'
import { toggleDrawerOpened } from '../../redux/reducers/drawerOpened'
import { useDispatchedCallback } from '../../helpers/useDispatchedCallback'
import { Footer } from '../MainLayout/MainLayoutConnected'

const useStyles = makeStyles(({
  game,
  spacing,
  mixins: { toolbar },
  breakpoints: { down },
  transitions: { create, easing, duration },
  drawerWidth,
}: Theme) => createStyles({
  drawerHeader: {
    ...toolbar,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  drawerContent: {
    overflowY: 'auto',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  drawer: {
    width: spacing(drawerWidth),
    [down('xs')]: {
      width: '100vw',
    },
    userSelect: 'none',
  },
  paper: {
    overflowX: 'hidden',
    width: spacing(drawerWidth),
    [down('xs')]: {
      width: '100vw',
    },
  },
}))

const drawerOpenedSelector = makeDrawerOpenedSelector()

export const DrawerStyled: FC = ({ children }) => {
  const open = useSelector(drawerOpenedSelector)
  const { drawer, paper, drawerHeader, drawerContent } = useStyles()
  // const dispatch = useDispatch()
  // const onClick = useCallback(
  //   () => dispatch(toggleDrawerOpened(false)),
  //   [dispatch],
  // )

  const onClick = useDispatchedCallback(toggleDrawerOpened(false))

  return (
    <Drawer
      open={open}
      className={drawer}
      classes={{ paper }}
      variant='temporary'
      onClose={onClick}
    >
      <div className={drawerHeader}>
        <ChangeGameSelectStyled />
      </div>
      <div className={drawerContent}>
        {children}
      </div>
      <Footer>bonez &copy; 2019 - {new Date().getFullYear()}</Footer>
    </Drawer>
  )
}
