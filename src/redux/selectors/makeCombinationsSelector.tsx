import { createSelector } from 'reselect'
import { State } from '../defaultState'
import { CombinationInfo } from '../reducers/combinations'

type R1 = CombinationInfo[]

export const makeCombinationsSelector = () => createSelector<State, R1, R1>(
  ({ combinations }) => combinations,
  (combinations) => combinations,
)
