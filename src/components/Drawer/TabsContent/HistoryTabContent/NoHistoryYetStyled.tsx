/*tslint:disable:no-magic-numbers*/
import styled from '@material-ui/styles/styled'
import { Themed } from '../../../../helpers/types'

export const NoHistoryYetStyled = styled('div')(({
  theme: { palette: { text: { disabled } } },
}: Themed) => ({
  textAlign: 'center',
  color: disabled,
}))
