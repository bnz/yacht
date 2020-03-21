import styled from '@material-ui/styles/styled'
import { Themed } from '../../../helpers/types'

export const TabContent = styled('div')(({
  theme: { drawerTabsCount },
}: Themed) => ({
  width: `${100 / drawerTabsCount}%`,
  boxSizing: 'border-box',
  overflowY: 'auto',
}))
