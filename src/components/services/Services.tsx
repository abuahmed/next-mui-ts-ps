import React, { ReactElement } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Stack from '@material-ui/core/Stack';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core';

interface Props {}

function Services({}: Props): ReactElement {
  const theme = useTheme();
  return (
    <Box sx={{ mt: -5 }}>
      <Container maxWidth='lg'>
        <Stack alignItems='center' sx={{ padding: '24px' }}>
          <Typography
            data-aos='zoom-out'
            variant='h2'
            color={theme.palette.secondary.main}
            noWrap
          >
            Services
          </Typography>
          <Divider
            data-aos='zoom-in'
            orientation='horizontal'
            sx={{
              width: '320px',
              backgroundColor: theme.palette.primary.main,
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
                    sx={{ mt: 1 }}
                    component='div'
                    variant='body1'
                    color='text.secondary'
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
                    <Typography variant='body1'>Learn more...</Typography>
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
                  width='100%'
                  height='100%'
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
                  width='100%'
                  height='100%'
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
                    sx={{ mt: 1 }}
                    component='div'
                    variant='body1'
                    color='text.secondary'
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
                    <Typography variant='body1'>Learn more...</Typography>
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
                    sx={{ mt: 1 }}
                    component='div'
                    variant='body1'
                    color='text.secondary'
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
                    <Typography variant='body1'>Learn more...</Typography>
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
                  width='100%'
                  height='100%'
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
