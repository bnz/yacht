import React, { FC } from 'react'
import styled from '@material-ui/styles/styled'
import { Themed } from '../../../helpers/types'
import { conditionalCSS } from '../../../helpers/conditionalCSS'
import { green } from '@material-ui/core/colors'

interface PlayerProps {
  alt?: boolean

  onClick?(): void
}

const Player: FC<PlayerProps> = ({ alt, ...props }) => <div {...props} />

Player.displayName = 'Player'

export const PlayerWrapper = styled(Player)(({
  theme: { shadows, spacing, breakpoints: { down } },
  alt,
}: Themed<PlayerProps>) => conditionalCSS([
  {
    position: 'relative',
    borderRadius: '50%',
    boxSizing: 'border-box',

    flex: 1,
    padding: '1%',

    [down('xs')]: {
      flex: '50%',
      width: '50%',
    },

    '& > svg': {
      margin: spacing(0, 0, 2, 0),
      [down('xs')]: {
        margin: 0,
      },
    },

    '&:hover > button': {
      opacity: 1,
      visibility: 'visible',
    },

    '@media (hover: none)': {
      '&:hover > button': {
        opacity: 0,
        visibility: 'hidden',
      },
      '& > button': {
        opacity: 1,
        visibility: 'visible',
        backgroundColor: 'transparent',
      },
    },
  },
  [alt, {
    '& svg': {
      color: green.A700
    },
    '&:hover': {
      boxShadow: shadows[10],
    },
    '@media (hover: none)': {
      '&:hover': {
        boxShadow: 'none',
      },
    }
  }],
]))
