import { inArray } from './inArray'
import { i18n } from './i18n'

const calc = (n: number) => (...sequence: number[]): boolean => inArray(sequence, n % 10)

export const defineWorkEnding = (n: number): string | undefined => {
  const calculated = calc(n)

  if (inArray([11, 12, 13, 14], n)) {
    return i18n('очков')
  }

  if (calculated(1)) {
    return i18n('очко')
  }

  if (calculated(2, 3, 4)) {
    return i18n('очка')
  }

  if (calculated(0, 5, 6, 7, 8, 9)) {
    return i18n('очков')
  }
}