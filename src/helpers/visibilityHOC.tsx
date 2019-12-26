import React, { FC } from 'react'

export interface VisibilityHOCProps {
  hidden: boolean
}

export const visibilityHOC = (Component: any /*<--TODO*/): FC<VisibilityHOCProps> => ({ hidden, ...restProps }) => {

  if (hidden) {
    return null
  }

  return (
    <Component {...restProps} />
  )
}
