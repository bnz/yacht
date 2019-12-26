import { connect } from 'react-redux'
import { ResetDicesButton } from './ResetDicesButton'
import { compose } from 'redux'
import { visibilityHOC, VisibilityHOCProps } from '../../../helpers/visibilityHOC'
import { State } from '../../../redux/defaultState'
import { DicesSelectedState, unselectAllDices, UnselectAllDices } from '../../../redux/reducers/dicesSelected'

interface MapStateToProps extends DicesSelectedState {
}

interface MapDispatchToProps {
  unselectAllDices: UnselectAllDices
}

export interface ResetDicesButtonProps extends MapDispatchToProps, VisibilityHOCProps {
}

export const ResetDicesButtonConnected = compose(
  connect(
    ({ dicesSelected }: State): MapStateToProps => ({
      dicesSelected,
    }),
    { unselectAllDices },
    ({ dicesSelected }, { unselectAllDices }): ResetDicesButtonProps => ({
      unselectAllDices,

      hidden: dicesSelected.length === 0,
    }),
  ),
  visibilityHOC,
)(ResetDicesButton)
