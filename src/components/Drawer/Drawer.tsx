import React, { FC } from 'react'
import { DrawerStyled } from './DrawerStyled'
import { Tabs as PureTabs } from './Tabs/Tabs'

import { SettingsTab } from './TabsContent/SettingsTabContent/SettingsTab'
import { TabContent } from './Tabs/TabContent'
import { TabsContainer } from './Tabs/TabsContainer'
import { notInPlayVisibilityHOC } from '../../helpers/notInPlayVisibilityHOC'

const Tabs = notInPlayVisibilityHOC(PureTabs)

export const Drawer: FC = () => (
  <DrawerStyled>
    <Tabs />
    <TabsContainer>
      <TabContent>
        <SettingsTab />
      </TabContent>
      <TabContent>
        combinations
      </TabContent>
      <TabContent>
        rules
      </TabContent>
      <TabContent>
        history
      </TabContent>
    </TabsContainer>
  </DrawerStyled>
)
