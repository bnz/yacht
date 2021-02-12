import React, { FC } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../Store/Provider'
import { playerIdToSVGMap } from './Player'
import { playerIdToColorMap } from '../Ids'
import { PlayerSeatWrapper } from './PlayerSeatWrapper'
import { toJS } from 'mobx'
import { abstractRouteTileIds, SVG } from '../SVG'
import { Tiles } from '../Store/Store'

interface PlayerSeat {
  dataId: number
}

const playerSeats: number[] = [134, 136, 138, 140]

export const PlayerSeat: FC<PlayerSeat> = observer(({ dataId }) => {
  const store = useStore()
  const seatIndex = playerSeats.indexOf(dataId)

  if (seatIndex !== -1 && store.players.length > seatIndex) {
    const id = store.players[seatIndex].id

    if (store.playerMove[0] === id) {
      console.log(toJS(store.playerMove))
    }

    return (
      <PlayerSeatWrapper selected={store.playerMove[0] === id}>
        <div />
        <div>
          <img src={playerIdToSVGMap[id]} alt="" />
          <svg viewBox="0 0 416 50" fill={playerIdToColorMap[id]}>
            <path d="M0 25c0 13.807 11.193 25 25 25h366c13.807 0 25-11.193 25-25S404.807 0 391 0H25C11.193 0 0 11.193 0 25z" />
          </svg>
          {store.playerMove[0] === id && (
            <SVG uses={abstractRouteTileIds[store.playerMove[1] as NonNullable<Tiles>]} />
          )}
        </div>
      </PlayerSeatWrapper>
    )
  }

  return null
})
