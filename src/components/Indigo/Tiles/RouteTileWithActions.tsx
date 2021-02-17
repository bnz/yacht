import React, { FC } from 'react'
import { SVG } from '../SVG'
import { TileActionsStyled } from './TileActions'
import { useStore } from '../Store/Provider'
import { Ids } from './RouteTile'

interface RouteTileWithActionsProps {
  id: Ids
}

export const RouteTileWithActions: FC<RouteTileWithActionsProps> = ({ id }) => (
  <>
    <SVG uses={useStore().routeTiles[id].uses} />
    <TileActionsStyled id={id} />
  </>
)
