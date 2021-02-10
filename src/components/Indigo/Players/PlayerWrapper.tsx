import React from 'react'
import styled from '@material-ui/styles/styled'
import { Themed } from '../../../helpers/types'
import { conditionalCSS } from '../../../helpers/conditionalCSS'

export const PlayerWrapper = styled(({ alt, ...props }) => <div {...props} />)(({
  theme: { shape: { borderRadius }, shadows, spacing, breakpoints: { down } },
  alt,
}: Themed<{ alt?: boolean }>) => conditionalCSS([
  {
    position: 'relative',
    borderRadius: borderRadius,
    boxShadow: shadows[5],
    boxSizing: 'border-box',

    padding: spacing(4),

    [down('xs')]: {
      padding: spacing(1),
    },

    '& > svg': {
      margin: spacing(0, 0, 2, 0),
      [down('xs')]: {
        margin: 0,
      },
    },

    '& > img': {
      display: 'block',
    },

    '& > div': {
      textAlign: 'center',
    },
  },
  [alt, {
    cursor: 'pointer',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    '&:hover': {
      boxShadow: shadows[10],
    },
  }],
]))
