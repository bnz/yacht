import { Combination } from '../redux/reducers/combinations'
import { i18n } from './i18n/i18n'

export type Tries = 1 | 2

export const historyCombinationText = (combination: Combination, triesLeft: Tries): string =>
  combination
    ? i18n(`combination.${combination}`)
    :
    triesLeft > 0
      ? i18n('history.activeMove')
        .replace('#triesLeft#', `${triesLeft}`)
        .replace('#tries#', i18n(triesLeft === 1 ? 'history.activeMoveTries1': 'history.activeMoveTries2'))
      : i18n('button.writeDownYourPoints')
