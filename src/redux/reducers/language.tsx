import { Reducer } from 'redux'
import { ActionWithEntry } from '../../helpers/types'

type Language = 'rus' | 'eng'

export interface LanguageState {
  language: Language
}

enum Constants {
  CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'
}

type LanguageActionReturn = ActionWithEntry<Constants, Language>

export const languageDefaultState: Language = 'rus'

export const language: Reducer<Language, LanguageActionReturn> = (state = languageDefaultState, { type }) => {
  switch (type) {
    case Constants.CHANGE_LANGUAGE: {
      return state
    }
    default:
      return state
  }
}
