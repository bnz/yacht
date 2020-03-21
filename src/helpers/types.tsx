import { Action } from 'redux'
import { Theme } from '@material-ui/core'
import { State } from '../redux/defaultState'
import { ThunkAction as ReduxThunkAction } from 'redux-thunk'

export interface ActionWithEntry<T = string, E = {}> extends Action<T> {
  entry: E
}

export type Themed<T = {}> = {
  theme: Theme
} & T

export type ThunkAction = () => ReduxThunkAction<void, State, null, Action>

export type ThunkAction2 = (a?: ReduxThunkAction<void, State, null, Action>) => ReduxThunkAction<void, State, null, Action>

export type Parameters<T> = T extends (...args: infer T) => any ? T : never

export type Selector<T> = (state: State) => T

export type SimpleCombiner = <T>(p: T) => T
