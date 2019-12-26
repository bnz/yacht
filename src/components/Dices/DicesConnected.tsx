import { connect } from 'react-redux'

import { Dices } from './Dices'
import { State } from '../../redux/defaultState'
import { DicesState } from '../../redux/reducers/dices'
import { DicesSelectedState, SelectDice, selectDice } from '../../redux/reducers/dicesSelected'
import { LoadingState } from '../../redux/reducers/loading'
import { DiceSizeState } from '../../redux/reducers/diceSize'

interface MapStateToProps extends DicesState, DicesSelectedState, LoadingState, DiceSizeState {
}

interface MapDispatchToProps {
  selectDice: SelectDice
}

export interface DicesProps extends MapStateToProps, MapDispatchToProps {
}

export const DicesConnected = connect(
  ({ dices, dicesSelected, loading, diceSize }: State): MapStateToProps => ({
    dices,
    dicesSelected,
    loading,
    diceSize,
  }),
  { selectDice },
  ({ dices, dicesSelected, loading, diceSize }, { selectDice }): DicesProps => ({
    dices,
    dicesSelected,
    loading,
    selectDice,
    diceSize,
  }),
)(Dices)
