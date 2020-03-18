import { Selector } from '../../helpers/types'
import { Language } from '../reducers/language'

export const language: Selector<Language> = ({ language }) => language
