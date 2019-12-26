import styled from '@material-ui/styles/styled'
import { align, stretch } from '../../../../helpers/css'
import { EMPTY_CELL } from '../../../../redux/reducers/combinations'
import { Themed } from '../../../../helpers/types'

export const Empty = styled('div')(({
  theme: { palette: { type, grey, background: { paper } } },
}: Themed) => ({
  '&, &::before': {
    ...stretch(),
  },
  '&::before': {
    content: `'${EMPTY_CELL}'`,
    ...align(),
    color: type === 'dark' ? paper : grey[300],
  },
}))
