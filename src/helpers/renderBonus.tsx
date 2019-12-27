import { i18n } from './i18n/i18n'
import { defineWorkEnding } from './defineWorkEnding'

export type RenderBonus = (existingCombination: number) => {
  isNegative: boolean
  bonus: string | number
}

export const renderBonus: RenderBonus = (existingCombination) => {
  const isNegative = Math.sign(existingCombination) === -1

  return {
    isNegative,
    bonus: isNegative
      ? `${i18n('more')} ${existingCombination * -1} ${defineWorkEnding(existingCombination * -1)}`
      : existingCombination,
  }
}

