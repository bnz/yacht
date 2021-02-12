/* eslint-disable react-hooks/exhaustive-deps */
import styled from '@material-ui/styles/styled'
import React, { FC, useCallback } from 'react'
import IconButton from '@material-ui/core/IconButton'
import SentimentVerySatisfiedTwoToneIcon from '@material-ui/icons/SentimentVerySatisfiedTwoTone'
import { StyledProps } from '@material-ui/core/styles'
import { Themed } from '../../helpers/types'
import { observer } from 'mobx-react'
import { useStore } from '../Indigo/Store/Provider'
import { runInAction } from 'mobx'

const SmileButton: FC<StyledProps> = observer(({ className }) => {
  const store = useStore()

  return (
    <IconButton
      edge="end"
      color="inherit"
      className={className}
      onClick={
        useCallback(() => {
          runInAction(() => {
            store.helpingToolVisible = !store.helpingToolVisible
            localStorage.setItem('indigo-helpingToolVisible', `${store.helpingToolVisible}`)
          })
        }, [])
      }
    >
      <SentimentVerySatisfiedTwoToneIcon fontSize="large" />
    </IconButton>
  )
})

export const SmileButtonStyled = styled(SmileButton)(({
  theme: { spacing, palette: { type, common: { black, white } } },
}: Themed) => ({
  marginLeft: spacing(1),
  color: type === 'dark' ? white : black,
  zIndex: 1,
}))
