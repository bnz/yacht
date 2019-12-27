import React from 'react'
import styled from '@material-ui/styles/styled'
import { $delay, $wrapWidth } from './DiceInner'
import { Themed } from '../../../helpers/types'

interface DotProps {
  roll?: boolean
  filled?: boolean
}

export const DiceDot = styled(
  ({ filled, roll, ...rest }: DotProps) => (
    <div {...rest}>
      <div />
    </div>
  ),
)(({ filled, roll, theme: { palette: { type, grey, common: { black } } } }: Themed & DotProps) => ({

  minWidth: `${$wrapWidth / 3}em`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& div': {
    width: '80%',
    height: '80%',
    borderRadius: '50%',

    transitionProperty: 'background',
    transitionDuration: `${$delay / 1000}s`,

    boxShadow: filled && type === 'dark'
      ? 'inset 0 0 .1em rgba(0, 0, 0, .8)'
      : 'none',

    background: filled
      ? roll
        ? 'transparent'
        : type === 'dark' ? grey['300'] : black
      : 'transparent',
  },
}))
