import styled from '@material-ui/styles/styled'
import Grid from '@material-ui/core/Grid'
import { Themed } from '../../../../helpers/types'
import { conditionalCSS } from '../../../../helpers/conditionalCSS'
import { cwp } from '../../../../helpers/cwp'

interface GridItemProps {
  strikeOut?: boolean
  altColor?: boolean
  altAlign?: boolean
}

export const GridItem = styled(
  cwp(Grid)<GridItemProps>('strikeOut', 'altColor', 'altAlign'),
)(({
  theme: { spacing, palette: { action: { disabled }, error: { light } } },
  strikeOut, altColor, altAlign,
}: Themed<GridItemProps>) => conditionalCSS([
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
  {
    padding: spacing(1),
  },
]))
