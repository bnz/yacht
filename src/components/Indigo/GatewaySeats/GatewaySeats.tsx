import React, { FC } from 'react'
import style from './GatewaySeats.module.css'
import { Sphere } from '../Sphere/Sphere'
import { PlayerId } from '../types'
import cx from 'classnames'
import { observer } from 'mobx-react'

interface GatewaySeatsProps {

}

export const GatewaySeats: FC<GatewaySeatsProps> = observer(() => {

  console.log('GatewaySeats::render')

  const a: Record<number, PlayerId> = {
    1: PlayerId.Player1,
    2: PlayerId.Player1,
    3: PlayerId.Player2,
    4: PlayerId.Player2,
    5: PlayerId.Player3,
    6: PlayerId.Player3,
  }

  return (
    <>
      {[
        1, 2,
        3, 4,
        5, 6,
      ].map((i) => (
        <div key={i} className={cx(style.item, style[`g-${i}`])}>
          <Sphere color={a[i]} alt />
        </div>
      ))}
    </>
  )
})
