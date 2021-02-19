import React, { FC } from 'react'
import { SVG } from '../SVG'
import { gateways, GatewaysBgIds, GatewaysIds, withLine } from '../Ids'
import { observer } from 'mobx-react'
import { useStore } from '../Store/Provider'

interface GatewayProps {
  dataId: number
}

export const Gateway: FC<GatewayProps> = observer(({ dataId }) => (

  <>
    {useStore().isGateway(dataId) && (
      <SVG
        uses={[withLine[dataId as GatewaysBgIds], 'token-place']}
        fill={gateways[Object.keys(useStore().players).length][dataId as GatewaysIds]}
      />
    )}
  </>
))
