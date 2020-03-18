import { createSelector } from 'reselect'
import { language } from '../pureSelectors/language'
import { simpleCombiner } from '../combiners/simpleCombiner'

export const makeLanguageSelector = () => createSelector(language, simpleCombiner)
