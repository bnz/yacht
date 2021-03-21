/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback, useEffect } from 'react'
import { observer } from 'mobx-react'
import style from './TileActions.module.css'
import { useStore } from '../Store/HexProvider'
import DoneIcon from '@material-ui/icons/Done'
import CloseIcon from '@material-ui/icons/Close'
import RotateLeftIcon from '@material-ui/icons/RotateLeft'
import RotateRightIcon from '@material-ui/icons/RotateRight'
import Fab from '@material-ui/core/Fab'
import cx from 'classnames'

export const TileActions: FC = observer(() => {
  const store = useStore()
  const ok = useCallback(store.applySitButton, [])
  const cancel = useCallback(store.cancelPreSitButton, [])
  const rotateLeft = useCallback(store.rotateLeftButton, [])
  const rotateRight = useCallback(store.rotateRightButton, [])

  useEffect(() => {
    const fn = (e: any) => {
      switch (e.keyCode) {
        case 27: // esc
          store.cancelPreSit()
          break
        case 13: // enter
          store.applySit()
          break
        case 37: // left
          store.rotateLeft()
          break
        case 39: // right
          store.rotateRight()
          break
      }
    }
    document.addEventListener('keydown', fn, false)
    return () => {
      document.removeEventListener('keydown', fn, false)
    }
  }, [])

  const { x, y } = store.hoveredPoints

  return (
    <div className={style.root}>
      <div
        className={style.container}
        style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
      >
        <Fab className={cx(style.button, style.left)} onClick={ok}>
          <DoneIcon />
        </Fab>
        <Fab className={cx(style.button, style.right)} onClick={cancel}>
          <CloseIcon />
        </Fab>
        <Fab className={cx(style.button, style.top)} onClick={rotateLeft}>
          <RotateLeftIcon />
        </Fab>
        <Fab className={cx(style.button, style.bottom)} onClick={rotateRight}>
          <RotateRightIcon />
        </Fab>
      </div>
    </div>
  )
})
