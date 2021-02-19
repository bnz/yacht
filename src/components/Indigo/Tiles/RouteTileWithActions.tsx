import React, { FC } from 'react'
import { SVG } from '../SVG'
import { TileActionsStyled } from './TileActions'
import { useStore } from '../Store/Provider'
import { Ids } from './RouteTile'
import { toJS } from 'mobx'

interface RouteTileWithActionsProps {
  id: Ids
}

export const RouteTileWithActions: FC<RouteTileWithActionsProps> = ({ id }) => {
  const store = useStore()

  console.log(toJS(store.routeTiles[id]))

  return (
    <>
      <SVG uses={store.routeTiles[id].uses} />
      <TileActionsStyled id={id} />
    </>
  )
}
