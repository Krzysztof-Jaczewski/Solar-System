'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background: #000;
    color: #fff;
    font-family: 'Segoe UI', sans-serif;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
  background: url('/stars.png');
  background-size: cover;
  width:100% ;
  height:100% ;
  min-height:100vh ;
 }

`;

export default GlobalStyle;
