import styled from '@material-ui/styles/styled'

const $width = 2

export const DiceWrapper = styled('div')({
  width: `${$width}em`,
  minWidth: `${$width}em`,
  maxWidth: `${$width}em`,
  height: `${$width}em`,
  margin: `${$width / 6}em`,
  flexWrap: 'wrap',
  flexGrow: 1,
})
