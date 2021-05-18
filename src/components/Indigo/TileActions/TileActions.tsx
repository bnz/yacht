/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC } from 'react'
import { observer } from 'mobx-react'
import cx from 'classnames'
import CheckRoundedIcon from '@material-ui/icons/CheckRounded'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import RotateLeftRoundedIcon from '@material-ui/icons/RotateLeftRounded'
import RotateRightRoundedIcon from '@material-ui/icons/RotateRightRounded'
import Fab from '@material-ui/core/Fab'
import style from './TileActions.module.css'
import { useStore } from '../Store/HexProvider'
import { KeyboardActions } from '../../../helpers/KeyboardActions'

export const TileActions: FC = observer(() => (
  <div className={style.root} onClick={useStore().cancelPreSitButton}>
    <KeyboardActions actions={{ Escape: useStore().cancelPreSit }} />
    <div className={style.container} style={useStore().tileActionsPositionCSS}>
      <Fab className={cx(style.button, style.left)} onClick={useStore().applySitButton}>
        <CheckRoundedIcon />
      </Fab>
      <Fab className={cx(style.button, style.right)} onClick={useStore().cancelPreSitButton}>
        <CloseRoundedIcon />
      </Fab>
      {!useStore().isRouteCrossroad && (
        <>
          <Fab className={cx(style.button, style.top)} onClick={useStore().rotateRightButton}>
            <RotateLeftRoundedIcon />
          </Fab>
          <Fab className={cx(style.button, style.bottom)} onClick={useStore().rotateLeftButton}>
            <RotateRightRoundedIcon />
          </Fab>
        </>
      )}
    </div>
  </div>
))
