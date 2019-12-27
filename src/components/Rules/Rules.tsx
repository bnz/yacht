import React, { FC } from 'react'
import { i18n } from '../../helpers/i18n/i18n'
import { Heading } from './Heading'
import { Paragraph } from './Paragraph'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { TableCellNoWrap } from './TableCellNoWrap'
import Typography from '@material-ui/core/Typography'

export const Rules: FC = () => (
  <>
    <Typography paragraph>
      {i18n('help.intro')}
    </Typography>
    <Heading>
      {i18n('help.gameplay.header')}
    </Heading>
    <Typography paragraph>
      {i18n('help.gameplay.text')}
    </Typography>
    <Heading>
      {i18n('help.scoring.header')}
    </Heading>
    <Typography paragraph>{i18n('help.scoring.text')}</Typography>
    <Typography paragraph>{i18n('help.topSection')}</Typography>
    <Table size="small">
      <TableBody>
        <TableRow>
          <TableCell>{i18n('combination.ones')}</TableCell>
          <TableCell>{i18n('combination.ones.title')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{i18n('combination.twos')}</TableCell>
          <TableCell>{i18n('combination.twos.title')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{i18n('combination.threes')}</TableCell>
          <TableCell>{i18n('combination.threes.title')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{i18n('combination.fours')}</TableCell>
          <TableCell>{i18n('combination.fours.title')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{i18n('combination.fives')}</TableCell>
          <TableCell>{i18n('combination.fives.title')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{i18n('combination.sixes')}</TableCell>
          <TableCell>{i18n('combination.sixes.title')}</TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <br/>

    <Paragraph>
      {i18n('help.topSection.tip')}
    </Paragraph>

    <br/>

    <Paragraph>
      {i18n('help.bottomSection')}
    </Paragraph>
    <Table size="small">
      <TableBody>
        <TableRow>
          <TableCellNoWrap>{i18n('combination.threeOfAKind')}</TableCellNoWrap>
          <TableCell>{i18n('combination.threeOfAKind.title')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCellNoWrap>{i18n('combination.fourOfAKind')}</TableCellNoWrap>
          <TableCell>{i18n('combination.fourOfAKind.title')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCellNoWrap>{i18n('combination.smallStraight')}</TableCellNoWrap>
          <TableCell>{i18n('combination.smallStraight.title')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCellNoWrap>{i18n('combination.bigStraight')}</TableCellNoWrap>
          <TableCell>{i18n('combination.bigStraight.title')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCellNoWrap>{i18n('combination.fullHouse')}</TableCellNoWrap>
          <TableCell>{i18n('combination.fullHouse.title')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCellNoWrap>{i18n('combination.yacht')}</TableCellNoWrap>
          <TableCell>{i18n('combination.yacht.title')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCellNoWrap>{i18n('combination.chance')}</TableCellNoWrap>
          <TableCell>{i18n('combination.chance.title')}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </>
)
