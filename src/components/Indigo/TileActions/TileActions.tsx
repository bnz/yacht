/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC } from 'react'
import { observer } from 'mobx-react'
import style from './TileActions.module.css'
import { useStore } from '../Store/HexProvider'
import CheckRoundedIcon from '@material-ui/icons/CheckRounded'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import RotateLeftRoundedIcon from '@material-ui/icons/RotateLeftRounded'
import RotateRightRoundedIcon from '@material-ui/icons/RotateRightRounded'
import Fab from '@material-ui/core/Fab'
import cx from 'classnames'
import { KeyCode } from './KeyCode'

export const TileActions: FC = observer(() => {
  const store = useStore()

  return (
    <div className={style.root} onClick={store.cancelPreSitButton}>
      <KeyCode />
      <div className={style.container} style={store.tileActionsPositionCSS}>
        <Fab className={cx(style.button, style.left)} onClick={store.applySitButton}>
          <CheckRoundedIcon />
        </Fab>
        <Fab className={cx(style.button, style.right)} onClick={store.cancelPreSitButton}>
          <CloseRoundedIcon />
        </Fab>
        {!store.isRouteCrossroad && (
          <Fab className={cx(style.button, style.top)} onClick={store.rotateRightButton}>
            <RotateLeftRoundedIcon />
          </Fab>
        )}
        {!store.isRouteCrossroad && (
          <Fab className={cx(style.button, style.bottom)} onClick={store.rotateLeftButton}>
            <RotateRightRoundedIcon />
          </Fab>
        )}
      </div>
    </div>
  )
})
