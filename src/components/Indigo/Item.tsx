import React from 'react'
import styled from '@material-ui/styles/styled'
import cx from 'classnames'
// import { Content } from './Content'
import { TreasureTile } from './TreasureTile'
import { RouteTile } from './Tiles/RouteTile'
import { AM } from './Indigo'

interface ItemProps {
  className?: string
  dataId: number
}

const empty = [
  2, 4, 6, 8,
  1, 3, 7, 9,
  11, 17,
  10, 18,
  64, 72,
  74, 80,
  73, 75, 79, 81,
]

const treasureCenterTile = [
  41,
]

const treasureTiles = [
  5,
  19, 27,
  55, 63,
  77,
]

export const Item = styled(({ className, dataId, ...props }: ItemProps) => {
  const location = [
    (dataId % AM) || AM,
    Math.ceil(dataId / AM)
  ].join('|')

  return (
    <li
      className={cx(className, 'hexagon-item')}
      {...(dataId ? { 'data-location': location } : {})}
      {...props}
    >
      {empty.indexOf(dataId) === -1 && (
        treasureTiles.indexOf(dataId) !== -1 || treasureCenterTile.indexOf(dataId) !== -1
          ? (
            <TreasureTile id={dataId} />
          ) : (
            <RouteTile id={dataId} />
          )
      )}
    </li>
  )
})({
  position: 'relative',
  height: '0',
  paddingBottom: '86.60254%',
  gridColumn: '1 / span 3',
  gridRow: 'calc(var(--counter) + var(--counter)) / span 2',
  filter: 'drop-shadow(0 0 1em rgba(68, 68, 68, .08))',
})
