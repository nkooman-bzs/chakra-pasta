import { FC, PropsWithChildren } from 'react';
import { BackgroundProps, Box, Container, Text } from '@chakra-ui/react';

export const Content: FC<PropsWithChildren<{ bg?: BackgroundProps['bg'] }>> = ({
  children,
  bg = 'brand.white'
}) => {
  return (
    <Box bg={bg} py={16}>
      <Container>
        <Text color="black" fontSize={18}>
          {children}
        </Text>
      </Container>
    </Box>
  );
};
