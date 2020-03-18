import cx from 'classnames'
import React, { FC } from 'react'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import { Theme } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/core/styles/createStyles'
import List from '@material-ui/core/List'
import { makeDrawerOpenedSelector } from '../../redux/selectors/makeDrawerOpenedSelector'
import { useSelector } from 'react-redux'

export const DRAWER_WIDTH = 32 // * theme.spacing

const useStyles = makeStyles(({
  spacing,
  mixins: { toolbar },
  transitions: { create, easing, duration },
}: Theme) => createStyles({
  drawerHeader: {
    ...toolbar,
  },
  drawer: {
    width: spacing(DRAWER_WIDTH),
  },
  paper: {
    overflowX: 'hidden',
  },
  paperClose: {
    borderRight: 0,
  },
  drawerOpen: {
    width: spacing(DRAWER_WIDTH),
    transition: create('width', {
      easing: easing.sharp,
      duration: duration.enteringScreen,
    }),
  },
  drawerClose: {
    width: 0,
    overflowX: 'hidden',
    transition: create('width', {
      easing: easing.sharp,
      duration: duration.leavingScreen,
    }),
  },
}))

const drawerOpenedSelector = makeDrawerOpenedSelector()

export const DrawerStyled: FC = ({ children }) => {
  const open = useSelector(drawerOpenedSelector)
  const { drawer, paper, paperClose, drawerOpen, drawerClose, drawerHeader } = useStyles()

  return (
    <Drawer
      open={open}
      className={cx(drawer, {
        [drawerOpen]: open,
        [drawerClose]: !open,
      })}
      classes={{
        paper: cx(paper, {
          [drawerOpen]: open,
          [drawerClose]: !open,
          [paperClose]: !open,
        }),
      }}
      variant="permanent"
    >
      <div className={drawerHeader} />
      <Divider />
      <List>
        {children}
      </List>
    </Drawer>
  )
}
