/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import Stats from './stats';
import {IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp} from 'react-icons/io5';

const Feature = ({text, icon, iconBg}) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

const SplitWithImage = () => {
  const logoStyle = {
    width: '100%',
    height: '170px',
  };

  return (
    <><img src="tentang.jpg" alt="" style={logoStyle} /><Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{base: 1, md: 2}} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}
          >
            Pengalaman Kami
          </Text>
          <Heading color={'#87711B'}>PRODUK PILIHAN AMAN DIGUNAKAN</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
          "CODDY" adalah sebuah website inovatif yang dirancang khusus untuk membantu petani dan pemangku kepentingan dalam menjaga dan meningkatkan hasil panen tanaman padi.
          Website ini memiliki dua fitur utama yang sangat berguna. Fitur pertama yaitu sistem klasifikasi penyakit tanaman padi berbasis gambar, user hanya perlu mengupload gambar daun tanaman padi yang ingin diperiksa lalu sistem kami akan menentukan jenis penyakit pada daun tanaman padi tersebut menggunakan algoritma yang sudah dilatih sebelumnya.
          Fitur kedua yaitu layanan chatbot yang memberikan informasi detail tentang tanaman padi.
          </Text>
          <Stack
            spacing={4}
            divider={<StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />}
          >
            <Feature
              icon={<Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Trend Produk'} />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Harga Standard'} />
            <Feature
              icon={<Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Kelengkapan Produk'} />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={'https://th.bing.com/th/id/OIP.m_O9D1nVJvF8aVhNXMMYDQHaE7?w=255&h=180&c=7&r=0&o=5&pid=1.7'}
            objectFit={'cover'} />
        </Flex>
      </SimpleGrid>
      <Stats/>
    </Container></>
  );
};

export default SplitWithImage;
