import React, { FC } from 'react'
import { RouteTileIds, routeTileIds, SVG } from '../SVG'

interface RouteTileProps {
  id: number
}

const map: { [id: number]: RouteTileIds } = {
  20: 'shuriken-l',
  21: 'shuriken-r',
  28: 'crossroad',
  29: 'turtle-0',
  30: 'turtle-60',
  31: 'turtle-120',

  32: 'lizard-0',
  33: 'lizard-60',
  34: 'lizard-120',
  35: 'human-1',
  36: 'human-2',
  37: 'human-3',
  38: 'human-4',
  39: 'human-5',
  40: 'human-6',
}

export const RouteTile: FC<RouteTileProps> = ({ id }) => (
  <SVG uses={routeTileIds[map[id]] || ['hex-default-bg']} />
)

