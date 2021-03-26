/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, Fragment, useCallback } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../Store/HexProvider'
import { Sphere } from '../Sphere/Sphere'
import style from './Seats.module.css'
import cx from 'classnames'

export const Seats: FC = observer(() => {
  const store = useStore()
  const rotate = useCallback(store.rotateRight, [])

  // console.log('Seats:::render')

  return (
    <>
      {store.playersStore.entries.map(([, player], index) => {
        const playerClass = style[`p-${index + 1}`]

        return (
          <Fragment key={player.id}>
            {player.id === store.playerMove[0] && (
              <>
                <div className={cx(style.highlight, playerClass)} />
                <div
                  className={cx(style.hex, playerClass)}
                  style={store.playerMoveRouteTile}
                  onClick={rotate}
                />
              </>
            )}
            <div className={cx(style.item, playerClass)}>
              <Sphere color={player.id} />
            </div>
          </Fragment>
        )
      })}
    </>
  )
})
