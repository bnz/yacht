/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback } from 'react'
import { SVG, Uses } from '../SVG'
import { observer } from 'mobx-react'
import { useStore } from '../Store/Provider'
import { TileWrapper } from './TileWrapper'
import { RouteTileWithActions } from './RouteTileWithActions'

export type Ids =
  | 18 | 19 | 20 | 21 | 22
  | 30 | 31 | 32 | 33 | 34 | 35 | 36
  | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50
  | 55 | 56 | 57 | 58 /* center*/ | 60 | 61 | 62 | 63
  | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76
  | 82 | 83 | 84 | 85 | 86 | 87 | 88
  | 95 | 96 | 97 | 98 | 99 | 100 | 101
  | 110 | 112

interface RouteTileProps {
  id: Ids
}

export const RouteTile: FC<RouteTileProps> = observer(({ id }) => {
  const store = useStore()
  const uses: Uses[] = store.routeTiles[id].uses
  const preSit = store.routeTiles[id].preSit
  const onClick = useCallback(() => store.setPreSit(id), [])
  const onMouseEnter = useCallback(() => store.sitMouseEnter(id), [])
  const onMouseLeave = useCallback(() => store.sitMouseLeave(id), [])

  console.log('RouteTile:::render')

  return (
    <TileWrapper onTop={preSit} dataId={id}>
      {preSit ? (
        <RouteTileWithActions id={id} />
      ) : (
        <SVG
          uses={uses}
          {...(uses[0] === 'hex-default-bg' ? {
            onClick,
            onMouseEnter,
            onMouseLeave,
          } : {})}
        />
      )}
    </TileWrapper>
  )
})
