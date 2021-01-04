import React, { FC, ReactNode } from 'react'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { ListItemStyled } from './ListItemStyled'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

interface DrawerListItemProps {
  // TODO: typings!!!
  icon: any
  button?: boolean
  disabled?: boolean
  secondary?: ReactNode

  onClick?(): void
}

export const ListItem: FC<DrawerListItemProps> = ({
  icon,
  onClick,
  children,
  button = true,
  disabled,
  secondary,
}) => (
  // @ts-ignore TS2769 TODO wtf??
  <ListItemStyled button={button} onClick={onClick} disabled={disabled}>
    <ListItemIcon>
      {icon}
    </ListItemIcon>
    {children && (
      <ListItemText primary={children} />
    )}
    {secondary && (
      <ListItemSecondaryAction>
        {secondary}
      </ListItemSecondaryAction>
    )}
  </ListItemStyled>
)
