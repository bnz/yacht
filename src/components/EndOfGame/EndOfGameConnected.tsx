import { connect } from 'react-redux'

import { EndOfGame } from './EndOfGame'
import { State } from '../../redux/defaultState'
import { compose } from 'redux'
import { visibilityHOC, VisibilityHOCProps } from '../../helpers/visibilityHOC'
import { CombinationsState } from '../../redux/reducers/combinations'
import { PlayerPointsState } from '../../redux/reducers/playerPoints'

interface MapStateToProps extends CombinationsState, PlayerPointsState {
}

export interface EndOfGameProps {
}

export const EndOfGameConnected = compose(
  connect<MapStateToProps, {}, {}, EndOfGameProps & VisibilityHOCProps, State>(
    ({ combinations, playerPoints }) => ({
      combinations,
      playerPoints,
    }),
    null,
    ({ combinations, playerPoints }) => ({
      // OH fcuk, this is cool
      hidden: !(
        Object.keys(combinations).length === Object.keys(
          playerPoints[Object.keys(playerPoints)[Object.keys(playerPoints).length - 1]] || {},
        ).length
      ),
    }),
  ),
  visibilityHOC,
)(EndOfGame)
