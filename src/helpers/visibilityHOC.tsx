import React, { ComponentType, FC } from 'react'

export interface VisibilityHOCProps {
  hidden: boolean
}

/**
 * @deprecated
 */
export const visibilityHOC = (Component: any /*<--TODO*/): FC<VisibilityHOCProps> => ({ hidden, ...restProps }) => {

  if (hidden) {
    return null
  }

  return (
    <Component {...restProps} />
  )
}


export const visibilityHOC_2 = <T extends {}>(
  WrappedComponent: ComponentType<T>,
): FC<T & VisibilityHOCProps> => ({
  hidden,
  ...restProps
}) => {

  if (hidden) {
    return null
  }

  return (
    <WrappedComponent {...restProps as T} />
  )
}
