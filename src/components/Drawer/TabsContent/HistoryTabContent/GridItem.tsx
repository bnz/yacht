import styled from '@material-ui/styles/styled'
import Grid from '@material-ui/core/Grid'
import { Themed } from '../../../../helpers/types'
import { conditionalCSS } from '../../../../helpers/conditionalCSS'
import { cwp } from '../../../../helpers/cwp'

interface GridItemProps {
  strikeOut?: boolean
  altColor?: boolean
  altAlign?: boolean
  active?: boolean
}

export const GridItem = styled(
  cwp(Grid)<GridItemProps>('strikeOut', 'altColor', 'altAlign', 'active'),
)(({
  theme: { spacing, palette: { action: { disabled }, error: { light }, success: { dark } } },
  strikeOut, altColor, altAlign, active,
}: Themed<GridItemProps>) => conditionalCSS([
  {
    padding: spacing(1),
  },
  [strikeOut, {
    textDecoration: 'line-through',
    color: light,
  }],
  [altColor, {
    color: disabled,
  }],
  [altAlign, {
    textAlign: 'right',
  }],
  [active, {
    color: dark,
  }],
]))
