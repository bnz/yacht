import { connect } from 'react-redux'
import { compose } from 'redux'

import { ChangeTableSizeButton } from './ChangeTableSizeButton'
import { State } from '../../../redux/defaultState'
import { TableSizeState, toggleSize, ToggleSize } from '../../../redux/reducers/tableSize'
import { GamePhases, GamePhaseState } from '../../../redux/reducers/gamePhase'
import { visibilityHOC, VisibilityHOCProps } from '../../../helpers/visibilityHOC'

interface MapStateToProps extends TableSizeState, GamePhaseState {
}

interface MapDispatchToProps {
  toggleSize: ToggleSize
}

export interface ChangeTableSizeButtonProps extends TableSizeState {
  onChange: ToggleSize
}

export const ChangeTableSizeButtonConnected = compose(
  connect(
    ({ tableSize, gamePhase }: State): MapStateToProps => ({
      tableSize,
      gamePhase,
    }),
    { toggleSize },
    (
      { tableSize, gamePhase }: MapStateToProps,
      { toggleSize: onChange }: MapDispatchToProps,
    ): ChangeTableSizeButtonProps & VisibilityHOCProps => ({
      tableSize,
      onChange,

      hidden: gamePhase !== GamePhases.IN_PLAY,
    }),
  ),
  visibilityHOC,
)(ChangeTableSizeButton)
