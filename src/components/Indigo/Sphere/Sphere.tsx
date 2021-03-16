import React, { FC } from 'react'
import './Sphere.css'
import { AspectRatio } from '../AspectRatio/AspectRatio'
import cx from 'classnames'
import { PlayerId } from '../types'

interface PlayerPurpleProps {
  color: PlayerId // 'purple' | 'turquoise' | 'coral' | 'white'
}

export const Sphere: FC<PlayerPurpleProps> = ({ color }) => (
  <AspectRatio>
    <div className={cx('sphere-wrapper', color)} />
  </AspectRatio>
)
