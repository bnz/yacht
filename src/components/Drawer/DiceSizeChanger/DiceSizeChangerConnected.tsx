import { connect } from 'react-redux'

import { DiceSizeChanger } from './DiceSizeChanger'
import { decreaseDiceSize, DiceSizeState, DiceSizeThunk, increaseDiceSize } from '../../../redux/reducers/diceSize'
import { State } from '../../../redux/defaultState'
import { GamePhases, GamePhaseState } from '../../../redux/reducers/gamePhase'
import { compose } from 'redux'
import { visibilityHOC, VisibilityHOCProps } from '../../../helpers/visibilityHOC'

interface MapStateToProps extends DiceSizeState, GamePhaseState {
}

interface MapDispatchToProps {
  increaseDiceSize: DiceSizeThunk
  decreaseDiceSize: DiceSizeThunk
}

export interface DiceSizeChangerConnectedProps extends Pick<MapStateToProps, 'diceSize'>, MapDispatchToProps {
}

export const DiceSizeChangerConnected = compose(
  connect(
    ({ diceSize, gamePhase }: State): MapStateToProps => ({
      diceSize,
      gamePhase,
    }),
    { increaseDiceSize, decreaseDiceSize },
    (
      { diceSize, gamePhase }: MapStateToProps,
      { increaseDiceSize, decreaseDiceSize }: MapDispatchToProps,
    ): DiceSizeChangerConnectedProps & VisibilityHOCProps => ({
      diceSize,
      increaseDiceSize,
      decreaseDiceSize,
      hidden: gamePhase !== GamePhases.IN_PLAY,
    }),
  ),
  visibilityHOC,
)(DiceSizeChanger)
