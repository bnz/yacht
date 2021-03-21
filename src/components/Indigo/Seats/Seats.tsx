import React, { FC, Fragment } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../Store/HexProvider'
import { Sphere } from '../Sphere/Sphere'
import style from './Seats.module.css'
import cx from 'classnames'

export const Seats: FC = observer(() => {
  const store = useStore()

  return (
    <>
      {store.playersStore.entries.map(([, player], index) => {
        const playerClass = style[`p-${index + 1}`]
        const visible = { [style.visible]: player.id === store.playerMove[0] }

        return (
          <Fragment key={player.id}>
            <div className={cx(style.highlight, playerClass, visible)} />
            <div className={cx(style.item, playerClass)}>
              <Sphere color={player.id} />
            </div>
            <div
              className={cx(style.hex, playerClass, visible)}
              style={store.playerMoveRouteTile}
            />
          </Fragment>
        )
      })}
    </>
  )
})
