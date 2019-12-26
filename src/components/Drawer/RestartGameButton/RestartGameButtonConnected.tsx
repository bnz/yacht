import { connect } from 'react-redux'
import { RestartGameButton } from './RestartGameButton'
import { restartGameThunk } from '../../../redux/actions/restartGameThunk'
import { ThunkAction } from '../../../helpers/types'
import { compose } from 'redux'
import { visibilityHOC, VisibilityHOCProps } from '../../../helpers/visibilityHOC'
import { State } from '../../../redux/defaultState'
import { GamePhases, GamePhaseState } from '../../../redux/reducers/gamePhase'

interface MapStateToProps extends GamePhaseState {
}

interface MapDispatchToProps {
  restartGameAction: ThunkAction
}

export interface RestartGameProps extends MapDispatchToProps {
}

export const RestartGameButtonConnected = compose(
  connect<MapStateToProps, MapDispatchToProps, {}, RestartGameProps & VisibilityHOCProps, State>(
    ({ gamePhase }) => ({
      gamePhase,
    }),
    { restartGameAction: restartGameThunk },
    ({ gamePhase }, { restartGameAction }) => ({
      restartGameAction,
      hidden: gamePhase !== GamePhases.IN_PLAY,
    }),
  ),
  visibilityHOC,
)(RestartGameButton)
