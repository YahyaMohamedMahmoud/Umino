import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import DisplayMenu from '../MobileMenu/DisplayMenu';
import MobileMenu from '../MobileMenu/MobileMenu';

export default function LayOut() {
  const Display = DisplayMenu();

  return (
    <>
    <Header/>
    <ScrollToTop/>
    {Display && <MobileMenu />}
    <Outlet></Outlet>
    <Footer/>
    </>
  )
}
