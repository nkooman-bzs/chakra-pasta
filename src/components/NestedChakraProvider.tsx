import { FC, PropsWithChildren } from 'react';
import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react';

export const NestedChakraProvider: FC<
  PropsWithChildren<ChakraProviderProps>
> = ({ children, theme, cssVarsRoot }) => (
  <div id={cssVarsRoot}>
    <ChakraProvider theme={theme} cssVarsRoot={`#${cssVarsRoot}`}>
      {children}
    </ChakraProvider>
  </div>
);
