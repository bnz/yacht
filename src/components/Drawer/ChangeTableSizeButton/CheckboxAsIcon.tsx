import React, { FC } from 'react'
import { Checkbox } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { makeTableSizeSelector } from '../../../redux/selectors/makeTableSizeSelector'

const tableSizeSelector = makeTableSizeSelector()

export const CheckboxAsIcon: FC = () => {
  const tableSize = useSelector(tableSizeSelector)

  return (
    <Checkbox
      color="default"
      checked={tableSize === 'small'}
    />
  )
}
