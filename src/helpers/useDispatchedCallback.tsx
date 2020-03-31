import { ActionWithEntry, ThunkAction } from './types'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { Action as ReduxAction } from 'redux'

type Action =
  | ReturnType<ThunkAction>
  | ReduxAction
  | ActionWithEntry

export const useDispatchedCallback = (actions: Action | Action[]) => {
  const dispatch = useDispatch()

  return useCallback(
    () => Array.isArray(actions) ? actions.forEach(dispatch) : dispatch(actions),
    [actions, dispatch],
  )
}
