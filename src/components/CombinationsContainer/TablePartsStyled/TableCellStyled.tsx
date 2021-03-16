import React, { ReactNode } from 'react'
import styled from '@material-ui/styles/styled'
import { Themed } from '../../../helpers/types'
import { conditionalCSS } from '../../../helpers/conditionalCSS'
import TableCell from '@material-ui/core/TableCell'

export interface TableCellStyledProps {
  heading?: boolean
  selected?: boolean
  noPadding?: boolean
  centered?: boolean
  firstColumn?: boolean
  empty?: boolean
  active?: boolean
  large?: boolean
  children?: ReactNode
}

export const TableCellStyled = styled(
  ({
    heading,
    selected,
    noPadding,
    centered,
    firstColumn,
    empty,
    active,
    large,
    ...props
  }: TableCellStyledProps) => (
    <TableCell component="div" {...props} />
  ),
)(({
  theme: {
    spacing, palette: { type, grey, background: { paper }, error: { light } },
    combinationsTable: { firstColumnWidth, columnWidth },
  },
  centered, heading, selected, noPadding, active, large,
  firstColumn = false, empty = false,
}: Themed<TableCellStyledProps>) => {
  const activeColor = type === 'dark' ? paper : grey['300']

  return conditionalCSS([
    [centered, {
      textAlign: 'center',
    }],
    [heading, {
      color: light,
    }],
    [selected, {
      backgroundColor: activeColor,
    }],
    [noPadding, {
      padding: 0,
      position: 'relative',
    }],
    [!empty && firstColumn, {
      width: firstColumnWidth,
      minWidth: firstColumnWidth,
    }],
    [!empty && !firstColumn, {
      width: columnWidth,
      minWidth: columnWidth,
    }],
    [active && !heading, {
      borderLeft: `1px solid ${activeColor}`,
      borderRight: `1px solid ${activeColor}`,
    }],
    [heading && active, {
      backgroundColor: activeColor,
      borderTopRightRadius: spacing(1),
      borderTopLeftRadius: spacing(1),
    }],
    [large, {
      fontSize: spacing(2.2),
    }],
  ])
})

