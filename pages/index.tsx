import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Footer from '../src/components/footer/Footer';
import Header from '../src/components/header/Header';
import { MainLayoutRoot, MainLayoutWrapper } from '../src/styles/layoutStyled';
import MainNavbar from '../src/components/MainNavbar';

export default function Index() {
  return (
    <MainLayoutRoot>
      <MainNavbar />
      <MainLayoutWrapper>
        <Header />
      </MainLayoutWrapper>

      <Footer />
    </MainLayoutRoot>
  );
}
