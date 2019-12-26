import React, { FC } from 'react'
import { i18n } from '../../helpers/i18n'
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
      {i18n('Яхта — народная игра в кости, напоминающая Покер на костях, предшественник игры Yahtzee.')}
    </Typography>
    <Heading>
      {i18n('Ход игры')}
    </Heading>
    <Typography paragraph>
      {i18n('В яхту можно играть в одиночку или с любым количеством противников. Игроки ходят по очереди, бросая одновременно пять костей. После каждого броска игрок выбирает, какие кости оставить, а какие перебросить. Игрок может перебросить любое количество (включая все пять) костей два раза за ход. В каждом ходе необходимо записать очки за одну из возможных комбинаций, если подходящих не осталось, то нужно написать 0 за любую. Каждую комбинацию можно записать только один раз. Игрок с наибольшим количеством очков в конце игры побеждает.')}
    </Typography>
    <Heading>
      {i18n('Подсчёт очков')}
    </Heading>
    <Typography paragraph>{i18n('Очки записываются за следующие комбинации:')}</Typography>
    <Typography paragraph>{i18n('Верхняя секция:')}</Typography>
    <Table size="small">
      <TableBody>
        <TableRow>
          <TableCell>{i18n('Единицы')}</TableCell>
          <TableCell>{i18n('Ones')}</TableCell>
          <TableCell>{i18n('Сумма всех костей, на которых выпали 1.')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{i18n('Двойки')}</TableCell>
          <TableCell>{i18n('Twos')}</TableCell>
          <TableCell>{i18n('Сумма всех костей, на которых выпали 2.')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{i18n('Тройки')}</TableCell>
          <TableCell>{i18n('Threes')}</TableCell>
          <TableCell>{i18n('Сумма всех костей, на которых выпали 3.')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{i18n('Четверки')}</TableCell>
          <TableCell>{i18n('Fours')}</TableCell>
          <TableCell>{i18n('Сумма всех костей, на которых выпали 4.')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{i18n('Пятерки')}</TableCell>
          <TableCell>{i18n('Fives')}</TableCell>
          <TableCell>{i18n('Сумма всех костей, на которых выпали 5.')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{i18n('Шестёрки')}</TableCell>
          <TableCell>{i18n('Sixes')}</TableCell>
          <TableCell>{i18n('Сумма всех костей, на которых выпали 6.')}</TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <br/>

    <Paragraph>
      {i18n('Если игрок набирает по крайней мере 63 очков (по три кости с каждым числом) в верхней секции, он получает бонус в виде 35 очков.')}
    </Paragraph>
    <Paragraph>
      {i18n('Нижняя секция:')}
    </Paragraph>
    <Table size="small">
      <TableBody>
        <TableRow>
          <TableCellNoWrap>{i18n('Сэт')}</TableCellNoWrap>
          <TableCellNoWrap>{i18n('Three of a Kind')}</TableCellNoWrap>
          <TableCell>{i18n('Три кости, на которых выпали одинаковые значения. В очки записывается сумма этих трёх костей.')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCellNoWrap>{i18n('Карэ')}</TableCellNoWrap>
          <TableCellNoWrap>{i18n('Four of a Kind')}</TableCellNoWrap>
          <TableCell>{i18n('Четыре кости, на которых выпали одинаковые значения. В очки записывается сумма этих четырёх костей.')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCellNoWrap>{i18n('Младший стрит')}</TableCellNoWrap>
          <TableCellNoWrap>{i18n('Small Straight')}</TableCellNoWrap>
          <TableCell>{i18n('Любые четыре последовательных числа (1, 2, 3, 4 или 2, 3, 4, 5 или 3, 4, 5, 6). Записывается 25 очков.')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCellNoWrap>{i18n('Старший стрит')}</TableCellNoWrap>
          <TableCellNoWrap>{i18n('Big Straight')}</TableCellNoWrap>
          <TableCell>{i18n('Пять последовательных чисел (1, 2, 3, 4, 5 или 2, 3, 4, 5, 6). Записывается 30 очков.')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCellNoWrap>{i18n('Фул Хаус')}</TableCellNoWrap>
          <TableCellNoWrap>{i18n('Full House')}</TableCellNoWrap>
          <TableCell>{i18n('Пара и тройка любых одинаковых костей. Записывается 30 очков.')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCellNoWrap>{i18n('Яхта')}</TableCellNoWrap>
          <TableCellNoWrap>{i18n('The Yacht')}</TableCellNoWrap>
          <TableCell>{i18n('Пять костей, на которых выпали одинаковые значения. Записывается 50 очков.')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCellNoWrap>{i18n('Шанс')}</TableCellNoWrap>
          <TableCellNoWrap>{i18n('Chance')}</TableCellNoWrap>
          <TableCell>{i18n('Записывается сумма всех выпавших костей.')}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </>
)
