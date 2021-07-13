import {
  faPaperPlane,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Stack from '@material-ui/core/Stack';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { ReactElement } from 'react';

interface Props {}

function GetStarted({}: Props): ReactElement {
  return (
    <Box
      id='getstarted'
      sx={{
        pt: '64px',
        //height: '400px',
        // background: 'transparent',
        background: 'linear-gradient(180deg, #fff 400px, #ffa500 0%)',
      }}
    >
      <Container maxWidth='lg'>
        <Stack alignItems='center'>
          <Typography data-aos='fade-up' variant='h2' color='black' noWrap>
            Get Started
          </Typography>
          <Divider
            data-aos='zoom-in'
            orientation='horizontal'
            sx={{
              width: { xs: '220px', sm: '400px' },
              backgroundColor: '#008000',
              height: '4px',
              marginBottom: '10px',
            }}
          ></Divider>
          <Grid container>
            <Grid
              item
              data-aos='fade-up'
              data-aos-delay='60'
              sm={6}
              xs={12}
              sx={{ pt: 2 }}
            >
              <Typography variant='body1' color='#000' textAlign='justify'>
                The future of business is online, and whether you’re starting
                out as a new business owner, or an established business looking
                to pivot into the online world, there’s never been a better time
                to bring your business online then now. Why not take the first
                step today?
              </Typography>
            </Grid>
            <Grid
              item
              data-aos='fade-up'
              data-aos-delay='50'
              sm={6}
              xs={12}
              sx={{ pb: 8 }}
            >
              <Stack
                color='#008000'
                sx={{ backgroundColor: '#fff', p: 3, borderRadius: 2 }}
              >
                <Typography variant='h4' fontWeight='900' noWrap>
                  <FontAwesomeIcon icon={faProjectDiagram} />
                  &nbsp;Start your project
                </Typography>

                <TextField
                  id='name'
                  label='Name'
                  variant='outlined'
                  margin='normal'
                />
                <TextField
                  id='email'
                  label='Email or Phone'
                  variant='outlined'
                  margin='normal'
                />
                <TextField
                  id='message'
                  label='Message'
                  variant='outlined'
                  multiline
                  rows={6}
                  margin='normal'
                />
                <Button
                  variant='contained'
                  endIcon={<FontAwesomeIcon icon={faPaperPlane} />}
                >
                  Submit
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

export default GetStarted;
