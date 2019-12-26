import { createSelector } from 'reselect'
import { State } from '../defaultState'
import { PlayersState, PlayersTotals } from '../reducers/players'
import { PlayerPointsState } from '../reducers/playerPoints'
import { calcTotals } from '../../helpers/calcTotals'

type R1 = PlayersState & PlayerPointsState

export const makeGetTotalsSelector = () => createSelector<State, R1, PlayersTotals>(
  ({ players, playerPoints }) => ({
    players,
    playerPoints,
  }),
  ({ players, playerPoints }) => calcTotals(players, playerPoints),
)
