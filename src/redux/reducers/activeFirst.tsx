/**
 * Active player always first
 */

import { ActionWithEntry, Selector, ThunkAction } from '../../helpers/types'
import { Reducer } from 'redux'
import { createSelector } from 'reselect'
import { simpleCombiner } from '../combiners/simpleCombiner'
import { isMobile } from '../../helpers/isMobile'

enum Constants {
  TOGGLE_ACTIVE_FIRST = 'TOGGLE_ACTIVE_FIRST',
}

export type ActiveFirst = boolean

export interface ActiveFirstState {
  activeFirst: ActiveFirst
}

type ActiveFirstReturn = ActionWithEntry<Constants, ActiveFirst>

export const activeFirstDefaultState: ActiveFirst = isMobile

type ToggleActiveFirst = (flag: boolean) => ActiveFirstReturn

export const toggleActiveFirst: ToggleActiveFirst = (flag) => ({
  type: Constants.TOGGLE_ACTIVE_FIRST,
  entry: flag,
})

export const toggleActiveFirstThunk: ThunkAction = () => (dispatch, getState) => {
  const { activeFirst } = getState()
  dispatch(toggleActiveFirst(!activeFirst))
}

export const activeFirstSelector: Selector<ActiveFirst> = ({ activeFirst }) => activeFirst

export const makeActiveFirstSelector = () => createSelector(activeFirstSelector, simpleCombiner)

export const activeFirst: Reducer<ActiveFirst, ActiveFirstReturn> = (
  state = activeFirstDefaultState,
  { type, entry },
) => {
  switch (type) {
    case Constants.TOGGLE_ACTIVE_FIRST: {
      return entry
    }
    default:
      return state
  }
}
