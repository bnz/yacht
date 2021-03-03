import styled from '@material-ui/styles/styled'
import React, { FC } from 'react'

const GridComponent: FC = (props) => (
  <ul {...props} />
)

GridComponent.displayName = 'Grid'

export const Grid = styled(GridComponent)(({ amount }: { amount: number }) => ({
  '--amount': amount,
  '--counter': 1,
  position: 'relative',
  listStyleType: 'none',
  display: 'none',
  gridTemplateColumns: 'repeat(var(--amount), 1fr 2fr) 1fr',
  gridGap: 'max(0.1%, 1px) max(0.2%, 2px)',


  '& *': {
    visibility: 'hidden',
  },
}))
