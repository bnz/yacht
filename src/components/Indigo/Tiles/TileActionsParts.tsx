/*tslint:disable:no-magic-numbers*/
import styled from '@material-ui/styles/styled'
import ButtonBase from '@material-ui/core/ButtonBase'

export const RoundButton = styled(ButtonBase)({
  width: '100%',
  borderRadius: '50%',

  '& > svg': {
    fontSize: '100%',
    width: '50%',
    height: '50%',
  },
})
