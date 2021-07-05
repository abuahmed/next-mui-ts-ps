import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import ProTip from '../src/ProTip';
// import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function Index() {
  return (
    <Container maxWidth='sm' sx={{ color: 'text.primary' }}>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography variant='h4' component='h1' gutterBottom>
            Welcome to <br />
            <i>Pinnacle Software</i>
          </Typography>

          <img height='400px' src='../img/UnderDev.png' alt='underCon' />
        </Box>
        <Copyright />
      </Box>
    </Container>
  );
}
