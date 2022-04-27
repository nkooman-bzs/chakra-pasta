import { chakra, Link } from '@chakra-ui/react';

const Nav = chakra('nav', {
  baseStyle: {
    top: 0,
    position: 'absolute',
    width: '100%',
    height: 150,
    zIndex: 1,
    fontFamily: 'body',
    color: 'brand.white'
  }
});

const NavItems = chakra('ul', {
  baseStyle: {
    display: 'flex',
    justifyContent: { base: 'center', md: 'flex-end' },
    alignItems: 'center',
    listStyleType: 'none',
    paddingInline: { base: 0, md: 100 },
    gap: { base: 2, md: 50 },
    margin: 0,
    width: '100%',
    height: '100%',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px'
  }
});

const NavItem = chakra('li', {
  baseStyle: {
    display: 'flex',
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '10px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'brand.black',
    position: 'relative',
    _hover: {
      textDecorationStyle: 'none',
      _after: {
        content: '""',
        height: 4,
        width: '100%',
        position: 'absolute',
        top: '100%',
        mt: 10
      }
    }
  }
});

export const Navigation = () => {
  return (
    <Nav>
      <NavItems>
        <NavItem>
          <Link href="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link href="/about">About</Link>
        </NavItem>
        <NavItem>
          <Link href="/menu">Menu</Link>
        </NavItem>
        <NavItem>
          <Link href="/contact">Contact</Link>
        </NavItem>
      </NavItems>
    </Nav>
  );
};
