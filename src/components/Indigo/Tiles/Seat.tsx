import React, { FC } from 'react'
import { TileWrapper } from './TileWrapper'
import { observer } from 'mobx-react'
import { PlayerSitIds, Tiles } from '../Store/Store'
import { useStore } from '../Store/Provider'
import { PlayerSeatWrapper } from '../Players/PlayerSeatWrapper'
import { playerIdToSVGMap } from '../Players/Player'
import { playerIdToColorMap } from '../Ids'
import { abstractRouteTileIds, SVG } from '../SVG'

export interface SeatProps {
  id: PlayerSitIds
}

export const Seat: FC<SeatProps> = observer(({ id }) => {
  const store = useStore()
  const player = store.players[id]

  if (!player) {
    return (
      <TileWrapper dataId={id} />
    )
  }

  const playerId = player.id
  const selected = store.playerMove[0] === player.id

  return (
    <TileWrapper dataId={id}>
      <PlayerSeatWrapper selected={selected}>
        <img src={playerIdToSVGMap[playerId]} alt="" />
        <svg viewBox="0 0 416 50" fill={playerIdToColorMap[playerId]}>
          <path d="M0 25c0 13.807 11.193 25 25 25h366c13.807 0 25-11.193 25-25S404.807 0 391 0H25C11.193 0 0 11.193 0 25z" />
        </svg>
        {selected && (
          <SVG uses={abstractRouteTileIds[store.playerMove[1] as NonNullable<Tiles>]} />
        )}
      </PlayerSeatWrapper>
    </TileWrapper>
  )
})
