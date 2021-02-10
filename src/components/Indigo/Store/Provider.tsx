/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, FC, useContext, useEffect } from 'react'
import { iStore } from './Store'

const Context = createContext<iStore | null>(null)

export const Provider: FC<{ store: iStore }> = ({ children, store }) => {
  useEffect(() => store.dispose, [])
  return (
    <Context.Provider value={store}>
      {children}
    </Context.Provider>
  )
}

export const useStore = (): iStore => {
  const store = useContext(Context)
  if (!store) {
    throw new Error('hook must be used within a Provider')
  }
  return store
}
