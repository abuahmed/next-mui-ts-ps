import { Stack, useTheme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';

function TypeWriter() {
  const [text, setText] = useState('');
  React.useEffect(() => {
    loop();
  }, []);

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
    setText(currentPhrase.join(''));
    if (i < phrases.length) {
      if (!isDeleting && j <= phrases[i].length) {
        currentPhrase.push(phrases[i][j]);
        j++;
        setText(currentPhrase.join(''));
      }

      if (isDeleting && j > 0) {
        currentPhrase.pop();
        j--;
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
  const theme = useTheme();
  return (
    <Stack spacing={1}>
      <Typography variant='h2' component='h2'>
        Get websites that are: <br />
        <Typography
          fontWeight='700'
          variant='h2'
          sx={{
            color: theme.palette.secondary.main,
            textAlign: { xs: 'center', sm: 'start' },
          }}
        >
          {text}|
        </Typography>
      </Typography>
    </Stack>
  );
}

export default TypeWriter;
