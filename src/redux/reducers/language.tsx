import { Reducer } from 'redux'
import { ActionWithEntry } from '../../helpers/types'

export type Language = 'rus' | 'eng'

export interface LanguageState {
  language: Language
}

enum Constants {
  CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'
}

type LanguageActionReturn = ActionWithEntry<Constants, Language>

export const languageDefaultState: Language = 'rus'

type ChangeLanguage = (lang: Language) => LanguageActionReturn

export const changeLanguage: ChangeLanguage = (lang) => ({
  type: Constants.CHANGE_LANGUAGE,
  entry: lang,
})

export const language: Reducer<Language, LanguageActionReturn> = (state = languageDefaultState, { type, entry }) => {
  switch (type) {
    case Constants.CHANGE_LANGUAGE: {
      return entry
    }
    default:
      return state
  }
}
