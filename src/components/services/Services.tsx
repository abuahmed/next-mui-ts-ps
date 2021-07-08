import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardContent, CardMedia } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Stack from '@material-ui/core/Stack';
import Typography from '@material-ui/core/Typography';
import React, { ReactElement } from 'react';

interface Props {}

function Services({}: Props): ReactElement {
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
            Services
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
          <Grid container>
            <Grid container item xs={12}>
              <Grid
                item
                data-aos='fade-right'
                data-aos-delay='600'
                xs={12}
                sm={6}
              >
                <Stack spacing={0} sx={{ mt: 4, color: '#008000' }}>
                  <Typography
                    sx={{ mt: 1 }}
                    variant='h4'
                    component='h4'
                    fontWeight='900'
                  >
                    Website Development
                  </Typography>
                  <Divider orientation='horizontal' flexItem />
                  <Typography
                    sx={{ mt: 1, lineHeight: '2.5rem', fontSize: '1.5rem' }}
                    variant='body1'
                    component='div'
                    color='black'
                  >
                    We are primarily a specialist web application services
                    company. For customers, we undertake all types of web
                    projects, be it custom web applications, portals, e-commerce
                    sites or web services based applications.
                  </Typography>
                  <Button
                    variant='outlined'
                    sx={{
                      borderRadius: '24px',
                      borderColor: 'orange',
                      width: '240px',
                      color: 'orange',
                    }}
                  >
                    Learn more...{' '}
                  </Button>
                </Stack>
              </Grid>
              <Grid
                item
                data-aos='fade-left'
                data-aos-delay='700'
                xs={12}
                sm={6}
              >
                <img
                  data-aos='fade-right'
                  src='../../img/WebDev.svg'
                  alt='Web Development'
                  width='600px'
                  height='500px'
                />
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid
                item
                data-aos='fade-right'
                data-aos-delay='600'
                xs={12}
                sm={6}
              >
                <img
                  data-aos='fade-right'
                  src='../../img/WebDev.svg'
                  alt='Web Development'
                  width='600px'
                  height='500px'
                />
              </Grid>
              <Grid
                item
                data-aos='fade-left'
                data-aos-delay='700'
                xs={12}
                sm={6}
              >
                <Stack spacing={0} sx={{ mt: 4, color: 'orange' }}>
                  <Typography
                    sx={{ mt: 1 }}
                    variant='h4'
                    component='h4'
                    fontWeight='900'
                  >
                    Mobile App Development
                  </Typography>
                  <Divider orientation='horizontal' flexItem />
                  <Typography
                    sx={{ mt: 1, lineHeight: '2.5rem', fontSize: '1.5rem' }}
                    variant='body1'
                    component='div'
                    color='black'
                  >
                    Take your web app mobile! Rather than creating 20 different
                    versions of your application, we can efficiently deliver
                    applications that work in all major web browsers and on all
                    modern mobile platforms.
                  </Typography>
                  <Button
                    variant='outlined'
                    sx={{
                      borderRadius: '24px',
                      borderColor: '#008000',
                      width: '240px',
                      color: '#008000',
                    }}
                  >
                    Learn more...{' '}
                  </Button>
                </Stack>
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid
                item
                data-aos='fade-right'
                data-aos-delay='600'
                xs={12}
                sm={6}
              >
                <Stack spacing={0} sx={{ mt: 4, color: '#008000' }}>
                  <Typography
                    sx={{ mt: 1 }}
                    variant='h4'
                    component='h4'
                    fontWeight='900'
                  >
                    Desktop App Development
                  </Typography>
                  <Divider orientation='horizontal' flexItem />
                  <Typography
                    sx={{ mt: 1, lineHeight: '2.5rem', fontSize: '1.5rem' }}
                    variant='body1'
                    component='div'
                    color='black'
                  >
                    We love developing tools to help other great people on their
                    daily work. If you need a custom application or tool,
                    contact us, we're the team you've been looking for.
                  </Typography>
                  <Button
                    variant='outlined'
                    sx={{
                      borderRadius: '24px',
                      borderColor: 'orange',
                      width: '240px',
                      color: 'orange',
                    }}
                  >
                    Learn more...{' '}
                  </Button>
                </Stack>
              </Grid>
              <Grid
                item
                data-aos='fade-left'
                data-aos-delay='700'
                xs={12}
                sm={6}
              >
                <img
                  data-aos='fade-right'
                  src='../../img/WebDev.svg'
                  alt='Web Development'
                  width='600px'
                  height='500px'
                />
              </Grid>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

export default Services;
