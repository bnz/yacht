import React, { FC } from 'react'
import { DrawerStyled } from './DrawerStyled'
import { Tabs as OriginalTabs } from './Tabs/Tabs'

import { SettingsTabContent } from './TabsContent/SettingsTabContent/SettingsTabContent'
import { TabContent } from './Tabs/TabContent'
import { TabsContainer } from './Tabs/TabsContainer'
import { notInPlayVisibilityHOC } from '../../helpers/notInPlayVisibilityHOC'
// import { CombinationsTabContent } from './TabsContent/CombinationsTabContent/CombinationsTabContent'
// import { RulesTabContent } from './TabsContent/RulesTabContent/RulesTabContent'
import { HistoryTabContent } from './TabsContent/HistoryTabContent/HistoryTabContent'

const Tabs = notInPlayVisibilityHOC(OriginalTabs)
// const CombinationsTab = notInPlayVisibilityHOC(CombinationsTabContent)
// const RulesTab = notInPlayVisibilityHOC(RulesTabContent)
const HistoryTab = notInPlayVisibilityHOC(HistoryTabContent)

export const Drawer: FC = () => (
  <DrawerStyled>
    <Tabs />
    <TabsContainer>
      <TabContent padding={false}>
        <SettingsTabContent />
      </TabContent>
      {/*
      <TabContent>
        <CombinationsTab />
      </TabContent>
      <TabContent>
        <RulesTab />
      </TabContent>
      */}
      <TabContent padding={false}>
        <HistoryTab />
      </TabContent>
    </TabsContainer>
  </DrawerStyled>
)
