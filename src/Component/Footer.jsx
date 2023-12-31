/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import {FaInstagram, FaTwitter} from 'react-icons/fa';

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};


const SmallWithSocial = () => {
  return (
    <Box
      bg={useColorModeValue('#87711B', 'gray.900')}
      color={useColorModeValue('black', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{base: 'column', md: 'row'}}
        spacing={4}
        justify={{base: 'center', md: 'space-between'}}
        align={{base: 'center', md: 'center'}}
      >
        <Text>© 2023 Powered by CODDY. All Right Reserved</Text>
        <Stack direction={'row'} spacing={6} style={{position: 'relative', left: '-55px'}}>
          <SocialButton label={'Twitter'} href={'https://twitter.com/Aryawib15919756'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'https://www.instagram.com/aryaw0844/'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default SmallWithSocial;
