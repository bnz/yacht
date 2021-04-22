import React, { FC } from 'react'
import styled from '@material-ui/styles/styled'
import MaterialTable from '@material-ui/core/Table'

export const Table = styled((props) => <MaterialTable component='div' {...props} />)({
  overflowX: 'auto',
  overflowY: 'hidden',
  maxWidth: '100%',
  width: 'unset',
  margin: '0 auto',
  display: 'inline-grid',
  gridTemplateRows: 'auto 1fr auto',
})

const Row: FC = (props) => <div {...props} />

Row.displayName = 'Row'

export const TableRow = styled(Row)({
  // display: 'inline-block',
  // margin: '0 auto',
})
