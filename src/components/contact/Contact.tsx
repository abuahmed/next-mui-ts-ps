import { Card, CardContent, CardMedia } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Stack from '@material-ui/core/Stack';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { ReactElement } from 'react';

interface Props {}

function Contact({}: Props): ReactElement {
  return (
    <Box>
      <Container maxWidth='lg'>
        <Stack alignItems='center' sx={{ padding: '24px' }}>
          <Typography
            data-aos='zoom-out'
            variant='h2'
            fontWeight='900'
            fontSize='3.5rem'
            color='orange'
            noWrap
          >
            Get Started
          </Typography>
          <Divider
            data-aos='zoom-in'
            orientation='horizontal'
            sx={{
              width: '320px',
              backgroundColor: '#008000',
              height: '4px',
              marginBottom: '10px',
            }}
          ></Divider>
          <Grid container xs={12}>
            <Grid
              item
              data-aos='fade-right'
              data-aos-delay='600'
              sm={6}
              xs={12}
              sx={{ padding: 2 }}
            >
              <Typography variant='body2' fontSize='15px' lineHeight='2rem'>
                The future of business is online, and whether you’re starting
                out as a new business owner, or an established business looking
                to pivot into the online world, there’s never been a better time
                to bring your business online then now. Why not take the first
                step today?
              </Typography>
            </Grid>
            <Grid
              item
              data-aos='fade-left'
              data-aos-delay='700'
              sm={6}
              xs={12}
              sx={{ padding: 2 }}
            >
              <Stack>
                <Typography
                  data-aos='zoom-out'
                  variant='h6'
                  fontWeight='700'
                  fontSize='2.5rem'
                  color='#008000'
                  noWrap
                >
                  Start Project
                </Typography>

                <TextField
                  id='standard-basic'
                  label='Name'
                  variant='outlined'
                  margin='normal'
                />
                <TextField
                  id='standard-basic'
                  label='Email or Phone'
                  variant='outlined'
                  margin='normal'
                />
                <TextField
                  id='standard-basic'
                  label='Message'
                  variant='outlined'
                  multiline
                  rows={6}
                  margin='normal'
                />
                <Button variant='contained'>Submit</Button>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

export default Contact;
