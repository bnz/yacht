import { connect } from 'react-redux'
import Button, { ButtonProps } from '@material-ui/core/Button'
import { i18n } from '../../../helpers/i18n/i18n'
import { ChangeGamePhase, changeGamePhase, GamePhases } from '../../../redux/reducers/gamePhase'
import { compose } from 'redux'
import { visibilityHOC, VisibilityHOCProps } from '../../../helpers/visibilityHOC'
import { State } from '../../../redux/defaultState'
import { PlayersState } from '../../../redux/reducers/players'
import { ThunkAction } from '../../../helpers/types'
import { nextTurnThunk } from '../../../redux/actions/nextTurnThunk'

interface MapStateToProps extends PlayersState {
}

interface MapDispatchToProps {
  changeGamePhase: ChangeGamePhase
  nextTurnThunk: ThunkAction
}

export interface StartGameButtonProps extends Pick<ButtonProps, 'size' | 'variant' | 'color' | 'onClick' | 'children'> {
}

export const StartGameButtonConnected = compose(
  connect<MapStateToProps, MapDispatchToProps, {}, StartGameButtonProps & VisibilityHOCProps, State>(
    ({ players }) => ({
      players,
    }),
    { changeGamePhase, nextTurnThunk },
    ({ players }, { changeGamePhase, nextTurnThunk }): StartGameButtonProps & VisibilityHOCProps => ({
      variant: 'contained',
      color: 'primary',
      size: 'large',
      children: i18n('button.startGame'),
      onClick() {
        // TODO: refactor this to Thunk Action
        changeGamePhase(GamePhases.IN_PLAY)
        nextTurnThunk()
      },

      hidden: players.length === 0,
    }),
  ),
  visibilityHOC,
)(Button)
