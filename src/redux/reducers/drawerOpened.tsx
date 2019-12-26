import { Reducer } from 'redux'
import { ActionWithEntry } from '../../helpers/types'

type DrawerOpened = boolean

export interface DrawerOpenedState {
  drawerOpened: DrawerOpened
}

enum Constants {
  TOGGLE_DRAWER_OPENED = 'TOGGLE_DRAWER_OPENED',
}

type DrawerOpenedActionReturn = ActionWithEntry<Constants, DrawerOpened>

export const drawerOpenedDefaultState: DrawerOpened = false

export type ToggleDrawerOpened = (flag: boolean) => DrawerOpenedActionReturn

export const toggleDrawerOpened: ToggleDrawerOpened = (flag) => ({
  type: Constants.TOGGLE_DRAWER_OPENED,
  entry: flag,
})

export const drawerOpened: Reducer<DrawerOpened, DrawerOpenedActionReturn> = (state = drawerOpenedDefaultState, { type, entry }) => {
  switch (type) {
    case Constants.TOGGLE_DRAWER_OPENED: {
      return entry
    }
    default:
      return state
  }
}
