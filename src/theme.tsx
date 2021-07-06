import { createTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
//import shadows from './shadows';
import typography from './typography';
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#008000',
    },
    secondary: {
      main: '#ff8c00',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: 'linear-gradient(to right, green 30%, orange 90%)',
      paper: 'linear-gradient(to right, green 30%, orange 75%)',
    },
    text: {
      primary: '#008000',
      secondary: '#000',
    },
  },
  typography,
});

export default theme;
