import { experimentalStyled } from '@material-ui/core';

export const FlexColumnCenter = experimentalStyled('div')(({}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));
