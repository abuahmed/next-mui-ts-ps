import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

export default function Copyright() {
  return (
    <Typography variant='body2' color='text.primary' align='center'>
      <>
        <MuiLink
          href='mailto:contact@pinnasofts.com'
          sx={{ textDecoration: 'none', color: '#008000' }}
        >
          <FontAwesomeIcon icon={faEnvelope} />
          &nbsp;Contact Us
        </MuiLink>
        {'    |     Copyright © '}
        <MuiLink color='inherit' href='https://pinnasofts.com/'>
          PinnaSofts PLC
        </MuiLink>{' '}
        {new Date().getFullYear()}.
      </>
    </Typography>
  );
}
