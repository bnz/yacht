import React, { FC, useCallback, useMemo } from 'react'
import { TabsStyled } from './TabsStyled'
import CasinoIcon from '@material-ui/icons/Casino'
import SettingsIcon from '@material-ui/icons/Settings'
import HistoryIcon from '@material-ui/icons/History'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import useTheme from '@material-ui/core/styles/useTheme'
import { useDispatch, useSelector } from 'react-redux'
import { changeActiveTab } from '../../../redux/reducers/activeTab'
import { makeActiveTabSelector } from '../../../redux/selectors/makeActiveTabSelector'
import { TabStyled } from './TabStyled'

const activeTabSelector = makeActiveTabSelector()

export const Tabs: FC = () => {
  const activeTab = useSelector(activeTabSelector)
  const dispatch = useDispatch()
  const handleChange = useCallback(
    (_, value) => dispatch(changeActiveTab(value)),
    [dispatch],
  )
  const { palette: { divider } } = useTheme()
  const tabIndicatorProps = useMemo(() => ({
    style: {
      height: '4px',
      backgroundColor: divider,
    },
  }), [divider])

  return (
    <TabsStyled
      value={activeTab}
      onChange={handleChange}
      TabIndicatorProps={tabIndicatorProps}
    >
      <TabStyled title="tab.settings" icon={<SettingsIcon />} />
      <TabStyled title="tab.combinations" icon={<CasinoIcon />} />
      <TabStyled title="tab.rules" icon={<HelpOutlineIcon />} />
      <TabStyled title="tab.history" icon={<HistoryIcon />} />
    </TabsStyled>
  )
}

