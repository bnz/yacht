import svg from './hex.svg'
import React, { FC } from 'react'

export type Ids =
  | 12 | 13 | 14 | 15 | 16


export type RouteTileIds =
  | 'shuriken-l'
  | 'shuriken-r'

  | 'crossroad'

  | 'turtle-0'
  | 'turtle-60'
  | 'turtle-120'

  | 'lizard-0'
  | 'lizard-60'
  | 'lizard-120'

  | 'human-1'
  | 'human-2'
  | 'human-3'
  | 'human-4'
  | 'human-5'
  | 'human-6'

export const routeTileIds: { [id in RouteTileIds]: Uses[] } = {
  'shuriken-l': ['hex-main-bg', 'hex-circle-top-right', 'hex-circle-bottom-right', 'hex-circle-center-left'],
  'shuriken-r': ['hex-main-bg', 'hex-circle-top-left', 'hex-circle-bottom-left', 'hex-circle-center-right'],
  'crossroad': ['hex-main-bg', 'hex-line-0deg', 'hex-line-60deg', 'hex-line-120deg'],
  'turtle-0': ['hex-main-bg', 'hex-line-0deg', 'hex-circle-center-left', 'hex-circle-center-right'],
  'turtle-60': ['hex-main-bg', 'hex-line-60deg', 'hex-circle-top-left', 'hex-circle-bottom-right'],
  'turtle-120': ['hex-main-bg', 'hex-line-120deg', 'hex-circle-bottom-left', 'hex-circle-top-right'],
  'lizard-0': ['hex-main-bg', 'hex-line-0deg', 'hex-arc-top', 'hex-arc-bottom'],
  'lizard-60': ['hex-main-bg', 'hex-line-60deg', 'hex-arc-top-right', 'hex-arc-bottom-left'],
  'lizard-120': ['hex-main-bg', 'hex-line-120deg', 'hex-arc-bottom-right', 'hex-arc-top-left'],
  'human-1': ['hex-main-bg', 'hex-arc-bottom', 'hex-arc-bottom-right', 'hex-circle-top-left'],
  'human-2': ['hex-main-bg', 'hex-arc-bottom', 'hex-arc-bottom-left', 'hex-circle-top-right'],
  'human-3': ['hex-main-bg', 'hex-arc-bottom-left', 'hex-arc-top-left', 'hex-circle-center-right'],
  'human-4': ['hex-main-bg', 'hex-arc-top-left', 'hex-arc-top', 'hex-circle-bottom-right'],
  'human-5': ['hex-main-bg', 'hex-arc-top', 'hex-arc-top-right', 'hex-circle-bottom-left'],
  'human-6': ['hex-main-bg', 'hex-arc-top-right', 'hex-arc-bottom-right', 'hex-circle-center-left'],
}


export type Uses =
  | 'hex-main-bg'
  | 'hex-treasure-bg'
  | 'hex-default-bg'

  | 'hex-circle-top-left'
  | 'hex-circle-top-right'
  | 'hex-circle-center-left'
  | 'hex-circle-center-right'
  | 'hex-circle-bottom-left'
  | 'hex-circle-bottom-right'

  | 'hex-line-0deg'
  | 'hex-line-60deg'
  | 'hex-line-120deg'

  | 'hex-arc-top'
  | 'hex-arc-top-right'
  | 'hex-arc-top-left'
  | 'hex-arc-bottom-right'
  | 'hex-arc-bottom-left'
  | 'hex-arc-bottom'

  | 'hex-center'

  | 'hex-treasure-bottom'
  | 'hex-treasure-bottom-left'
  | 'hex-treasure-bottom-right'
  | 'hex-treasure-top'
  | 'hex-treasure-top-left'
  | 'hex-treasure-top-right'

interface SvgComponentProps {
  className?: string
  uses: Uses[]
}

export const tilesMap: { [id: number]: Uses[] } = {

  // center
  41: ['hex-treasure-bg', 'hex-center'],

  // treasures
  5: ['hex-treasure-bg', 'hex-treasure-bottom'],
  19: ['hex-treasure-bg', 'hex-treasure-bottom-right'],
  27: ['hex-treasure-bg', 'hex-treasure-bottom-left'],
  55: ['hex-treasure-bg', 'hex-treasure-top-right'],
  63: ['hex-treasure-bg', 'hex-treasure-top-left'],
  77: ['hex-treasure-bg', 'hex-treasure-top'],
}

export const SVG: FC<SvgComponentProps> = ({
  className,
  uses = [],
}) => (
  <svg viewBox="0 0 101 87" className={className}>
    {uses.map((use) => (
      <use key={use} href={`${svg}#${use}`} />
    ))}
  </svg>
)
