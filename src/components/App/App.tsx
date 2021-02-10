import React, { FC } from 'react'
import { MainLayout } from '../MainLayout/MainLayout'
import { getItem } from '../../helpers/getItem'
import { Yacht } from './Yacht'
import { Indigo } from '../Indigo/Indigo'
import { Store } from '../Indigo/Store/Store'
import { Provider } from '../Indigo/Store/Provider'

export const App: FC = () => {
  const game = getItem('game', false)

  return (
    <Provider store={new Store()}>
      <MainLayout>
        {(!game || game === 'yacht') && (
          <Yacht />
        )}
        {game === 'indigo' && (
          <Indigo />
        )}
      </MainLayout>
    </Provider>
  )
}
