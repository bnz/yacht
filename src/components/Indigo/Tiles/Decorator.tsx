import React, { FC } from 'react'
import { decorators, DecoratorsIds } from '../Ids'
import { SVG } from '../SVG'
import { TileWrapper } from './TileWrapper'

interface DecoratorProps {
  id: DecoratorsIds
}

export const Decorator: FC<DecoratorProps> = ({ id }) => {
  console.log('Decorator:::render')

  return (
    <TileWrapper dataId={id}>
      <SVG uses={[decorators[id]]} />
    </TileWrapper>
  )
}
