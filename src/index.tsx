import 'typeface-roboto'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import { store } from './redux/createStore'
import { themeProviderHOC } from './helpers/themeProviderHOC'
import { App } from './components/App/App'

const AppWithProvider = themeProviderHOC(App)

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