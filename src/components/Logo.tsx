import { motion } from 'framer-motion';
import { Image } from '@chakra-ui/react';
// @ts-ignore
import LogoImage from '../assets/logo.png';

export const Logo = () => {
  return (
    <motion.div
      animate={{ y: [-5, 5] }}
      transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
    >
      <Image src={LogoImage} alt="Mama mia!" height={50} width={50} objectFit="cover" />
    </motion.div>
  );
};
