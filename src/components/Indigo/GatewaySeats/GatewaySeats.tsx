import React, { FC } from 'react'
import style from './GatewaySeats.module.css'
import { Sphere } from '../Sphere/Sphere'
import cx from 'classnames'
import { observer } from 'mobx-react'
import { useStore } from '../Store/HexProvider'

export const GatewaySeats: FC = observer(() => {
  const store = useStore()

  // console.log('GatewaySeats:::render')

  return (
    <>
      {Object.entries(store.gates).map(([i]) => (
        <div key={i} className={cx(style.item, style[`g-${i}`])}>
          <Sphere color={store.getGateway(parseInt(i, 10))} alt />
        </div>
      ))}
    </>
  )
})
