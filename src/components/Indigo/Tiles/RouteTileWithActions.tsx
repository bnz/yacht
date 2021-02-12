import React, { FC } from 'react'
import { abstractRouteTileIds, SVG } from '../SVG'
import { Tiles } from '../Store/Store'
import { TileActionsStyled } from './TileActions'
import { useStore } from '../Store/Provider'

interface RouteTileWithActionsProps {
  id: number
}

export const RouteTileWithActions: FC<RouteTileWithActionsProps> = ({ id }) => {

  return (
    <>
      <SVG uses={abstractRouteTileIds[useStore().preSit!.name as NonNullable<Tiles>]} />
      <TileActionsStyled id={id} />
    </>
  )
}
