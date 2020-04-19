import React, { FC } from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import { useSelector } from 'react-redux'
import { makeActiveFirstSelector } from '../../../../../redux/reducers/activeFirst'

const activeFirstSelector = makeActiveFirstSelector()

export const CheckboxAsIcon: FC = () => {
  const activeFirst = useSelector(activeFirstSelector)

  return (
    <Checkbox
      color="default"
      checked={activeFirst}
    />
  )
}
