import React, { FC } from 'react'
import ButtonBase from '@material-ui/core/ButtonBase'
import style from './ActionButton.module.css'
import cx from 'classnames'
import useTheme from '@material-ui/core/styles/useTheme'

interface PlayerActionProps {
  hidden?: boolean
}

export const ActionButton: FC<PlayerActionProps> = ({ hidden, children }) => (
  <ButtonBase className={cx(style.button, { [style.hidden]: hidden }, style[useTheme().palette.type])}>
    {children}
  </ButtonBase>
)
