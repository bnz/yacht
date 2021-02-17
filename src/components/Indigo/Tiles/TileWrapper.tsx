import React, { FC } from 'react'
import styled from '@material-ui/styles/styled'
import { StyledProps } from '@material-ui/core/styles'
import cx from 'classnames'
import { Themed } from '../../../helpers/types'
import { conditionalCSS } from '../../../helpers/conditionalCSS'

interface TileWrapperComponentProps extends StyledProps {
  onTop?: boolean
  dataId: any
}

export const TileWrapperComponent: FC<TileWrapperComponentProps> = ({
  className,
  children,
  onTop,
  dataId,
  ...props
}) => {

  return (
    <li className={cx(className, 'hexagon-item')} {...props} data-id={dataId}>
      {children}
    </li>
  )
}

export const TileWrapper = styled(TileWrapperComponent)(({
  onTop,
}: Themed<Pick<TileWrapperComponentProps, 'onTop'>>) => conditionalCSS([
  {
    position: 'relative',
    height: 0,
    paddingBottom: '86.60254%',
    gridColumn: '1 / span 3',
    gridRow: 'calc(var(--counter) + var(--counter)) / span 2',
    filter: 'drop-shadow(0 0 1em rgba(68, 68, 68, .08))',
  },
  [onTop, {
    zIndex: 1,
  }],
]))
