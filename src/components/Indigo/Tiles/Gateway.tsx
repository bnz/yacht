import React, { FC } from 'react'
import { SVG } from '../SVG'
import { GatewaysIds } from '../Ids'
import { observer } from 'mobx-react'
import { useStore } from '../Store/Provider'

interface GatewayProps {
  id: GatewaysIds
}

export const Gateway: FC<GatewayProps> = observer(({ id }) => {
  const store = useStore()

  return (
    <SVG
      uses={[store.decoratorGateway[id], 'token-place']}
      fill={store.gatewaysColors[id]}
    />
  )
})
