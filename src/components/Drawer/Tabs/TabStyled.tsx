import React from 'react'
import styled from '@material-ui/styles/styled'
import Tab from '@material-ui/core/Tab'
import { Themed } from '../../../helpers/types'
import { i18nKeys } from '../../../helpers/i18n/i18nKeys'
import Tooltip from '@material-ui/core/Tooltip'
import { i18n } from '../../../helpers/i18n/i18n'

interface TabStyledProps {
  icon: JSX.Element
  title: i18nKeys
}

export const TabStyled = styled(
  ({ title, icon, ...rest }: TabStyledProps) => (
    <Tab
      label={
        <Tooltip title={i18n(title)} placement="top">
          {icon}
        </Tooltip>
      }
      {...rest}
    />
  ),
)(({ theme: { drawerTabsCount } }: Themed) => ({
  minWidth: `${100 / drawerTabsCount}%`,
}))
