import { Action } from 'redux'
import { Theme } from '@material-ui/core'
import { State } from '../redux/defaultState'
import { ThunkAction as ReduxThunkAction } from 'redux-thunk'

export interface ActionWithEntry<T = string, E = {}> extends Action<T> {
  entry: E
}

export interface Themed {
  theme: Theme
}

export type ThunkAction = () => ReduxThunkAction<void, State, null, Action>

export type ThunkAction2 = (a?: ReduxThunkAction<void, State, null, Action>) => ReduxThunkAction<void, State, null, Action>

export type Parameters<T> = T extends (...args: infer T) => any ? T : never