import React, { FC } from 'react'
import { MainLayout } from '../MainLayout/MainLayout'
import { getItem } from '../../helpers/getItem'
import { Yacht } from './Yacht'
import { Indigo } from '../Indigo/Indigo'

export const App: FC = () => {
  const game = getItem('game', false)

  return (
    <MainLayout>
      {(!game || game === 'yacht') && (
        <Yacht />
      )}
      {game === 'indigo' && (
        <Indigo />
      )}
    </MainLayout>
  )
}
