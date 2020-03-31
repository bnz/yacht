import styled from '@material-ui/styles/styled'
import { Themed } from '../../../helpers/types'
import { conditionalCSS } from '../../../helpers/conditionalCSS'
import { cwp } from '../../../helpers/cwp'

interface TabContentProps {
  padding?: boolean
}

export const TabContent = styled(
  cwp('section')<TabContentProps>('padding'),
)(({
  theme: { drawerTabsCount, spacing },
  padding = true,
}: Themed<TabContentProps>) => conditionalCSS([
  [padding, {
    padding: spacing(2),
  }],
  {
    width: `${100 / drawerTabsCount}%`,
    boxSizing: 'border-box',
    overflowY: 'auto',
  },
]))
