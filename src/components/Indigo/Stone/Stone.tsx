import React, { FC } from 'react'
import style from './Stone.module.css'
import { StoneIds, StoneType } from '../types'
import cx from 'classnames'
import { observer } from 'mobx-react'
import { useStore } from '../Store/HexProvider'

interface StoneProps {
  id: StoneIds
}

export const Stone: FC<StoneProps> = observer(({ id }) => {
  const store = useStore()
  const type = store.stones[id][0]

  // console.log('Stone:::render')

  return (
    <div
      data-id={id}
      className={cx(style.root, style[StoneType[type]])}
      style={store.getStoneCSS(id)}
    >
      <div style={{ position: 'absolute', color: '#333' }}>{id}</div>
    </div>
  )
})
