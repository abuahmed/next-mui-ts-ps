import { experimentalStyled } from '@material-ui/core';

const MainLayoutRoot = experimentalStyled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  flexDirection: 'column',

  height: '100%',
  overflow: 'hidden',
  width: '100%',
}));

const MainLayoutWrapper = experimentalStyled('div')({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64,
});

const MainLayoutContainer = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
});

const MainLayoutContent = experimentalStyled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto',
});

export {
  MainLayoutContainer,
  MainLayoutContent,
  MainLayoutRoot,
  MainLayoutWrapper,
};
