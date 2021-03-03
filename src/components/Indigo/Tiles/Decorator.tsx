import React, { FC } from 'react'
import { EmptyLineIds } from '../Ids'
import { SVG } from '../SVG'
import { useStore } from '../Store/Provider'

interface DecoratorProps {
  id: EmptyLineIds
}

export const Decorator: FC<DecoratorProps> = ({ id }) => {
  const store = useStore()

  return (
    <SVG
      uses={store.decoratorEmptyLine[id]}
      fill={store.gatewaysColors[id]}
    />
  )
}
