import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Meta from './Meta';

const theme = {
	color: 'green',
};
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.5em;
    font-family: 'Raleway', sans-serif;
  }
  a {
    text-decoration: none;
    
  }
`;

const Page = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<div>
				<Meta />
				<GlobalStyle />
				<div>{children}</div>
			</div>
		</ThemeProvider>
	);
};

export default Page;
