/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../Store/Provider'
import { Tile } from './Tile'
import { RouteTileWithActions } from './RouteTileWithActions'
import { Ids } from '../Ids'

interface RouteTileProps {
  id: Ids
}

export const RouteTile: FC<RouteTileProps> = observer(({ id }) => {
  const store = useStore()
  const uses = store.routeTiles[id].uses
  const usesName = store.routeTiles[id].usesName
  const isPreSit = store.routeTiles[id].preSit
  // const onClick = useCallback(() => store.setPreSit(id), [])
  const onMouseEnter = useCallback(() => {
    store.sitMouseEnter(id)
  }, [])
  const onMouseLeave = useCallback(() => {
    store.sitMouseLeave(id)
  }, [])

  const isEmpty = uses.length === 1 && uses[0] === store.hexDefaultBg

  // console.log(id, toJS(uses))

  // console.log(usesName)

  return (
    <Tile
      onTop={isPreSit}
      dataId={id}
      name={usesName}
      {...({
        onMouseEnter,
        onMouseLeave,
      })}
    >
      {isPreSit ? (
        <RouteTileWithActions />
      ) : (
        !isEmpty &&
        <></>
        // <SVG
        //   uses={uses}
        //   {...(uses[0] === store.hexDefaultBg ? {
        //     onClick,
        //     onMouseEnter,
        //     onMouseLeave,
        //   } : {})}
        // />
      )}
    </Tile>
  )
})
