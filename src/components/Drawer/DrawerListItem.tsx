import React, { FC } from 'react'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { DrawerListItemStyled } from './DrawerListItemStyled'

interface DrawerListItemProps {
  icon: any
  button?: boolean

  onClick?(): void
}

export const DrawerListItem: FC<DrawerListItemProps> = ({
  icon,
  onClick,
  children,
  button = true,
}) => (
  // @ts-ignore TS2769 TODO wtf??
  <DrawerListItemStyled button={button} onClick={onClick}>
    <ListItemIcon>
      {icon}
    </ListItemIcon>
    {children && (
      <ListItemText primary={children} />
    )}
  </DrawerListItemStyled>
)
