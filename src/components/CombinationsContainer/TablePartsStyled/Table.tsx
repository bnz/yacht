import React, { ComponentType } from 'react'
import styled from '@material-ui/styles/styled'
import MaterialTable from '@material-ui/core/Table'
import MaterialTableBody from '@material-ui/core/TableBody'
import MaterialTableRow from '@material-ui/core/TableRow'
import MaterialTableHead from '@material-ui/core/TableHead'
import MaterialTableFooter from '@material-ui/core/TableFooter'
import { Themed } from '../../../helpers/types'

const AsDiv = (Component: ComponentType) => styled((props) => (
  <Component component="div" {...props} />
))({
  display: 'block',
})

export const Table = AsDiv(MaterialTable)

export const TableHead = AsDiv(MaterialTableHead)

export const TableBody = styled(AsDiv(MaterialTableBody))({})

export const TableFooter = styled(AsDiv(MaterialTableFooter))(({
  theme: { palette: { type, grey, background: { paper } } },
}: Themed) => ({
  '& > div > div': {
    borderTop: `2px solid ${type === 'dark' ? paper : grey['300']}`,
    borderBottom: 0,
    lineHeight: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'bold',
  },
}))

export const TableRow = AsDiv(MaterialTableRow)
