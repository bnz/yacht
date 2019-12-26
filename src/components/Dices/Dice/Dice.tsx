import React, { FC } from 'react'
import { DiceDot } from './DiceDot'
import { DiceWrapper } from './DiceWrapper'
import { DiceInner } from './DiceInner'

const dots: { [key: number]: number[] } = {
  1: [5],
  2: [1, 9],
  3: [1, 5, 9],
  4: [1, 3, 7, 9],
  5: [1, 3, 5, 7, 9],
  6: [1, 3, 4, 6, 7, 9],
}

interface DiceProps {
  value: number
  roll?: boolean
  selected?: boolean

  onClick?(): void
}

const array9 = [...window.Array(9).keys()]

export const Dice: FC<DiceProps> = ({ value, roll, selected, onClick }) => (
  <DiceWrapper onClick={onClick}>
    <DiceInner roll={roll} selected={selected}>
      {array9.map((i) => (
        <DiceDot
          key={i}
          roll={roll}
          filled={dots[value] && dots[value].indexOf(i + 1) !== -1}
        />
      ))}
    </DiceInner>
  </DiceWrapper>
)
