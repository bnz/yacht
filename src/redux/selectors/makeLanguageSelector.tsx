import { createSelector } from 'reselect'
import { State } from '../defaultState'
import { Language } from '../reducers/language'

export const makeLanguageSelector = () => createSelector<State, Language, Language>(
  ({ language }) => language,
  (language) => language,
)
