import styled from '@material-ui/styles/styled'
import { Themed } from '../../../helpers/types'
import { ActiveTab } from '../../../redux/reducers/activeTab'
import { cwp } from '../../../helpers/cwp'

export interface TabsContainerInnerProps {
  activeTab?: ActiveTab
}

export const TabsContainerInner = styled(
  cwp()<TabsContainerInnerProps>('activeTab'),
)(({
  theme: { transitions: { duration: { standard } }, drawerTabsCount },
  activeTab = 0,
}: Themed<TabsContainerInnerProps>) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  overflow: 'hidden',
  width: `${100 * drawerTabsCount}%`,
  display: 'flex',
  flexDirection: 'row',
  marginLeft: `-${100 * activeTab}%`,
  transitionDuration: `${standard}ms`,
}))
