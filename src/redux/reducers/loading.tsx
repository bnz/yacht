import { ActionWithEntry } from '../../helpers/types'
import { Reducer } from 'redux'

type Loading = boolean

export interface LoadingState {
  loading: Loading
}

enum Constants {
  SET_LOADING = 'SET_LOADING',
}

type LoadingActionReturn = ActionWithEntry<Constants, Loading>

export const loadingDefaultState: Loading = false

export type SetLoading = (flag: Loading) => LoadingActionReturn

export const setLoading: SetLoading = (flag) => ({
  type: Constants.SET_LOADING,
  entry: flag
})

export const loading: Reducer<Loading, LoadingActionReturn> = (state = loadingDefaultState, { type, entry }) => {
  switch (type) {
    case Constants.SET_LOADING: {
      return entry
    }
    default:
      return state
  }
}
