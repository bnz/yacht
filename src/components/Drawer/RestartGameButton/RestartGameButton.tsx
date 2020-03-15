import React, { FC, useCallback, useState } from 'react'
import Button from '@material-ui/core/Button'
import { i18n } from '../../../helpers/i18n/i18n'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import { DialogContentStyled } from './DialogContentStyled'
import { WarningIconStyled } from './WarningIconStyled'
import { DrawerListItem } from '../DrawerListItem'
import { DrawerListDivider } from '../DrawerListDivider'
import { ReplayIconStyled } from './ReplayIconStyled'
import { useDispatch } from 'react-redux'
import { restartGameThunk } from '../../../redux/actions/restartGameThunk'

export const RestartGameButton: FC = () => {
  const [open, setOpen] = useState(false)
  const openModal = useCallback(() => setOpen(true), [])
  const closeModal = useCallback(() => setOpen(false), [])

  const dispatch = useDispatch()
  const restartGame = useCallback(
    () => {
      closeModal()
      dispatch(restartGameThunk())
    },
    [closeModal, dispatch],
  )

  return (
    <>
      <DrawerListDivider />
      <DrawerListItem icon={<ReplayIconStyled />} onClick={openModal}>
        {i18n('button.restartGame')}
      </DrawerListItem>
      {open && (
        <Dialog open onClose={closeModal}>
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
            <Button variant="contained" color="secondary" onClick={restartGame}>
              {i18n('button.restartGame')}
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  )
}
