import React, { FC, Fragment } from 'react'
import { PlayersListProps } from './PlayersListConnected'
import { i18n } from '../../../helpers/i18n'
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear'
import PersonIcon from '@material-ui/icons/Person'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import { PlayersListPaper } from './PlayersListPaper'

export const PlayersList: FC<PlayersListProps> = ({ players, removePlayer }) => (
  <PlayersListPaper>
    <List>
      {players.map(({ id, name }, index) => (
        <Fragment key={id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              <span>{i18n('Игрок №')}{index + 1}:&nbsp;</span>
              <span>{name}</span>
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton onClick={() => removePlayer(id)}>
                <ClearIcon fontSize="inherit" />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          {((index + 1) < players.length) && (
            <Divider variant="inset" component="li" />
          )}
        </Fragment>
      ))}
    </List>
  </PlayersListPaper>
)
