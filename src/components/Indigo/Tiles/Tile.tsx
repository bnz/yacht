import React, { FC } from 'react'
import styled from '@material-ui/styles/styled'
import { StyledProps } from '@material-ui/core/styles'
import cx from 'classnames'
import { Themed } from '../../../helpers/types'
import { conditionalCSS } from '../../../helpers/conditionalCSS'
import svg from '../hex.svg'
import { RouteTileNames } from '../Ids'
import { hexRationDiff } from '../Store/Store'

interface TileComponentProps extends StyledProps {
  onTop?: boolean
  dataId: any
  empty?: boolean
  name?: RouteTileNames | null
}

const TileComponent: FC<TileComponentProps> = ({
  className,
  children,
  onTop,
  dataId,
  empty,
  name,
  ...props
}) => (
  <li className={cx(className, 'hexagon-tile')} {...props} data-id={dataId}>
    {children}
  </li>
)

TileComponent.displayName = 'Tile'

export const Tile = styled(TileComponent)(({
  onTop,
  empty,
  name,
}: Themed<Pick<TileComponentProps, 'onTop' | 'empty' | 'name'>>) => {

  return conditionalCSS([
    {
      position: 'relative',
      height: 0,
      paddingBottom: `${hexRationDiff}%`,
      gridColumn: '1 / span 3',
      gridRow: 'calc(var(--counter) + var(--counter)) / span 2',
      filter: 'drop-shadow(0 0 1em rgba(68, 68, 68, .08))',
    },
    [name !== undefined, {
      backgroundImage: `url(${svg}#hex-tile-${name || 'huji'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',

      // backgroundColor: '#f99',
      // maskImage: `url(${svg}#${name || 'lizard-0'})`,
      // maskRepeat: 'no-repeat',
      // maskSize: 'cover',

      cursor: 'pointer',
    }],
    [onTop, {
      zIndex: 1,
    }],
  ])
})
