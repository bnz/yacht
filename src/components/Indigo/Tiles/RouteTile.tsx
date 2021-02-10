/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback } from 'react'
import { RouteTileIds, routeTileIds, SVG, Uses } from '../SVG'
import { observer } from 'mobx-react'

export type Ids =
  | 18 | 19 | 20 | 21 | 22

interface RouteTileProps {
  id: Ids
}

const map: Record<Ids, RouteTileIds> = {
  18: Object.keys(routeTileIds)[2] as RouteTileIds,
  19: Object.keys(routeTileIds)[3] as RouteTileIds,
  20: Object.keys(routeTileIds)[5] as RouteTileIds,
  21: Object.keys(routeTileIds)[6] as RouteTileIds,
  22: Object.keys(routeTileIds)[7] as RouteTileIds,
}

export const RouteTile: FC<RouteTileProps> = observer(({ id }) => {
  let uses: Uses[] = ['hex-default-bg']
  let onClick = undefined

  if (routeTileIds[map[id]]) {
    uses = routeTileIds[map[id]]
  } else {
    onClick = useCallback(() => {
      console.log(id)
    }, [])
  }

  return (
    <SVG uses={uses} onClick={onClick} />
  )
})
