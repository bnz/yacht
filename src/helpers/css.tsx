import { CSSProperties } from 'react'
import { AlignItemsProperty, JustifyContentProperty } from 'csstype'

type StretchArg = number | string

const iU = (value: number | string | undefined): boolean => value === undefined

export function stretch(): CSSProperties
export function stretch(value: StretchArg): CSSProperties
export function stretch(topBottom: StretchArg, rightLeft: StretchArg): CSSProperties
export function stretch(top: StretchArg, rightLeft: StretchArg, bottom: StretchArg): CSSProperties
export function stretch(top: StretchArg, right: StretchArg, bottom: StretchArg, left: StretchArg): CSSProperties

export function stretch(top?: StretchArg, right?: StretchArg, bottom?: StretchArg, left?: StretchArg): CSSProperties {
  if (top === undefined) {
    top = 0
  }

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
