/*tslint:disable:no-magic-numbers*/
import styled from '@material-ui/styles/styled'
import ButtonBase from '@material-ui/core/ButtonBase'
import { Themed } from '../../../helpers/types'

export const RoundButton = styled(ButtonBase)(({
  theme: {
    shape: { borderRadius },
    palette: { background: { paper: backgroundColor } },
    breakpoints: { down },
  },
}: Themed) => ({
  backgroundColor,
  borderRadius,

  visibility: 'hidden',
  opacity: 0,
  // transitionDuration: '0.2s',
  // transitionProperty: 'opacity',

  [down('xs')]: {
    visibility: 'visible',
    opacity: 1,
  },

  '& > svg': {
    width: '75%',
    height: '75%',
  },
}))
