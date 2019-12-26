import React, { FC, useState } from 'react'
import Button from '@material-ui/core/Button'
import ReplayIcon from '@material-ui/icons/Replay'
import { i18n } from '../../../helpers/i18n'
import { RestartGameProps } from './RestartGameButtonConnected'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import { DialogContentStyled } from './DialogContentStyled'
import { WarningIconStyled } from './WarningIconStyled'
import { DrawerListItem } from '../DrawerListItem'
import { DrawerListDivider } from '../DrawerListDivider'

export const RestartGameButton: FC<RestartGameProps> = ({ restartGameAction }) => {
  const [open, setOpen] = useState(false)
  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)
  const restartGame = () => {
    closeModal()
    restartGameAction()
  }

  return (
    <>
      <DrawerListDivider />
      <DrawerListItem icon={<ReplayIcon style={{ marginLeft: '.5em' }} />} onClick={openModal}>
        {i18n('Начать заново')}
      </DrawerListItem>
      {open && (
        <Dialog open onClose={closeModal}>
          <DialogTitle>
            {i18n('Начать заново')}?
          </DialogTitle>
          <DialogContentStyled>
            <WarningIconStyled />
            {i18n('Текущая игра будет утеряна.')}
          </DialogContentStyled>
          <DialogActions>
            <Button onClick={closeModal}>
              {i18n('Отмена')}
            </Button>
            <Button variant="contained" color="secondary" onClick={restartGame}>
              {i18n('Начать заново')}
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  )
}
