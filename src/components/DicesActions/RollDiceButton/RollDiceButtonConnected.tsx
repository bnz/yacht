import { connect } from 'react-redux'
import { RollDiceButton } from './RollDiceButton'
import { generateRandomDicesThunk } from '../../../redux/actions/generateRandomDicesThunk'
import { LoadingState, SetLoading, setLoading } from '../../../redux/reducers/loading'
import { State } from '../../../redux/defaultState'
import { ThunkAction } from '../../../helpers/types'
import { PlayerMoveState } from '../../../redux/reducers/playerMove'

interface MapStateToProps extends LoadingState {
  shot: PlayerMoveState['playerMove'][1]
}

interface MapDispatchToProps {
  generateRandomDices: ThunkAction
  setLoading: SetLoading
}

export interface RollDiceButtonProps extends MapStateToProps, MapDispatchToProps {
}

export const RollDiceButtonConnected = connect<MapStateToProps, MapDispatchToProps, {}, RollDiceButtonProps, State>(
  ({ loading, playerMove: { 1: shot } }) => ({
    loading,
    shot,
  }),
  { generateRandomDices: generateRandomDicesThunk, setLoading },
  (
    { loading, shot },
    { generateRandomDices, setLoading },
  ): RollDiceButtonProps => ({
    loading,
    shot,
    setLoading,
    generateRandomDices,
  }),
)(RollDiceButton)
