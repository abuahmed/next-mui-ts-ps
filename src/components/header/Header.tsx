import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import useStyles from '../header/styles';

export default function Header() {
  const classes = useStyles();
  return (
    <Box className={classes.socialBackground}>
      <Container maxWidth='sm' sx={{ color: 'text.primary' }}>
        <Box>
          <Typography variant='h4' component='h1' gutterBottom align='center'>
            Welcome to <br />
            <i>Pinnacle Software</i>
          </Typography>

          <img height='400px' src='../img/UnderDev.png' alt='underCon' />
        </Box>
      </Container>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#ffffff'
          fill-opacity='1'
          d='M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
    </Box>
  );
}
