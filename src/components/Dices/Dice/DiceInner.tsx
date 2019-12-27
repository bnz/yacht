import React from 'react'
import styled from '@material-ui/styles/styled'
import { Themed } from '../../../helpers/types'

export const $wrapWidth = 1.8
export const $delay = 300

interface DiceInnerProps {
  roll?: boolean
  selected?: boolean
}

export const DiceInner = styled(
  ({ roll, selected, ...rest }: DiceInnerProps) => <div {...rest} />,
)(({
  roll, selected,
  theme: { palette: { type, common: { white, black }, text: { disabled } } },
}: Themed & DiceInnerProps) => ({

  display: 'flex',
  flexWrap: 'wrap',
  background: type === 'dark' ? black : white,
  borderRadius: '.2em',

  width: `${$wrapWidth}em`,
  minWidth: `${$wrapWidth}em`,
  maxWidth: `${$wrapWidth}em`,
  height: `${$wrapWidth}em`,

  transitionDuration: `${$delay / 1000}s`,

  transform: roll ? 'rotate(359deg)' : 'none',

  // marginTop: roll || selected ? '-.1em' : 0,

  boxShadow: selected
    ? type === 'dark'
      ? `${disabled} 0 0 0 2px`
      : '0 0 .2em rgba(0, 0, 0, 1)'
    : '0 0 .1em rgba(0, 0, 0, .4)',
}))
