import React from 'react'
import { connect } from 'react-redux'
import Button, { ButtonProps } from '@material-ui/core/Button'
import { playersDefaultState, PlayersState, resetPlayers } from '../../../redux/reducers/players'
import { Action, compose } from 'redux'
import { i18n } from '../../../helpers/i18n'
import RotateLeftIcon from '@material-ui/icons/RotateLeft'
import { visibilityHOC, VisibilityHOCProps } from '../../../helpers/visibilityHOC'
import { State } from '../../../redux/defaultState'
import equal from 'fast-deep-equal'

interface MapStateToProps extends PlayersState {
}

interface MapDispatchToProps {
  onClick(): Action
}

export interface ResetToDefaultPlayersButtonProps
  extends MapDispatchToProps, Pick<ButtonProps, 'startIcon'>, VisibilityHOCProps {
  children: string
}

export const ResetToDefaultPlayersButtonConnected = compose(
  connect(
    ({ players }: State): MapStateToProps => ({
      players,
    }),
    { resetPlayers },
    ({ players }, { resetPlayers }): ResetToDefaultPlayersButtonProps => ({
      onClick: resetPlayers,
      children: i18n('Сбросить'),
      startIcon: <RotateLeftIcon />,

      hidden: equal(players, playersDefaultState),
    }),
  ),
  visibilityHOC,
)(Button)
