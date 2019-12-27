import React, { FC } from 'react'
import { i18n } from '../../../helpers/i18n/i18n'
import { ChangeTableSizeButtonProps } from './ChangeTableSizeButtonConnected'
import { Checkbox } from '@material-ui/core'
import { DrawerListItem } from '../DrawerListItem'
import { DrawerListDivider } from '../DrawerListDivider'

export const ChangeTableSizeButton: FC<ChangeTableSizeButtonProps> = ({ tableSize, onChange }) => (
  <>
    <DrawerListDivider />
    <DrawerListItem
      onClick={onChange}
      icon={
        <Checkbox
          color="default"
          checked={tableSize === 'small'}
        />
      }
    >
      {i18n('compactTable')}
    </DrawerListItem>
  </>
)
