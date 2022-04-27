import React from 'react';
import { render } from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { App } from './App';
import { theme } from './theme';
import '@fontsource/rosario';
import '@fontsource/rosarivo';
import '@fontsource/allura';

render(
  <React.StrictMode>
    <ChakraProvider theme={theme} cssVarsRoot="#root">
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
