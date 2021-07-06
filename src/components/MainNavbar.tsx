import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import React from 'react';
import Link from '../Link';
import Logo from './Logo';
import useStyles from './styles';

const MainNavbar = () => {
  const classes = useStyles();
  return (
    <AppBar
      elevation={0}
      className={clsx(classes.backgroundCol, classes.shadow)}
    >
      <Container maxWidth='sm' sx={{ color: 'text.primary' }}>
        <Toolbar sx={{ height: 64 }}>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MainNavbar;
