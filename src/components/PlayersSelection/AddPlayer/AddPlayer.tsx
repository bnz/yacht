import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import Button from '@material-ui/core/Button'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import { i18n } from '../../../helpers/i18n/i18n'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import Input from '@material-ui/core/Input'
import { AddPlayerProps } from './AddPlayerConnected'
import { DialogContentStyled } from './DialogContentStyled'

export const AddPlayer: FC<AddPlayerProps> = ({ addPlayer }) => {
  const [open, setOpen] = useState(false)
  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  const [disabled, setDisabled] = useState(true)

  const [inputValue, setInputValue] = useState('')
  const onInputChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(currentTarget.value)
    setDisabled(currentTarget.value.trim() === '')
  }
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addPlayer(inputValue.trim())
    closeModal()
    setInputValue('')
    setDisabled(true)
  }

  return (
    <>
      <Button variant="contained" startIcon={<PersonAddIcon />} size="small" onClick={openModal}>
        {i18n('button.addPlayer')}
      </Button>
      {open && (
        <Dialog open onClose={closeModal}>
          <form onSubmit={onSubmit}>
            <DialogTitle>
              {i18n('button.addPlayer')}
            </DialogTitle>
            <DialogContentStyled>
              <Input fullWidth autoFocus value={inputValue} onChange={onInputChange} />
            </DialogContentStyled>
            <DialogActions>
              <Button onClick={closeModal}>
                {i18n('button.cancel')}
              </Button>
              <Button type="submit" variant="contained" color="primary" disabled={disabled}>
                {i18n('button.add')}
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      )}
    </>
  )
}
