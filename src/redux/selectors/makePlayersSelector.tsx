import { createSelector } from 'reselect'
import { State } from '../defaultState'
import { Player } from '../reducers/players'

export const makePlayersSelector = () => createSelector<State, Player[], Player[]>(
  ({ players }) => players,
  (players) => players,
)
