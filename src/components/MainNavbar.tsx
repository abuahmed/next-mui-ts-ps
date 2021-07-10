import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Stack from '@material-ui/core/Stack';
import React from 'react';
import Link from '../Link';
import Logo from './Logo';
import { GradientBackground, ShadowStyled } from '../styles/layoutStyled';
import { StyledListItemButton } from '../styles/componentStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHamburger } from '@fortawesome/free-solid-svg-icons';

const MainNavbar = () => {
  return (
    <AppBar>
      <GradientBackground>
        <ShadowStyled>
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
              <Stack
                spacing={4}
                sx={{ display: { sm: 'inline-flex', xs: 'none' } }}
                direction='row'
              >
                <StyledListItemButton>Home</StyledListItemButton>
                <StyledListItemButton>Services</StyledListItemButton>
                <StyledListItemButton>About</StyledListItemButton>
                <StyledListItemButton>Contact</StyledListItemButton>
              </Stack>

              <Stack sx={{ mr: 2, display: { sm: 'none', xs: 'block' } }}>
                <FontAwesomeIcon icon={faBars} />
              </Stack>
            </Toolbar>
          </Container>
        </ShadowStyled>
      </GradientBackground>
    </AppBar>
  );
};

export default MainNavbar;
