import { createSelector } from 'reselect'
import { State } from '../defaultState'
import { CombinationInfo } from '../reducers/combinations'

export const combinationsSelector = createSelector<State, CombinationInfo[], CombinationInfo[]>(
  ({ combinations }) => combinations,
  (combinations) => combinations,
)
