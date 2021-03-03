import React, { FC } from 'react'
import { CornerIds } from '../Ids'
import { SVG } from '../SVG'
import { useStore } from '../Store/Provider'

interface CornerProps {
  id: CornerIds
}

export const Corner: FC<CornerProps> = ({ id }) => (
  <SVG uses={useStore().corners[id]} />
)
