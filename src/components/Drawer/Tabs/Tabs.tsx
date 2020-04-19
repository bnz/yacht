import React, { FC, useCallback, useMemo } from 'react'
import { TabsStyled } from './TabsStyled'
import SettingsIcon from '@material-ui/icons/Settings'
// import CasinoIcon from '@material-ui/icons/Casino'
// import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import HistoryIcon from '@material-ui/icons/History'
import useTheme from '@material-ui/core/styles/useTheme'
import { useDispatch, useSelector } from 'react-redux'
import { changeActiveTab, makeActiveTabSelector } from '../../../redux/reducers/activeTab'
import { TabStyled } from './TabStyled'

const activeTabSelector = makeActiveTabSelector()

const useTabIndicatorProps = () => {
  const { spacing, palette: { divider } } = useTheme()
  return useMemo(() => ({
    style: {
      height: spacing(0.5),
      backgroundColor: divider,
    },
  }), [divider, spacing])
}

export const Tabs: FC = () => {
  const activeTab = useSelector(activeTabSelector)
  const dispatch = useDispatch()
  const handleChange = useCallback(
    (_, value) => dispatch(changeActiveTab(value)),
    [dispatch],
  )

  return (
    <TabsStyled
      value={activeTab}
      onChange={handleChange}
      TabIndicatorProps={useTabIndicatorProps()}
    >
      <TabStyled title="tab.settings" icon={<SettingsIcon />} />
      {/*<TabStyled title="tab.combinations" icon={<CasinoIcon />} />*/}
      {/*<TabStyled title="tab.rules" icon={<HelpOutlineIcon />} />*/}
      <TabStyled title="tab.history" icon={<HistoryIcon />} />
    </TabsStyled>
  )
}

