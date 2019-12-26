import { connect } from 'react-redux';

import { App } from './App';
import { State } from '../../redux/defaultState'
import { GamePhaseState } from '../../redux/reducers/gamePhase'

interface MapStateToProps extends GamePhaseState {
}

export interface AppProps extends MapStateToProps {
}

export const AppConnected = connect(
  ({ gamePhase }: State): MapStateToProps => ({
    gamePhase,
  }),
  null,
  ({ gamePhase }: MapStateToProps): AppProps => ({
    gamePhase,
  }),
)(App)
