import { ComponentStyleConfig, extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
};

const Button: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    fontFamily: 'body',
    textTransform: 'uppercase',
    borderRadius: 'base', // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: 'md',
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'brand.green',
      color: 'brand.green',
      _hover: {
        bg: 'brand.green',
        color: 'brand.white'
      }
    },
    solid: {
      bg: 'brand.red',
      color: 'white',
      _hover: {
        bg: 'brand.white',
        color: 'black'
      }
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
}

export const theme = extendTheme({
  config,
  global: {
    html: {
      scrollBehavior: 'smooth'
    }
  },
  components: {
    Button
  },
  colors: {
    brand: {
      green: '#009246',
      white: '#ffffff',
      red: '#ce2b37',
      accent: '#C9AE5D'
    },
    neutral: '#f5f5f5',
  },
  fonts: {
    body: 'Rosario, sans-serif',
    heading: 'Rosarivo, serif',
    cursive: 'Allura, cursive'
  }
});
