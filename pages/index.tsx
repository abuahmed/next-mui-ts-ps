import * as React from 'react';
import Footer from '../src/components/footer/Footer';
import Header from '../src/components/header/Header';
import { MainLayoutRoot, MainLayoutWrapper } from '../src/styles/layoutStyled';
import MainNavbar from '../src/components/MainNavbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from '../src/components/services/Services';
import About from '../src/components/about/About';
import Contact from '../src/components/contact/Contact';

export default function Index() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <MainLayoutRoot>
      <MainNavbar />
      <MainLayoutWrapper>
        <Header />
        <Services />
        <About />
        <Contact />
      </MainLayoutWrapper>

      <Footer />
    </MainLayoutRoot>
  );
}
