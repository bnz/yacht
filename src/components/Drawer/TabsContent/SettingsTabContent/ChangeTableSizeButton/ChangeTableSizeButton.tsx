import React, { FC } from 'react'
import { i18n } from '../../../../../helpers/i18n/i18n'
import { ListItem } from '../ListParts/ListItem'
import { ListDivider } from '../ListParts/ListDivider'
import { toggleSize } from '../../../../../redux/reducers/tableSize'
import { useDispatchedCallback } from '../../../../../helpers/useDispatchedCallback'
import { CheckboxAsIcon } from './CheckboxAsIcon'

export const ChangeTableSizeButton: FC = () => {
  const onChange = useDispatchedCallback(toggleSize())

  return (
    <>
      <ListDivider />
      <ListItem onClick={onChange} icon={<CheckboxAsIcon />}>
        {i18n('compactTable')}
      </ListItem>
    </>
  )
}
