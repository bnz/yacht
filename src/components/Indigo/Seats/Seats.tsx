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
      {store.playersStore.entries.map(([, player], index) => (
        <Fragment key={player.id}>
          <div className={cx(
            style.highlight,
            style[`p-${index + 1}`],
            style[store.orientationType],
            { [style.visible]: player.id === store.playerMove[0] },
          )} />
          <div className={cx(
            style.item,
            style[`p-${index + 1}`],
            style[store.orientationType],
          )}>
            <Sphere color={player.id} />
          </div>
        </Fragment>
      ))}
    </>
  )
})
