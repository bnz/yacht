import React, { FC } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../Store/Provider'
import { playerIdToSVGMap } from './Player'
import { playerIdToColorMap } from '../Ids'
import { PlayerSeatWrapper } from './PlayerSeatWrapper'

interface PlayerSeat {
  dataId: number
}

const playerSeats: number[] = [134, 136, 138, 140]

export const PlayerSeat: FC<PlayerSeat> = observer(({ dataId }) => {
  const store = useStore()
  const seatIndex = playerSeats.indexOf(dataId)

  if (seatIndex !== -1 && store.players.length > seatIndex) {
    const id = store.players[seatIndex].id

    return (
      <PlayerSeatWrapper selected={store.playerMove === id}>
        <img src={playerIdToSVGMap[id]} alt="" style={{
          display: 'block',
        }} />
        <svg viewBox="0 0 416 50" fill={playerIdToColorMap[id]}>
          <path d="M0 25c0 13.807 11.193 25 25 25h366c13.807 0 25-11.193 25-25S404.807 0 391 0H25C11.193 0 0 11.193 0 25z" />
        </svg>
      </PlayerSeatWrapper>
    )
  }

  return null
})
