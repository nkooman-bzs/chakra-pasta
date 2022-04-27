import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { Stripe } from '../components/Stripe';
import { Logo } from './Logo';
// @ts-ignore
import HeroImage from '../assets/hero.jpg';

export const Hero = () => {
  return (
    <Box
      position="relative"
      isolation="isolate"
      height="100vh"
      width="100%"
      overflowY="hidden"
    >
      <Image
        src={HeroImage}
        alt="Italian food on a dining table"
        position="absolute"
        inset={0}
        zIndex={-1}
        width="100%"
        height="100%"
        objectFit="cover"
        filter="brightness(0.25) saturate(1.5)"
      />
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <Heading fontFamily="cursive" color="brand.accent">
          Chakra Pasta
        </Heading>
        <Heading fontSize={{ base: 60, md: 80 }} mt={5} my={10}>
          Taste of Italy
        </Heading>
        <Stripe w={{ base: 150, md: 250 }} />
      </Flex>
      <Box
        position="absolute"
        bottom={100}
        left="50%"
        transform="translate(-75%)"
      >
        <Logo />
      </Box>
    </Box>
  );
};
