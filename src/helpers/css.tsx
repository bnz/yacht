import { CSSProperties } from 'react'
import { AlignItemsProperty, JustifyContentProperty } from 'csstype'

type Stretch4 = (top?: number, right?: number, bottom?: number, left?: number) => CSSProperties

const iU = (value: number | undefined): boolean => value === undefined

export const stretch: Stretch4 = (
  top = 0,
  right,
  bottom,
  left,
) => {

  if (iU(right) && iU(bottom) && iU(left)) {
    left = right = bottom = top
  }

  if (!iU(top) && !iU(right) && iU(bottom) && iU(left)) {
    left = right
    bottom = top
  }

  if (!iU(top) && !iU(right) && !iU(bottom) && iU(left)) {
    left = right
  }

  return {
    position: 'absolute',
    top,
    right,
    bottom,
    left,
  }
}

type Align = (vertical?: AlignItemsProperty, horizontal?: JustifyContentProperty) => CSSProperties

export const align: Align = (
  vertical = 'center',
  horizontal = 'center',
) => ({
  display: 'flex',
  alignItems: vertical,
  justifyContent: horizontal,
})

export const cropString: CSSProperties = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}
