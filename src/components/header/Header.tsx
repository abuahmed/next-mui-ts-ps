import React, { useState } from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import useStyles from '../header/styles';
import Stack from '@material-ui/core/Stack';
import Button, { ButtonProps } from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleRight,
  faArrowCircleRight,
  faArrowRight,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: 'white',
  borderColor: orange[600],
  '&:hover': {
    backgroundColor: 'white',
    borderColor: orange[900],
  },
  borderRadius: '32px',
  width: '200px',
  height: '48px',
  fontSize: '1rem',
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'space-between',
  // border: '0.55rem solid white',
  // animation: 'pulse-border 1.5s linear infinite',
  // animationDelay: '1.5s',
  // '@keyframes pulse-border': {
  //   '0%': {
  //     transform: 'scale(1)',
  //     opacity: 1,
  //   },
  //   '50%': {
  //     transform: 'scale(1.2)',
  //     opacity: 1,
  //   },
  //   '100%': {
  //     transform: 'scale(1.5)',
  //     opacity: 0,
  //   },
  // },
}));

export default function Header() {
  const classes = useStyles();
  React.useEffect(() => {
    loop();
  }, []);
  const [text, setText] = useState('');
  //const textDisplay = document.getElementById('text');
  const phrases: string[] = [
    'Modern',
    'Mobile Responsive',
    'Fast and Efficient',
    'User Friendly',
    'Installable',
  ];
  let i = 0;
  let j = 0;
  let currentPhrase: string[] = [];
  let isDeleting = false;
  let isEnd = false;

  function loop() {
    isEnd = false;
    //textDisplay.innerHTML = currentPhrase.join('');
    setText(currentPhrase.join(''));
    if (i < phrases.length) {
      if (!isDeleting && j <= phrases[i].length) {
        currentPhrase.push(phrases[i][j]);
        j++;
        //textDisplay.innerHTML = currentPhrase.join('');
        setText(currentPhrase.join(''));
      }

      if (isDeleting && j > 0) {
        currentPhrase.pop(); //phrases[i][j]
        j--;
        //textDisplay.innerHTML = currentPhrase.join('');
        setText(currentPhrase.join(''));
      }

      if (j == phrases[i].length) {
        isEnd = true;
        isDeleting = true;
      }

      if (isDeleting && j === 0) {
        currentPhrase = [];
        isDeleting = false;
        i++;
        if (i === phrases.length) {
          i = 0;
        }
      }
    }
    const spedUp = 50;
    const normalSpeed = 100;
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
    setTimeout(loop, time);
  }

  return (
    <Stack
      className={classes.footerBackground}
      sx={{ color: 'white', pb: 0, width: '100%', height: '100%' }}
    >
      <Container maxWidth='lg'>
        <Box
          className={classes.flexStyle}
          sx={{ display: 'flex', padding: '24px' }}
        >
          <Stack
            spacing={3}
            data-aos='fade-left'
            sx={{ marginTop: '64px', zIndex: '1' }}
          >
            <Typography variant='h2' fontWeight='900' fontSize='3.5rem' noWrap>
              We Build Websites <br /> that Build your Business!
            </Typography>

            <Typography
              variant='h3'
              fontWeight='600'
              fontSize='2.8rem'
              component='h3'
            >
              Get websites that are:
              <br />
              <Typography
                fontWeight='700'
                variant='h3'
                component='span'
                fontSize='2.8rem'
                color='orange'
              >
                {text}|
              </Typography>
            </Typography>

            <ColorButton variant='contained'>
              Get In Touch{' '}
              <FontAwesomeIcon
                icon={faArrowCircleRight}
                className={classes.ArrowIcon}
              />
            </ColorButton>
          </Stack>

          <img
            data-aos='fade-right'
            src='../img/WebDev.svg'
            alt='Web Development'
            width='600px'
            height='500px'
          />
        </Box>
      </Container>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#ffffff'
          fillOpacity='1'
          d='M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
    </Stack>
  );
}
