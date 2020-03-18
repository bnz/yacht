import React, { FC } from 'react'
import { DicesProps } from './DicesConnected'
import { Dice } from './Dice/Dice'
import { DicesWrapper } from './DicesWrapper/DicesWrapper'

export const Dices: FC<DicesProps> = ({
  dices,
  dicesSelected,
  loading,
  selectDice,
  diceSize,
}) => (
  <DicesWrapper diceSize={diceSize}>
    {dices.map((dice, index) => {
      const selected = dicesSelected.indexOf(index) !== -1
      const onClick = () => {
        if (dice !== -1) {
          selectDice(index)
        }
      }

      return (
        <Dice
          key={index}
          value={dice}
          selected={selected}
          roll={!selected && loading}
          onClick={onClick}
        />
      )
    })}
  </DicesWrapper>
)
