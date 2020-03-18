import React, { FC } from 'react'
import { i18n } from '../../../helpers/i18n/i18n'
import { DrawerListItem } from '../DrawerListItem'
import { DrawerListDivider } from '../DrawerListDivider'
import { toggleSize } from '../../../redux/reducers/tableSize'
import { useDispatchedCallback } from '../../../helpers/useDispatchedCallback'
import { CheckboxAsIcon } from './CheckboxAsIcon'

export const ChangeTableSizeButton: FC = () => {
  const onChange = useDispatchedCallback(toggleSize())

  return (
    <>
      <DrawerListDivider />
      <DrawerListItem onClick={onChange} icon={<CheckboxAsIcon />}>
        {i18n('compactTable')}
      </DrawerListItem>
    </>
  )
}
