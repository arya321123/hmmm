/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
'use client';

import Bottom from './Bottom';
import {Link, Box, SimpleGrid, Text, Stack, Flex} from '@chakra-ui/react';
import pHimg from './image/ph.jpg';
import pktImg from './image/pkt.jpg';
import eleImg from './image/elenmeyer.jpg';

const Mid = ({title, text, link, src, alt}) => {
  return (
    <Link href={link} textDecoration="none">
      <Stack textAlign="center">
        <Flex w={16} h={16} align={'center'} justify={'center'} color={'white'} bg={'none'} mb={1}>
          <img src={src} alt={alt} style={{width: '100%', height: '100%', marginLeft: '350px'}} />
        </Flex>
        <Text fontWeight={600}>{title}</Text>
        <Text color={'gray.600'}>{text}</Text>
      </Stack>
    </Link>
  );
};
const verticalineStyle = {
  width: '100%',
  paddingTop: '100px',
  borderBottom: '2px solid  #ccccb3',
  marginBottom: '20px',
};

export default function SimpleThreeColumns() {
  return (
    <>
      <Box p={4}>
        <SimpleGrid columns={{base: 1, md: 3}} spacing={10}>
          <Mid
            src={pHimg} alt='q'
            title={'Pengendalian Hama'}
            link="/link-1"
          />
          <Mid
            src={pktImg} alt='q'
            title={'Penilaian Kesehatan'}
            link="/ImageDetection"
          />
          <Mid
            src={eleImg} alt='q'
            title={'Pupuk dan Perbaikan Tanaman'}
            link="/link-3"
          />
        </SimpleGrid>
        <div style={verticalineStyle}></div>
      </Box>
      <Bottom />
    </>
  );
}
