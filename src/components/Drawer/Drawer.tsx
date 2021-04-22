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
import List from '@material-ui/core/List'
import { ThemeToggler } from './TabsContent/SettingsTabContent/ThemeToggler/ThemeToggler'
import { LangChangeButtons } from './TabsContent/SettingsTabContent/LangChangeButtons/LangChangeButtons'
import { observer } from 'mobx-react'
import { iHexStore } from '../Indigo/Store/HexStore'
import { useStore } from '../Indigo/Store/HexProvider'
import { RestartGameButton } from './TabsContent/SettingsTabContent/RestartGameButton/RestartGameButton'
import { Actions } from '../Indigo/Actions'

const Tabs = notInPlayVisibilityHOC(OriginalTabs)
// const CombinationsTab = notInPlayVisibilityHOC(CombinationsTabContent)
// const RulesTab = notInPlayVisibilityHOC(RulesTabContent)
const HistoryTab = notInPlayVisibilityHOC(HistoryTabContent)
const RestartGame = notInPlayVisibilityHOC(RestartGameButton)

export const Drawer: FC = observer(() => {
  let store: iHexStore | undefined = undefined

  try {
    store = useStore()
  } catch (e) {
  }

  return (
    <DrawerStyled>
      <List>
        <ThemeToggler />
        <LangChangeButtons />
      </List>
      {store ? (
        <Actions />
      ) : (
        <>
          <RestartGame />
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
        </>
      )}
    </DrawerStyled>
  )
})
