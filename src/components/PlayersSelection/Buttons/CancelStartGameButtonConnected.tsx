import { connect } from 'react-redux'
import Button, { ButtonProps } from '@material-ui/core/Button'
import { i18n } from '../../../helpers/i18n/i18n'
import { changeGamePhase, GamePhases } from '../../../redux/reducers/gamePhase'
import CloseIcon from '@material-ui/icons/Close'
import React from 'react'

export interface CancelStartGameButtonProps
  extends Pick<ButtonProps, 'size' | 'variant' | 'color' | 'children' | 'onClick' | 'startIcon'> {
}

export const CancelStartGameButtonConnected = connect(
  null,
  { changeGamePhase },
  (_, { changeGamePhase }): CancelStartGameButtonProps => ({
    variant: 'contained',
    color: 'secondary',
    children: i18n('button.cancel'),
    size: 'small',
    onClick() {
      changeGamePhase(GamePhases.PRE_GAME)
    },
    startIcon: <CloseIcon />
  }),
)(Button)
