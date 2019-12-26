import { connect } from 'react-redux'

import { AddPlayer } from './AddPlayer'
import { addPlayer, AddPlayer as AddPlayerType } from '../../../redux/reducers/players'
import { compose } from 'redux'
import { visibilityHOC, VisibilityHOCProps } from '../../../helpers/visibilityHOC'
import { State } from '../../../redux/defaultState'

interface MapDispatchToProps {
  addPlayer: AddPlayerType
}

export interface AddPlayerProps extends MapDispatchToProps {
}

export const AddPlayerConnected = compose(
  connect(
    ({ players }: State) => ({
      players,
    }),
    { addPlayer },
    ({ players }, { addPlayer }): AddPlayerProps & VisibilityHOCProps => ({
      addPlayer,

      hidden: players.length > 4,
    }),
  ),
  visibilityHOC,
)(AddPlayer)
