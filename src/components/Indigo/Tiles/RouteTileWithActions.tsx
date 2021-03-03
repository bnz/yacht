import React, { FC } from 'react'
import { SVG } from '../SVG'
import { TileActionsStyled } from './TileActions'
import { useStore } from '../Store/Provider'

export const RouteTileWithActions: FC = () => (
  <>
    <SVG uses={useStore().preSitRouteTileUses} />
    <TileActionsStyled />
  </>
)
