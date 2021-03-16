import React, { FC } from 'react'
import ButtonBase from '@material-ui/core/ButtonBase'
import './ActionButton.css'
import cx from 'classnames'
import useTheme from '@material-ui/core/styles/useTheme'

interface PlayerActionProps {
  hidden?: boolean
}

export const ActionButton: FC<PlayerActionProps> = ({ hidden, children }) => (
  <ButtonBase className={cx('playerActionButton', { hidden }, useTheme().palette.type)}>
    {children}
  </ButtonBase>
)
