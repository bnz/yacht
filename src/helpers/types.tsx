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

type ReduxThunkActionReturn = ReduxThunkAction<void, State, null, Action>

export type ThunkAction = () => ReduxThunkActionReturn

export type ThunkActionP1<P1> = (p1: P1) => ReduxThunkActionReturn

export type ThunkActionP3<P1, P2, P3> = (p1: P1, p2: P2, p3: P3) => ReduxThunkActionReturn

export type Parameters<T> = T extends (...args: infer T) => any ? T : never

export type Selector<T> = (state: State) => T

export type SimpleCombiner = <T>(p: T) => T
