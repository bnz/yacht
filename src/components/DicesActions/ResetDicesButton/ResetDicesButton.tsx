import React, { FC } from 'react'
import { i18n } from '../../../helpers/i18n/i18n'
import RotateLeftIcon from '@material-ui/icons/RotateLeft'
import { ResetDicesButtonProps } from './ResetDicesButtonConnected'
import { ResetDicesButtonStyled } from './ResetDicesButtonStyled'

export const ResetDicesButton: FC<ResetDicesButtonProps> = ({ unselectAllDices }) => (
  <ResetDicesButtonStyled onClick={unselectAllDices}>
    <RotateLeftIcon fontSize="large" />
    {i18n('button.reset')}
  </ResetDicesButtonStyled>
)
