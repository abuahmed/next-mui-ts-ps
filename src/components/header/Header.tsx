import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Stack from '@material-ui/core/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import Grid from '@material-ui/core/Grid';
import {
  ColorButton,
  GetInTouchArrow,
  ImageMargin,
} from '../../styles/componentStyled';
import { GradientBackground } from '../../styles/layoutStyled';
import TypeWriter from './TypeWriter';

export default function Header() {
  //const classes = useStyles();

  return (
    <GradientBackground>
      <Grid container sx={{ color: 'white' }}>
        <Container maxWidth='lg'>
          <Grid container sx={{ padding: '24px' }}>
            <Grid
              item
              xs={12}
              sm={7}
              sx={{ zIndex: '10', overflow: 'visible' }}
            >
              <Stack spacing={3} data-aos='fade-left'>
                <Typography variant='h1' component='h1'>
                  We Build Websites <br /> that Build your Business!
                </Typography>

                <TypeWriter />

                <ColorButton variant='contained'>
                  Get In Touch{' '}
                  <GetInTouchArrow>
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                  </GetInTouchArrow>
                </ColorButton>
              </Stack>
            </Grid>
            <Grid item sm={5}>
              <ImageMargin>
                <img
                  data-aos='fade-right'
                  src='../img/WebDev.svg'
                  alt='Web Development'
                  width='100%'
                  height='100%'
                />
              </ImageMargin>
            </Grid>
          </Grid>
        </Container>
        <Grid container sx={{ mt: -10 }}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
            <path
              fill='#ffffff'
              fillOpacity='1'
              d='M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
            ></path>
          </svg>
        </Grid>
      </Grid>
    </GradientBackground>
  );
}
