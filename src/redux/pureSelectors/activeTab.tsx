import { Selector } from '../../helpers/types'
import { ActiveTab } from '../reducers/activeTab'

export const activeTab: Selector<ActiveTab> = ({ activeTab }) => activeTab
