import React, { FC } from 'react'
import { TileWrapper } from './TileWrapper'
import { PlayerSeatWrapper } from '../Players/PlayerSeatWrapper'
import { observer } from 'mobx-react'
import { useStore } from '../Store/Provider'
import { PlayerId, playerIdToSVGMap } from '../Players/Player'
import { playerIdToColorMap } from '../Ids'
import { abstractRouteTileIds, SVG } from '../SVG'
import { Tiles } from '../Store/Store'

export interface SeatProps {
  locationId: 1 | 13 | 79 | 91
  playerId: PlayerId
}

export const Seat: FC<SeatProps> = observer(({ playerId }) => {
  const store = useStore()

  console.log('SEAT ::: RENDER')

  return (
    <TileWrapper dataId={0}>
      <PlayerSeatWrapper selected={store.playerMove[0] === playerId}>
        <img src={playerIdToSVGMap[playerId]} alt="" />
        <svg viewBox="0 0 416 50" fill={playerIdToColorMap[playerId]}>
          <path d="M0 25c0 13.807 11.193 25 25 25h366c13.807 0 25-11.193 25-25S404.807 0 391 0H25C11.193 0 0 11.193 0 25z" />
        </svg>
        {store.playerMove[0] === playerId && (
          <SVG uses={abstractRouteTileIds[store.playerMove[1] as NonNullable<Tiles>]} />
        )}
      </PlayerSeatWrapper>
    </TileWrapper>
  )
})
