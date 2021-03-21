import React, { FC, Fragment } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../Store/HexProvider'
import { Sphere } from '../Sphere/Sphere'
import style from './Seats.module.css'
import cx from 'classnames'

export const Seats: FC = observer(() => {
  const store = useStore()

  // console.log('SEATS:::render')

  return (
    <>
      {store.playersStore.entries.map(([, player], index) => {
        // console.log('Seat:::render')
        const playerClass = style[`p-${index + 1}`]
        const visible = player.id === store.playerMove[0]

        return (
          <Fragment key={player.id}>
            <div className={cx(style.highlight, playerClass, { [style.visible]: visible })} />
            <div className={cx(style.item, playerClass)}>
              <Sphere color={player.id} />
            </div>
            <div
              className={cx(style.hex, playerClass, { [style.visible]: visible })}
              style={store.playerMoveRouteTile}
            />
          </Fragment>
        )
      })}
    </>
  )
})
