import React, { FC } from 'react'
import { MainLayout } from '../MainLayout/MainLayout'
import { commonSettingsStorage } from '../../index'
import { Yacht } from './Yacht'
import { Indigo } from '../Indigo/Indigo'
import { HexProvider } from '../Indigo/Store/HexProvider'
import { HexStore } from '../Indigo/Store/HexStore'

export const App: FC = () => {
  const game = commonSettingsStorage.get('game', 'yacht')

  return (
    <MainLayout>
      {(!game || game === 'yacht') && (
        <Yacht />
      )}
      {game === 'indigo' && (
        <HexProvider store={new HexStore()}>
          <Indigo />
        </HexProvider>
      )}
    </MainLayout>
  )
}
