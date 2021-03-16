/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, FC, useCallback, useState } from 'react'
import { useStore } from './Store/HexProvider'
import { observer } from 'mobx-react'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports'
import InfoIcon from '@material-ui/icons/Info'
import RotateRightIcon from '@material-ui/icons/RotateRight'
import RotateLeftIcon from '@material-ui/icons/RotateLeft'
import ReplayIcon from '@material-ui/icons/Replay'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import { GamePhase } from './types'
import { BottomNavigationStyled } from './BottomNavigationStyled'
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon/SvgIcon'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'

const props = (Icon: OverridableComponent<SvgIconTypeMap>) => ({
  style: {
    minWidth: 60,
    maxWidth: 100,
  },
  icon: <Icon fontSize="default" />,
})

export const Actions: FC = observer(() => {
  const hexStore = useStore()
  const phase = hexStore.gamePhase.phase
  const rotate = useCallback(hexStore.toggleOrientation, [])
  const restart = useCallback(hexStore.restart, [])
  const startGame = useCallback(hexStore.startGame, [])
  const goToPreGame = useCallback(hexStore.gamePhase.goToPreGame, [])
  const goToPlayersSelection = useCallback(hexStore.gamePhase.goToPlayersSelection, [])
  const [value, setValue] = useState(phase)
  const handleChange = useCallback((event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }, [])

  if (phase === GamePhase.PRE_GAME
    || phase === GamePhase.PLAYERS_SELECTION
  ) {
    return null
  }

  return (
    <BottomNavigationStyled showLabels value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Intro"
        value={0}
        {...props(InfoIcon)}
        onClick={goToPreGame}
      />
      <BottomNavigationAction
        label="Players"
        value={1}
        {...props(PeopleAltIcon)}
        // disabled={phase === GamePhase.PLAYERS_SELECTION}
        onClick={goToPlayersSelection}
      />
      <BottomNavigationAction
        label="Game"
        value={2}
        {...props(SportsEsportsIcon)}
        disabled={phase === GamePhase.IN_PLAY}
        onClick={startGame}
      />
      {phase === GamePhase.IN_PLAY && (
        <BottomNavigationAction label="Rotate" {...props(hexStore.isPointy ? RotateRightIcon : RotateLeftIcon)} onClick={rotate} />
      )}
      {phase === GamePhase.IN_PLAY && (
        <BottomNavigationAction label="Clear" {...props(DeleteForeverIcon)} onClick={restart} />
      )}
      {phase === GamePhase.IN_PLAY && (
        <BottomNavigationAction label="Restart" {...props(ReplayIcon)} />
      )}
    </BottomNavigationStyled>
  )
})
