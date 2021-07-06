import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Stack from '@material-ui/core/Stack';
import { styled } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faGlobe,
  faMobile,
  faMobileAlt,
  faShoppingBag,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import useStyles from '../header/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemButton from '@material-ui/core/ListItemButton';
import { LightBulbIcon } from '../../ProTip';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: 'white',
  background: 'transparent',
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.socialBackground}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#fff'
            fill-opacity='1'
            d='M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
          ></path>
        </svg>
        <Container maxWidth='sm'>
          <Stack
            direction='row'
            spacing={3}
            sx={{ fontSize: '3rem' }}
            justifyContent='center'
            color='white'
          >
            <Link href='#' color='inherit'>
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link href='#' color='inherit'>
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link href='#' color='inherit'>
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link href='#' color='inherit'>
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </Stack>
        </Container>
      </Box>
      <Box
        className={classes.socialBackground}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <Container maxWidth='lg' color='white'>
          <Grid container direction='row' spacing={1}>
            <Grid item lg={6} sm={12} xl={6} xs={12}>
              <Stack spacing={0} sx={{ mt: 4 }}>
                <Item>
                  <Typography sx={{ mt: 1 }} variant='h6' component='div'>
                    Contact
                  </Typography>
                  <Divider orientation='horizontal' flexItem />

                  <Typography sx={{ mt: 1 }} variant='body1' component='div'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem ex obcaecati blanditiis reprehenderit ab mollitia
                    voluptatem consectetur?
                  </Typography>
                  <MuiLink
                    color='inherit'
                    href='mailto:contact@pinnasofts.com'
                    sx={{ textDecoration: 'none', fontSize: '1.5rem' }}
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                    &nbsp;contact@pinnasofts.com
                  </MuiLink>
                </Item>
              </Stack>
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Stack spacing={0} sx={{ mt: 4 }}>
                <Item>
                  <Typography sx={{ mt: 1 }} variant='h6' component='div'>
                    Services
                  </Typography>
                  <Divider orientation='horizontal' flexItem />
                  <List>
                    <ListItemButton component='a' href='#customized-list'>
                      <ListItemIcon sx={{ minWidth: '24px' }}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                      </ListItemIcon>
                      <ListItemText primary='E-commerce Solutions' />
                    </ListItemButton>

                    <ListItemButton component='a' href='#customized-list'>
                      <ListItemIcon sx={{ minWidth: '24px' }}>
                        <FontAwesomeIcon icon={faMobile} />
                      </ListItemIcon>
                      <ListItemText primary='Mobile Solutions' />
                    </ListItemButton>

                    <ListItemButton component='a' href='#customized-list'>
                      <ListItemIcon sx={{ minWidth: '24px' }}>
                        <FontAwesomeIcon icon={faGlobe} />
                      </ListItemIcon>
                      <ListItemText primary='Website Solutions' />
                    </ListItemButton>

                    <ListItemButton component='a' href='#customized-list'>
                      <ListItemIcon sx={{ minWidth: '24px' }}>
                        <FontAwesomeIcon icon={faShoppingBag} />
                      </ListItemIcon>
                      <ListItemText primary='Marketing Solutions' />
                    </ListItemButton>
                  </List>
                </Item>
              </Stack>
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Stack spacing={0} sx={{ mt: 4 }}>
                <Item>
                  <Typography sx={{ mt: 1 }} variant='h6' component='div'>
                    Products
                  </Typography>
                  <Divider orientation='horizontal' flexItem />
                  <List>
                    <ListItemButton component='a' href='#customized-list'>
                      <ListItemIcon sx={{ minWidth: '24px' }}>
                        <LightBulbIcon />
                      </ListItemIcon>
                      <ListItemText primary='Pinna-Recruitment' />
                    </ListItemButton>

                    <ListItemButton component='a' href='#customized-list'>
                      <ListItemIcon sx={{ minWidth: '24px' }}>
                        <LightBulbIcon />
                      </ListItemIcon>
                      <ListItemText primary='Pinna-Rental' />
                    </ListItemButton>

                    <ListItemButton component='a' href='#customized-list'>
                      <ListItemIcon sx={{ minWidth: '24px' }}>
                        <LightBulbIcon />
                      </ListItemIcon>
                      <ListItemText primary='Pinna-CRM' />
                    </ListItemButton>

                    <ListItemButton component='a' href='#customized-list'>
                      <ListItemIcon sx={{ minWidth: '24px' }}>
                        <LightBulbIcon />
                      </ListItemIcon>
                      <ListItemText primary='Pinna-Stock' />
                    </ListItemButton>
                  </List>
                </Item>
              </Stack>
            </Grid>
          </Grid>
          <Box>
            <Typography variant='body2' color='white' align='center'>
              <>
                {'Copyright © '}
                <MuiLink
                  color='inherit'
                  href='https://pinnasofts.com/'
                  sx={{ textDecoration: 'none' }}
                >
                  PinnaSofts PLC
                </MuiLink>{' '}
                {new Date().getFullYear()}.
              </>
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
