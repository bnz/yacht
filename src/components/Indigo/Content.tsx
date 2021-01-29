import React, { FC } from 'react'
import styled from '@material-ui/styles/styled'
import { RouteTile, Wrap } from './RouteTile'
import {
  defaultHexActiveColor,
  defaultHexColor,
  defaultHexHoverColor,
  doneHexColor,
  position,
  routeColor,
  routeThick,
} from './css'
import { conditionalCSS } from '../../helpers/conditionalCSS'
import { Themed } from '../../helpers/types'

const Inner = styled('div')(() => ({
  ...position(0),
  backgroundColor: doneHexColor,
}))

interface ContentProps {
  variant?: 'v-1.1' | 'v-1.2' | 'v-2'
  center?: boolean
  base?: boolean
  className?: string
}

const ContentComponent: FC<ContentProps> = ({
  center,
  base,
  variant,
  className,
}) => (
  <div className={className}>
    {!center && !base && variant && (
      <Inner>
        <RouteTile variant={variant} />
      </Inner>
    )}
    {center && (
      <Inner>
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          transform: 'translate(-50%, 0) rotate(59.25deg)',
          backgroundColor: routeColor,
          width: routeThick,
        }} />
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          transform: 'translate(-50%, 0) rotate(-59.25deg)',
          backgroundColor: routeColor,
          width: routeThick,
        }} />
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          transform: 'translate(-50%, 0)',
          backgroundColor: routeColor,
          width: routeThick,
        }} />
        <Wrap left="50%" transLeft="-50%" top="0" transTop="0" />

      </Inner>
    )}
  </div>
)

export const Content = styled(ContentComponent)(({ variant, center, base }: Themed<ContentProps>) => conditionalCSS([
  position(),

  [!center && !base, {
    backgroundColor: defaultHexColor,
  }],

  [!center && !base && !variant, {
    transitionProperty: 'background-color',
    transitionDuration: '.1s',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: defaultHexHoverColor,
    },
    '&:active': {
      backgroundColor: defaultHexActiveColor,
    },
  }],
]))
