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
  faCartArrowDown,
  faCartPlus,
  faEnvelope,
  faEnvelopeOpen,
  faGlobe,
  faLocationArrow,
  faMobile,
  faMobileAlt,
  faPeopleArrows,
  faPhone,
  faRestroom,
  faSearchLocation,
  faShoppingBag,
  faShoppingCart,
  faStore,
  faTablet,
  faUserPlus,
  faWarehouse,
} from '@fortawesome/free-solid-svg-icons';
import {
  faAppStore,
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import useStyles from '../header/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemButton from '@material-ui/core/ListItemButton';
import { LightBulbIcon } from '../../ProTip';
import Link from '@material-ui/core/Link';

const Item = styled('div')(({ theme }) => ({
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
      <Box className={classes.footerBackground}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#fff'
            fillOpacity='1'
            d='M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
          ></path>
        </svg>
        <Container maxWidth='sm'>
          <Stack
            data-aos='zoom-in'
            data-aos-delay='500'
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
        className={classes.footerBackground}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <Container maxWidth='lg' color='white'>
          <Paper elevation={5} sx={{ background: 'transparent' }}>
            <Grid container direction='row' spacing={1}>
              <Grid
                item
                data-aos='fade-right'
                data-aos-delay='500'
                lg={6}
                sm={4}
                xl={6}
                xs={12}
              >
                <Stack spacing={0} sx={{ mt: 4 }}>
                  <Item>
                    <Typography sx={{ mt: 1 }} variant='h6' component='div'>
                      Contact
                    </Typography>
                    <Divider orientation='horizontal' flexItem />
                    <List sx={{ fontSize: '2rem' }}>
                      <ListItemButton component='a' href='#customized-list'>
                        <ListItemIcon>
                          <FontAwesomeIcon icon={faPhone} />
                        </ListItemIcon>
                        <ListItemText
                          primary='+251-945-004-259'
                          secondary='Mon-Fri 9am-6pm'
                          primaryTypographyProps={{
                            fontWeight: '700',
                            variant: 'h6',
                          }}
                          secondaryTypographyProps={{
                            fontWeight: '500',
                            variant: 'h6',
                          }}
                        />
                      </ListItemButton>

                      <ListItemButton
                        component='a'
                        href='mailto:contact@pinnasofts.com'
                      >
                        <ListItemIcon>
                          <FontAwesomeIcon icon={faEnvelopeOpen} />
                        </ListItemIcon>
                        <ListItemText
                          primary='contact@pinnasofts.com'
                          secondary='Online Support'
                          primaryTypographyProps={{
                            fontWeight: '700',
                            variant: 'h6',
                          }}
                          secondaryTypographyProps={{
                            fontWeight: '500',
                            variant: 'h6',
                          }}
                        />
                      </ListItemButton>

                      <ListItemButton component='a' href='#customized-list'>
                        <ListItemIcon>
                          <FontAwesomeIcon icon={faLocationArrow} />
                        </ListItemIcon>
                        <ListItemText
                          primary='Addis Ababa,Ethiopia'
                          secondary='Bethel Street, AA'
                          primaryTypographyProps={{
                            fontWeight: '700',
                            variant: 'h6',
                          }}
                          secondaryTypographyProps={{
                            fontWeight: '500',
                            variant: 'h6',
                          }}
                        />
                      </ListItemButton>
                    </List>
                  </Item>
                </Stack>
              </Grid>
              <Grid
                item
                data-aos='fade-up'
                data-aos-delay='1000'
                lg={3}
                sm={4}
                xl={3}
                xs={12}
              >
                <Stack spacing={0} sx={{ mt: 4 }}>
                  <Item>
                    <Typography sx={{ mt: 1 }} variant='h6' component='div'>
                      Services
                    </Typography>
                    <Divider orientation='horizontal' flexItem />
                    <List sx={{ fontSize: '2rem' }}>
                      <ListItemButton component='a' href='#customized-list'>
                        <ListItemIcon>
                          <FontAwesomeIcon icon={faCartArrowDown} />
                        </ListItemIcon>
                        <ListItemText
                          primary='E-commerce Solutions'
                          primaryTypographyProps={{
                            fontWeight: '700',
                            variant: 'h6',
                          }}
                        />
                      </ListItemButton>

                      <ListItemButton component='a' href='#customized-list'>
                        <ListItemIcon>
                          <FontAwesomeIcon icon={faTablet} />
                        </ListItemIcon>
                        <ListItemText
                          primary='Mobile Solutions'
                          primaryTypographyProps={{
                            fontWeight: '700',
                            variant: 'h6',
                          }}
                        />
                      </ListItemButton>

                      <ListItemButton component='a' href='#customized-list'>
                        <ListItemIcon>
                          <FontAwesomeIcon icon={faGlobe} />
                        </ListItemIcon>
                        <ListItemText
                          primary='Website Solutions'
                          primaryTypographyProps={{
                            fontWeight: '700',
                            variant: 'h6',
                          }}
                        />
                      </ListItemButton>

                      <ListItemButton component='a' href='#customized-list'>
                        <ListItemIcon>
                          <FontAwesomeIcon icon={faShoppingBag} />
                        </ListItemIcon>
                        <ListItemText
                          primary='Marketing Solutions'
                          primaryTypographyProps={{
                            fontWeight: '700',
                            variant: 'h6',
                          }}
                        />
                      </ListItemButton>
                    </List>
                  </Item>
                </Stack>
              </Grid>
              <Grid
                item
                data-aos='fade-left'
                data-aos-delay='1500'
                lg={3}
                sm={4}
                xl={3}
                xs={12}
              >
                <Stack spacing={0} sx={{ mt: 4 }}>
                  <Item>
                    <Typography sx={{ mt: 1 }} variant='h6' component='div'>
                      Products
                    </Typography>
                    <Divider orientation='horizontal' flexItem />
                    <List sx={{ fontSize: '2rem' }}>
                      <ListItemButton component='a' href='#customized-list'>
                        <ListItemIcon>
                          <FontAwesomeIcon icon={faPeopleArrows} />
                        </ListItemIcon>
                        <ListItemText
                          primary='Pinna-Recruitment'
                          primaryTypographyProps={{
                            fontWeight: '700',
                            variant: 'h6',
                          }}
                        />
                      </ListItemButton>

                      <ListItemButton component='a' href='#customized-list'>
                        <ListItemIcon>
                          <FontAwesomeIcon icon={faWarehouse} />
                        </ListItemIcon>
                        <ListItemText
                          primary='Pinna-Rental'
                          primaryTypographyProps={{
                            fontWeight: '700',
                            variant: 'h6',
                          }}
                        />
                      </ListItemButton>

                      <ListItemButton component='a' href='#customized-list'>
                        <ListItemIcon>
                          <FontAwesomeIcon icon={faPeopleArrows} />
                        </ListItemIcon>
                        <ListItemText
                          primary='Pinna-CRM'
                          primaryTypographyProps={{
                            fontWeight: '700',
                            variant: 'h6',
                          }}
                        />
                      </ListItemButton>

                      <ListItemButton component='a' href='#customized-list'>
                        <ListItemIcon>
                          <FontAwesomeIcon icon={faStore} />
                        </ListItemIcon>
                        <ListItemText
                          primary='Pinna-Stock'
                          primaryTypographyProps={{
                            fontWeight: '700',
                            variant: 'h6',
                          }}
                        />
                      </ListItemButton>
                    </List>
                  </Item>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
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
