import { connect } from 'react-redux'

import { changeGamePhase, GamePhases } from '../../redux/reducers/gamePhase'
import Button, { ButtonProps } from '@material-ui/core/Button'
import { i18n } from '../../helpers/i18n/i18n'

interface StartNewGameProps extends Pick<ButtonProps, 'variant' | 'size' | 'color' | 'onClick' | 'children'> {
}

export const StartGameButtonConnected = connect(
  null,
  { changeGamePhase },
  (
    _,
    { changeGamePhase },
  ): StartNewGameProps => ({
    variant: 'contained',
    size: 'large',
    color: 'primary',
    onClick() {
      changeGamePhase(GamePhases.PLAYERS_SELECTION)
    },
    children: i18n('button.startNewGame'),
  }),
)(Button)
