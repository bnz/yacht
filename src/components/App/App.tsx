/* eslint-disable react-hooks/exhaustive-deps */
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
    <>
      {(!game || game === 'yacht') && (
        <MainLayout>
          <Yacht />
        </MainLayout>
      )}
      {game === 'indigo' && (
        <HexProvider store={new HexStore()}>
          <MainLayout>
            <Indigo />
          </MainLayout>
        </HexProvider>
      )}
    </>
  )
}
