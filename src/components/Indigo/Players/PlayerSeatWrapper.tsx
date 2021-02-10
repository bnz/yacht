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
    spacing, shape: { borderRadius },
    shadows,
    breakpoints: { down },
  },
  selected,
}: Themed<PlayerSeatWrapperProps>) => conditionalCSS([
  {
    borderRadius,
    padding: spacing(1),
    [down('xs')]: {
      padding: 0,
    },
  },
  [selected, {
    boxShadow: shadows[10],
  }],
]))
