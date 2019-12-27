import { getItem } from '../getItem'
import { Language, languageDefaultState } from '../../redux/reducers/language'
import { i18nKeys } from './i18nKeys'
import { rus } from './rus'
import { eng } from './eng'

type I18n = (key: i18nKeys | string) => string

const lang: Language = getItem('language') || languageDefaultState

export type LanguageMap = {
  [key in i18nKeys]: string
}

type LanguagesMap = {
  [lang in Language]: LanguageMap}

const languagesMap: LanguagesMap = {
  rus,
  eng,
}

export const i18n: I18n = (key) => {
  const res = languagesMap[lang][key as i18nKeys]

  if (res === undefined) {
    return `~${key}~`
  }

  return res
}
