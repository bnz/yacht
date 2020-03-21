import styled from '@material-ui/styles/styled'
import { TabsContainerInnerProps, TabsContainerInner } from './TabsContainerInner'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { makeActiveTabSelector } from '../../../redux/selectors/makeActiveTabSelector'

const Wrapper: FC<TabsContainerInnerProps> = ({
  activeTab,
  children,
  ...rest
}) => (
  <div {...rest}>
    <TabsContainerInner activeTab={activeTab}>
      {children}
    </TabsContainerInner>
  </div>
)

const activeTabSelector = makeActiveTabSelector()

export const TabsContainer = styled(
  (props) => {
    const activeTab = useSelector(activeTabSelector)

    return (
      <Wrapper activeTab={activeTab} {...props} />
    )
  }
)(() => ({
  position: 'relative',
  flex: 1,
  overflow: 'hidden',
}))
