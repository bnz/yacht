/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback } from 'react'
import { SVG, Uses } from '../SVG'
import { observer } from 'mobx-react'
import { useStore } from '../Store/Provider'
import { RouteTileWithActions } from './RouteTileWithActions'
import { Tiles } from '../Store/Store'

export type Ids =
  | 18 | 19 | 20 | 21 | 22

interface RouteTileProps {
  id: Ids
}

export const RouteTile: FC<RouteTileProps> = observer(({ id }) => {
  const store = useStore()
  let onClick: (() => void) | undefined = useCallback(() => store.setPreSitById(id), [])
  const uses: Uses[] = store.getUsesFromHistoryById(id) || ['hex-default-bg']

  if (store.preSit !== null && store.preSit.location === id) {
    return (
      <RouteTileWithActions id={id} />
    )
  }

  return (
    <SVG uses={uses} {...(uses[0] === 'hex-default-bg' ? { onClick } : {})} />
  )
})
