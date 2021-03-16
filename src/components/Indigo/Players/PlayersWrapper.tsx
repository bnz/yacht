/*tslint:disable:no-magic-numbers*/
import styled from '@material-ui/styles/styled'
import { Themed } from '../../../helpers/types'
import React, { FC } from 'react'

const PlayersWrapperComponent: FC = (props) => <div {...props} />

PlayersWrapperComponent.displayName = 'PlayersWrapper'

export const PlayersWrapper = styled(PlayersWrapperComponent)(({
  theme: { spacing },
}: Themed) => ({
  margin: '0 auto',
  padding: spacing(3, 0),
  display: 'flex',
  flexWrap: 'wrap',
}))
