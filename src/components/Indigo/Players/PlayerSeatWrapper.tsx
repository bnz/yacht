/*tslint:disable:no-magic-numbers*/
import styled from '@material-ui/styles/styled'
import { conditionalCSS } from '../../../helpers/conditionalCSS'
import { Themed } from '../../../helpers/types'
import React from 'react'
import { stretch } from '../../../helpers/css'

interface PlayerSeatWrapperProps {
  selected?: boolean
}

export const PlayerSeatWrapper = styled(
  ({ selected, ...props }: PlayerSeatWrapperProps) => <div {...props} />,
)(({
  theme: {
    shape: { borderRadius },
    shadows,
    palette: { divider, background: { paper: backgroundColor } },
  },
  selected,
}: Themed<PlayerSeatWrapperProps>) => {
  const s = 20

  return conditionalCSS([
    {
      width: `${100 + s * 2}%`,
      marginLeft: `-${s}%`,
      marginTop: `-${s}%`,
      padding: '10% 5% 10%',

      borderRadius,

      position: 'relative',

      '& div:first-of-type': {
        backgroundColor: '#f99',
        ...stretch(0, 0, 'auto', 0),
      },

      '& img': {
        display: 'block',
      },
      '& svg:first-of-type': {
        margin: '10% 0',
      },
      '& svg:first-of-type + svg': {
        margin: '0 10%',
      },
    },
    [selected, {
      boxShadow: shadows[10],
      backgroundColor,
    }],
  ])
})
