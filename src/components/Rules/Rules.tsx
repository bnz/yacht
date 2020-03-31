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
          <TableCell>{i18n('combination.1')}</TableCell>
          <TableCell>{i18n('combination.1.title')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{i18n('combination.2')}</TableCell>
          <TableCell>{i18n('combination.2.title')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{i18n('combination.3')}</TableCell>
          <TableCell>{i18n('combination.3.title')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{i18n('combination.4')}</TableCell>
          <TableCell>{i18n('combination.4.title')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{i18n('combination.5')}</TableCell>
          <TableCell>{i18n('combination.5.title')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{i18n('combination.6')}</TableCell>
          <TableCell>{i18n('combination.6.title')}</TableCell>
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
          <TableCellNoWrap>{i18n('combination.equal_4')}</TableCellNoWrap>
          <TableCell>{i18n('combination.equal_4.title')}</TableCell>
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
          <TableCellNoWrap>{i18n('combination.theYacht')}</TableCellNoWrap>
          <TableCell>{i18n('combination.theYacht.title')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCellNoWrap>{i18n('combination.chance')}</TableCellNoWrap>
          <TableCell>{i18n('combination.chance.title')}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </>
)
