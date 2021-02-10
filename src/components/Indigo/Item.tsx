import React, { FC } from 'react'
import styled from '@material-ui/styles/styled'
import cx from 'classnames'
import { TreasureTile } from './Tiles/TreasureTile'
import { Ids, RouteTile } from './Tiles/RouteTile'
import { observer } from 'mobx-react'
import { useStore } from './Store/Provider'
import { emptyIds, treasureCenterTileIds, treasureTilesIds } from './Ids'
import { PlayerSeat } from './Players/PlayerSeat'
import { Decorator } from './Tiles/Decorator'
import { Gateway } from './Tiles/Gateway'

interface ItemProps {
  className?: string
  dataId: number
}


const ItemComponent: FC<ItemProps> = observer(({ className, dataId, ...props }) => {
  const store = useStore()

  return (
    <li
      className={cx(className, 'hexagon-item')}
      {...(dataId ? {
        'data-location': store.getItemLocation(dataId),
        'data-i': dataId,
      } : {})}
      {...props}
    >
      {emptyIds.indexOf(dataId) === -1 && (
        treasureTilesIds.indexOf(dataId) !== -1 || treasureCenterTileIds.indexOf(dataId) !== -1 ? (
          <TreasureTile id={dataId} />
        ) : (
          <RouteTile id={dataId as Ids} />
        )
      )}
      <PlayerSeat dataId={dataId} />
      <Decorator dataId={dataId} />
      <Gateway dataId={dataId} />
    </li>
  )
})

export const Item = styled(ItemComponent)({
  position: 'relative',
  height: 0,
  paddingBottom: '86.60254%',
  gridColumn: '1 / span 3',
  gridRow: 'calc(var(--counter) + var(--counter)) / span 2',
  filter: 'drop-shadow(0 0 1em rgba(68, 68, 68, .08))',
})
