import 'typeface-roboto'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import { store } from './redux/createStore'
import { themeProviderHOC } from './helpers/themeProviderHOC'
import { App } from './components/App/App'
import { LocalStorageMgmnt } from './components/Indigo/Store/LocalStorageMgmnt'
import { PaletteType } from '@material-ui/core'
import { Language } from './redux/reducers/language'

const AppWithProvider = themeProviderHOC(App)

type Keys =
  | 'theme'
  | 'theme-auto'
  | 'language'
  | 'game'
  | 'drawerOpened'

type Values =
  | PaletteType
  | boolean
  | Language
  | 'yacht' | 'indigo'

export const commonSettingsStorage = new LocalStorageMgmnt<Keys, Values>('common-settings')

render(
  <Provider store={store}>
    <AppWithProvider />
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
