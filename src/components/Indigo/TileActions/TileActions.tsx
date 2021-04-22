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
  const rotateLeft = store.rotateLeftButton
  const rotateRight = store.rotateRightButton
  const cancel = store.cancelPreSitButton
  const apply = store.applySitButton
  const { x, y } = store.hoveredPoints

  // console.log('TileActions:::render')

  return (
    <div className={style.root} onClick={cancel}>
      <KeyCode />
      <div
        className={style.container}
        style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
      >
        <Fab className={cx(style.button, style.left)} onClick={apply}>
          <CheckRoundedIcon />
        </Fab>
        <Fab className={cx(style.button, style.right)} onClick={cancel}>
          <CloseRoundedIcon />
        </Fab>
        {!store.isRouteCrossroad && (
          <Fab className={cx(style.button, style.top)} onClick={rotateRight}>
            <RotateLeftRoundedIcon />
          </Fab>
        )}
        {!store.isRouteCrossroad && (
          <Fab className={cx(style.button, style.bottom)} onClick={rotateLeft}>
            <RotateRightRoundedIcon />
          </Fab>
        )}
      </div>
    </div>
  )
})
