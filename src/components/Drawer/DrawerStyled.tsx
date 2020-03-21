import cx from 'classnames'
import React, { FC } from 'react'
import Drawer from '@material-ui/core/Drawer'
import { Theme } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/core/styles/createStyles'
import { makeDrawerOpenedSelector } from '../../redux/selectors/makeDrawerOpenedSelector'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(({
  spacing,
  mixins: { toolbar },
  transitions: { create, easing, duration },
  drawerWidth,
}: Theme) => createStyles({
  drawerHeader: {
    ...toolbar,
  },
  drawerContent: {
    overflowY: 'auto',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  drawer: {
    width: spacing(drawerWidth),
  },
  paper: {
    overflowX: 'hidden',
  },
  paperClose: {
    borderRight: 0,
  },
  drawerOpen: {
    width: spacing(drawerWidth),
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
  const { drawer, paper, paperClose, drawerOpen, drawerClose, drawerHeader, drawerContent } = useStyles()

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
      <div className={drawerContent}>
        {children}
      </div>
    </Drawer>
  )
}
