import React, { FC } from 'react'
import Dialog from '@material-ui/core/Dialog'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles<Theme>(({
  spacing,
  palette: { background: { paper } },
}) => ({
  paper: {
    padding: spacing(2),
    backgroundColor: 'transparent',
    boxShadow: 'none',
    border: `1px solid ${paper}`,
  },
  root: {
    background: 'rgba(0, 0, 0, .7)',
  },
}))

export const DialogStyled: FC = ({ children }) => {
  const { paper, root } = useStyles()

  return (
    <Dialog open classes={{ root, paper }}>
      {children}
    </Dialog>
  )
}
