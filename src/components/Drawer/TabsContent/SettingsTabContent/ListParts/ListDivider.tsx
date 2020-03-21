import React from 'react'
import styled from '@material-ui/styles/styled'
import { Themed } from '../../../../../helpers/types'
import { Divider } from '@material-ui/core'
import { conditionalCSS } from '../../../../../helpers/conditionalCSS'

interface DrawerListDividerProps {
  top?: boolean
  bottom?: boolean
}

export const ListDivider = styled(
  ({ top, bottom, ...restProps }: DrawerListDividerProps) => (
    <Divider {...restProps} />
  ),
)(({
  theme: { spacing }, top = true, bottom = true,
}: Themed<DrawerListDividerProps>) => conditionalCSS([
  [top, {
    marginTop: spacing(1),
  }],
  [bottom, {
    marginBottom: spacing(1),
  }],
]))
