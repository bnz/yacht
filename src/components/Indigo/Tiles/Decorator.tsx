import React, { FC } from 'react'
import { decorators, DecoratorsIds } from '../Ids'
import { SVG } from '../SVG'

interface DecoratorProps {
  dataId: number
}

export const Decorator: FC<DecoratorProps> = ({ dataId }) => (
  <>
    {decorators[dataId as DecoratorsIds] && (
      <SVG uses={[decorators[dataId as DecoratorsIds]]} />
    )}
  </>
)
