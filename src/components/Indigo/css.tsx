import { CSSProperties } from 'react'

export const routeColor = 'rgba(0, 0, 255, 0.5)'

export const defaultHexColor = '#888'
export const defaultHexHoverColor = 'rgb(221, 221, 221, 0.8)'
export const defaultHexActiveColor = 'rgb(221, 221, 221, 0.9)'

export const doneHexColor = '#ddd'

export const routeThick = 10

export const position = (percents: number = 0): CSSProperties => ({
  position: 'absolute',
  left: `${percents}%`,
  top: `${percents}%`,
  width: `${100 - percents * 2}%`,
  height: `${100 - percents * 2}%`,
  clipPath: 'polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0)',
})
