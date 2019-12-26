import { connect } from 'react-redux'

import { PlayersList } from './PlayersList'
import { State } from '../../../redux/defaultState'
import {
  PlayersState,
  RemovePlayer,
  removePlayer,
} from '../../../redux/reducers/players'
import { compose } from 'redux'
import { visibilityHOC, VisibilityHOCProps } from '../../../helpers/visibilityHOC'

interface MapStateToProps extends PlayersState {
}

interface MapDispatchToProps {
  removePlayer: RemovePlayer
}

export interface PlayersListProps extends MapStateToProps, MapDispatchToProps {
}

export const PlayersListConnected = compose(
  connect<MapStateToProps, MapDispatchToProps, {}, PlayersListProps & VisibilityHOCProps, State>(
    ({ players }) => ({
      players,
    }),
    { removePlayer },
    (
      { players },
      { removePlayer },
    ): PlayersListProps & VisibilityHOCProps => ({
      players,
      removePlayer,

      hidden: players.length === 0,
    }),
  ),
  visibilityHOC,
)(PlayersList)
