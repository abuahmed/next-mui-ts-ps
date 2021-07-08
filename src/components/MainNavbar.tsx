import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import ListItemButton, {
  ListItemButtonProps,
} from '@material-ui/core/ListItemButton';
import Stack from '@material-ui/core/Stack';
import { styled } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import clsx from 'clsx';
import React from 'react';
import Link from '../Link';
import Logo from './Logo';
import useStyles from './styles';
import { orange } from '@material-ui/core/colors';

const StyledListItemButton = styled(ListItemButton)<ListItemButtonProps>(
  ({ theme }) => ({
    color: 'white',
    //color: theme.palette.getContrastText(orange[500]),
    // backgroundColor: grey[500],
    // borderColor: grey[600],
    '&:hover': {
      color: 'white',
      // backgroundColor: grey[800],
      // borderColor: grey[900],
    },
  })
);
const MainNavbar = () => {
  const classes = useStyles();
  return (
    <AppBar
      elevation={0}
      className={clsx(classes.backgroundCol, classes.shadow)}
    >
      <Container maxWidth='lg' sx={{ color: 'text.primary' }}>
        <Toolbar sx={{ height: 64, display: 'flex' }}>
          <Link href='/'>
            <Logo />
          </Link>
          <Typography
            variant='h5'
            color='white'
            sx={{ ml: '8px', fontWeight: '900', lineHeight: '1.1' }}
          >
            Pinnacle <br /> Softwares
          </Typography>
          <Box sx={{ flex: '1 1 auto' }} />
          <Stack spacing={4} direction='row'>
            <StyledListItemButton>Home</StyledListItemButton>
            <StyledListItemButton>About</StyledListItemButton>
            <StyledListItemButton>Contact</StyledListItemButton>
            <StyledListItemButton>Services</StyledListItemButton>
            <StyledListItemButton>Testimonials</StyledListItemButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MainNavbar;
