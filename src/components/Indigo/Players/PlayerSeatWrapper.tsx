/*tslint:disable:no-magic-numbers*/
import styled from '@material-ui/styles/styled'
import { conditionalCSS } from '../../../helpers/conditionalCSS'
import { Themed } from '../../../helpers/types'
import React from 'react'

interface PlayerSeatWrapperProps {
  selected?: boolean
}

export const PlayerSeatWrapper = styled(
  ({ selected, ...props }: PlayerSeatWrapperProps) => <div {...props} />,
)(({
  theme: {
    shape: { borderRadius },
    shadows,
    palette: { background: { paper: backgroundColor } },
  },
  selected,
}: Themed<PlayerSeatWrapperProps>) => {
  const s = 0

  return conditionalCSS([
    {
      width: `${100 + s * 2}%`,
      marginLeft: `-${s}%`,
      marginTop: `-${s}%`,
      padding: '10% 5% 10%',

      borderRadius,

      position: 'relative',

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
