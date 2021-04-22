/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback, useState } from 'react'
import { useStore } from './Store/HexProvider'
import { observer } from 'mobx-react'
import { GamePhase } from './types'
import { BottomNavigationStyled } from './BottomNavigationStyled'
import Button from '@material-ui/core/Button'
import { ReplayIconStyled } from '../Drawer/TabsContent/SettingsTabContent/RestartGameButton/ReplayIconStyled'
import { i18n } from '../../helpers/i18n/i18n'
import DialogTitle from '@material-ui/core/DialogTitle'
import { DialogContentStyled } from '../Drawer/TabsContent/SettingsTabContent/RestartGameButton/DialogContentStyled'
import { WarningIconStyled } from '../Drawer/TabsContent/SettingsTabContent/RestartGameButton/WarningIconStyled'
import DialogActions from '@material-ui/core/DialogActions'
import Dialog from '@material-ui/core/Dialog'
import RotateRightIcon from '@material-ui/icons/RotateRight'
import RotateLeftIcon from '@material-ui/icons/RotateLeft'

export const Actions: FC = observer(() => {
  const hexStore = useStore()
  const phase = hexStore.gamePhase.phase
  const rotate = useCallback(hexStore.toggleOrientation, [])
  const goToPreGame = useCallback(hexStore.restart, [])
  const [open, setOpen] = useState(false)
  const openModal = useCallback(() => setOpen(true), [])
  const closeModal = useCallback(() => setOpen(false), [])

  if (phase !== GamePhase.IN_PLAY) {
    return null
  }

  return (
    <BottomNavigationStyled>
      <div>
        <Button
          variant='contained'
          color='secondary'
          startIcon={<ReplayIconStyled />}
          onClick={openModal}
        >
          {i18n('button.restartGame')}
        </Button>
      </div>
      <Dialog open={open} onClose={closeModal}>
        <DialogTitle>
          {i18n('button.restartGame')}?
        </DialogTitle>
        <DialogContentStyled>
          <WarningIconStyled />
          {i18n('currentGameWillBeLost')}
        </DialogContentStyled>
        <DialogActions>
          <Button onClick={closeModal}>
            {i18n('button.cancel')}
          </Button>
          <Button variant='contained' color='secondary' onClick={goToPreGame}>
            {i18n('button.restartGame')}
          </Button>
        </DialogActions>
      </Dialog>
      <div>
        <Button
          variant='contained'
          color='primary'
          onClick={rotate}
          startIcon={hexStore.isPointy ? <RotateRightIcon /> : <RotateLeftIcon />}
        >
          {i18n('button.Rotate')}
        </Button>
      </div>
    </BottomNavigationStyled>
  )
})
