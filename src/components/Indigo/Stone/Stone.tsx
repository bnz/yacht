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
  const stone = store.stones[id]

  // console.log('Stone:::render')

  return (
    <div
      data-id={id}
      className={cx(style.root, style[StoneType[stone.type]])}
      style={store.getStoneCSS(id)}
    >
      {/*<span style={{*/}
      {/*  position: 'absolute', inset: 0,*/}
      {/*  display: 'flex',*/}
      {/*  alignItems: 'center',*/}
      {/*  justifyContent: 'center',*/}
      {/*}}>{id}</span>*/}
    </div>
  )
})
