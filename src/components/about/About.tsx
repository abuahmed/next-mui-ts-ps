import { Card, CardContent, CardMedia } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Stack from '@material-ui/core/Stack';
import Typography from '@material-ui/core/Typography';
import React, { ReactElement } from 'react';

interface Props {}

function About({}: Props): ReactElement {
  return (
    <Box sx={{ minHeight: '95vh' }}>
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
            What We Do
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
          <Stack direction='row' spacing={3} color='black'>
            <Card
              elevation={20}
              sx={{ maxWidth: 345 }}
              data-aos='fade-left'
              data-aos-delay='500'
            >
              <CardMedia
                sx={{ height: 300 }}
                image='../../../img/UnderDev.png'
                title='reliable applications'
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  color='orange'
                >
                  Deliver Applications
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                  Business software implementation, development, integration,
                  consulting, and IT training - everything what help in
                  modernizing your company. What can we offer to you?
                </Typography>
              </CardContent>
            </Card>
            <Card
              elevation={20}
              sx={{ maxWidth: 345 }}
              data-aos='zoom-in'
              data-aos-delay='1000'
            >
              <CardMedia
                sx={{ height: 300 }}
                image='../../../img/Websites.png'
                title='more than websites'
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  color='orange'
                >
                  More Than websites
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                  We Build Web sites That Build Your Business. We love creating
                  fast, simple, functional, beautiful & user-friendly websites
                  using the latest web standard technologies.
                </Typography>
              </CardContent>
            </Card>
            <Card
              elevation={20}
              sx={{ maxWidth: 345 }}
              data-aos='fade-right'
              data-aos-delay='1500'
            >
              <CardMedia
                sx={{ height: 300 }}
                image='../../../img/Solutions.png'
                title='solution partner'
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  color='orange'
                >
                  Your Solution Partner
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                  We are not your typical IT Services Provider, We are your
                  solution partner. With sole focus on adding value to
                  customers, we use a right combination of technology and
                  business processes improvements to achieve the goals.
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default About;
