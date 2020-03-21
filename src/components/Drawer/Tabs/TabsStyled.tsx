import styled from '@material-ui/styles/styled'
import Tabs from '@material-ui/core/Tabs'
import { Themed } from '../../../helpers/types'

export const TabsStyled = styled(Tabs)(({ theme: { palette: { divider } } }: Themed) => ({
  borderBottom: `1px solid ${divider}`,
}))
