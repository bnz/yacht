import styled from '@material-ui/styles/styled'
import React from 'react'
import { Themed } from '../../../helpers/types'
import { ActiveTab } from '../../../redux/reducers/activeTab'

export interface TabsContainerInnerProps {
  activeTab?: ActiveTab
}

const fn = <T extends {}>(...propsToExclude: Array<keyof T>) => (restProps: any) => {
  const rest = Object.assign({}, restProps)
  Object.keys(rest).forEach((key) => {
    if (propsToExclude.indexOf(key as keyof T) !== -1) {
      delete rest[key]
    }
  })

  return (
    <div {...rest} />
  )
}

export const TabsContainerInner = styled(
  fn<TabsContainerInnerProps>('activeTab'),
)(({
  theme: { transitions: { duration: { standard } }, drawerTabsCount },
  activeTab = 0,
}: Themed<TabsContainerInnerProps>) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  overflow: 'hidden',
  width: `${100 * drawerTabsCount}%`,
  display: 'flex',
  flexDirection: 'row',
  marginLeft: `-${100 * activeTab}%`,
  transitionDuration: `${standard}ms`,
}))
