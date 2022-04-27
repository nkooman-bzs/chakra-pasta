import { Box, Flex, LayoutProps } from '@chakra-ui/react';
import {} from 'framer-motion';
import { FC } from 'react';

export const Stripe: FC<{ w: LayoutProps['w'] }> = ({ w }) => (
  <Flex w={w}>
    <Box flex={1} height={2} bg="brand.green" />
    <Box flex={1} height={2} bg="brand.white" />
    <Box flex={1} height={2} bg="brand.red" />
  </Flex>
);
