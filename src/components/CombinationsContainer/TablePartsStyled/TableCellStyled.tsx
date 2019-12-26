import React from 'react'
import styled from '@material-ui/styles/styled'
import { Themed } from '../../../helpers/types'
import { conditionalCSS } from '../../../helpers/conditionalCSS'
import TableCell from '@material-ui/core/TableCell'

export interface TableCellStyledProps {
  heading?: boolean
  selected?: boolean
  noPadding?: boolean
  centered?: boolean
  width?: number
  active?: boolean
}

export const TABLE_FIRST_COLUMN_WIDTH = 150
export const TABLE_COLUMN_WIDTH = 170

export const TableCellStyled = styled(
  ({
    heading,
    selected,
    noPadding,
    centered,
    width,
    active,
    ...props
  }: TableCellStyledProps) => (
    <TableCell component="div" {...props} />
  ),
)(({
  theme: { spacing, palette: { type, grey, background: { paper } } },
  centered, heading, selected, noPadding, width, active,
}: Themed & TableCellStyledProps) => {
  const activeColor = type === 'dark' ? paper : grey['300']

  return conditionalCSS([
    [centered, {
      textAlign: 'center',
    }],
    [heading, {
      color: '#f99',
    }],
    [selected, {
      backgroundColor: activeColor,
    }],
    [noPadding, {
      padding: 0,
      position: 'relative',
    }],
    [width, {
      width,
      minWidth: width,
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
  ])
})

