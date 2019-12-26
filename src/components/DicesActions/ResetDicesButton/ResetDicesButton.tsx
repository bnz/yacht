import React, { FC } from 'react'
import { i18n } from '../../../helpers/i18n'
import Fab from '@material-ui/core/Fab'
import RotateLeftIcon from '@material-ui/icons/RotateLeft'
import { ResetDicesButtonProps } from './ResetDicesButtonConnected'

export const ResetDicesButton: FC<ResetDicesButtonProps> = ({ unselectAllDices }) => (
  <Fab color="secondary" variant="extended" onClick={unselectAllDices} style={{ marginBottom: '16px' }}>
    <RotateLeftIcon fontSize="large" />
    {i18n('Сброс')}
  </Fab>
)
