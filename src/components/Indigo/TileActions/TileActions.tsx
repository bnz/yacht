/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback } from 'react'
import { observer } from 'mobx-react'
import style from './TileActions.module.css'
import { useStore } from '../Store/HexProvider'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import CancelIcon from '@material-ui/icons/Cancel'
import RotateLeftIcon from '@material-ui/icons/RotateLeft'
import RotateRightIcon from '@material-ui/icons/RotateRight'
import Fab from '@material-ui/core/Fab'
import cx from 'classnames'
import { KeyCode } from './KeyCode'

export const TileActions: FC = observer(() => {
  const store = useStore()
  const rotateLeft = useCallback(store.rotateLeftButton, [])
  const rotateRight = useCallback(store.rotateRightButton, [])
  const { x, y } = store.hoveredPoints

  // console.log('TileActions:::render')

  return (
    <div className={style.root}>
      <KeyCode />
      <div
        className={style.container}
        style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
      >
        <Fab
          className={cx(style.button, style.left)}
          onClick={useCallback(store.applySitButton, [])}
          children={<CheckCircleIcon />}
        />
        <Fab
          className={cx(style.button, style.right)}
          onClick={useCallback(store.cancelPreSitButton, [])}
        >
          <CancelIcon />
        </Fab>
        <Fab className={cx(style.button, style.top)} onClick={rotateRight} disabled={store.isRouteCrossroad}>
          <RotateLeftIcon />
        </Fab>
        <Fab className={cx(style.button, style.bottom)} onClick={rotateLeft} disabled={store.isRouteCrossroad}>
          <RotateRightIcon />
        </Fab>
      </div>
    </div>
  )
})
