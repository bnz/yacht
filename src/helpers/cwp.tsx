import React from 'react'

/**
 * Component Without Props
 */
export const cwp = (
  // TODO: typings!!!
  Component: any = 'div',
) => <T extends {}>(
  ...propsToExclude: Array<keyof T>
) => (
  // TODO: typings!!!
  restProps: any,
) => {
  const rest = { ...restProps }

  Object.keys(rest).forEach((key) => {
    if (propsToExclude.indexOf(key as keyof T) !== -1) {
      delete rest[key]
    }
  })

  return (
    <Component {...rest} />
  )
}
