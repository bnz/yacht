import { ActionWithEntry, Selector } from '../../helpers/types'
import { Reducer } from 'redux'
import { createSelector } from 'reselect'
import { simpleCombiner } from '../combiners/simpleCombiner'

export enum ActiveTab {
  SETTINGS,
  COMBINATIONS,
  RULES,
  HISTORY,
}

export interface ActiveTabState {
  activeTab: ActiveTab
}

enum Constants {
  CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB'
}

type ActiveTabActionReturn = ActionWithEntry<Constants, ActiveTab>

export const activeTabDefaultState: ActiveTab = ActiveTab.SETTINGS

type ChangeActiveTab = (tab: ActiveTab) => ActiveTabActionReturn

export const changeActiveTab: ChangeActiveTab = (tab) => ({
  type: Constants.CHANGE_ACTIVE_TAB,
  entry: tab,
})

export const activeTabSelector: Selector<ActiveTab> = ({ activeTab }) => activeTab

export const makeActiveTabSelector = () => createSelector(activeTabSelector, simpleCombiner)

export const activeTab: Reducer<ActiveTab, ActiveTabActionReturn> = (
  state = activeTabDefaultState,
  { type, entry },
) => {
  switch (type) {
    case Constants.CHANGE_ACTIVE_TAB: {
      return entry
    }
    default:
      return state
  }
}
