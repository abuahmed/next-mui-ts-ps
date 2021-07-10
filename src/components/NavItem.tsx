import React, { ReactNode } from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItem } from '@material-ui/core';

interface Props {
  href: string;
  title: string;
  icon: ReactNode;
  onClick: () => void;
}
const voidFunction = () => {};

const NavItem = ({ href, icon, title, onClick, ...rest }: Props) => {
  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        py: 0,
      }}
      onClick={!href ? onClick : voidFunction}
      {...rest}
    >
      {/* <Button
        component={Link}
        sx={{
          color: 'text.secondary',
          fontWeight: 'medium',
          justifyContent: 'flex-start',
          letterSpacing: 0,
          py: 1.25,
          textTransform: 'none',
          width: '100%',
          ...(active && {
            color: 'primary.main',
          }),
          '& svg': {
            mr: 1,
          },
        }}
        to={href}
      > */}
      <ListItemIcon color='text.secondary'>{icon}</ListItemIcon>
      <ListItemText primary={title} />
      {/* </Button> */}
    </ListItem>
  );
};

export default NavItem;
