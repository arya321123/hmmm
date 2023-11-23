/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
'use client';

import React from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';

const BlogTags = ({tags, marginTop = 0}) => (
  <HStack spacing={2} marginTop={marginTop}>
    {tags.map((tag) => (
      <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
        {tag}
      </Tag>
    ))}
  </HStack>
);

const BlogAuthor = ({date, name}) => (
  <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
    <Image
      borderRadius="full"
      boxSize="40px"
      src="https://th.bing.com/th/id/OIP.scwCs0kV3vZbFkuxUr5lgQHaJ4?w=134&h=180&c=7&r=0&o=5&pid=1.7"
      alt={`Avatar of ${name}`}
    />
    <Text fontWeight="light">{name}</Text>
    <Text>—</Text>
    <Text>{date.toLocaleDateString()}</Text>
  </HStack>
);
const readMoreButtonStyle = {
  background: '#ffcc00',
  color: 'white',
  padding: '3px ',
  textDecoration: 'none',
  border: 'none',
};
const ArticleList = () => (
  <Container maxW={'7xl'} p="12">
    <Heading as="p">Baca Juga : Article</Heading>
    <Box
      marginTop={{base: '1', sm: '5'}}
      display="flex"
      flexDirection={{base: 'column', sm: 'row'}}
      justifyContent="space-between">
      <Box
        display="flex"
        flex="1"
        marginRight="3"
        position="relative"
        alignItems="center">
        <Box
          width={{base: '100%', sm: '85%'}}
          zIndex="2"
          marginLeft={{base: '0', sm: '5%'}}
          marginTop="5%">
          <Box textDecoration="none" _hover={{textDecoration: 'none'}}>
            <Image
              borderRadius="lg"
              src={
                'https://saprotan-utama.com/wp-content/uploads/2022/11/Penggerek-batang-padi.jpg'
              }
              alt="some good alt text"
              objectFit="contain"
            />
          </Box>
        </Box>
        <Box zIndex="1" width="100%" position="absolute" height="100%">
          <Box
            bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)',
            )}
            backgroundSize="20px 20px"
            opacity="0.4"
            height="100%"
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        marginTop={{base: '3', sm: '0'}}>
        <BlogTags tags={['Botanical', 'Product']} />
        <Heading marginTop="1">
          <Text textDecoration="none" _hover={{textDecoration: 'none'}}>
          Mengatasi Penggerek Batang Padi Terkini!
          </Text>
        </Heading>
        <Text
          as="p"
          marginTop="2"
          color={useColorModeValue('gray.700', 'gray.200')}
          fontSize="lg">
          Mengatasi penggerek batang padi perlu dilakukan dengan cara terkini agar hasil panen padi tetap terjaga.
           Penggerek batang padi adalah salah satu hama yang paling sering menyerang tanaman padi dengan intensitas serangan sampai 90%.
           Hama ini menyerang pada berbagai fase mulai dari fase vegetatif sampai generatif.
           Gejala yang ditimbulkan dari serangan hama penggerek batang secara umum ada 2 jenis, yaitu sundep dan beluk.
          <a
            href="https://saprotan-utama.com/mengatasi-penggerek-batang-padi-terkini/"
            target="_blank"
            style={readMoreButtonStyle} rel="noreferrer"
          >
        Pelajari...
          </a>
        </Text>

        <BlogAuthor name="Admin" date={new Date('2022-11-28T09:28:53+00:00')} />
      </Box>
    </Box>
    <Heading as="h2" marginTop="5">
      Article Lainnya
    </Heading>
    <Divider marginTop="5" />
    <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{base: '100%', sm: '45%', md: '45%', lg: '30%'}}>
        <Box w="100%">
          <Box borderRadius="lg" overflow="hidden">
            <Box textDecoration="none" _hover={{textDecoration: 'none'}}>
              <Image
                transform="scale(1.0)"
                src={
                  'https://saprotan-utama.com/wp-content/uploads/2021/12/Teknik-Budidaya-Padi-1.jpg'
                }
                alt="some text"
                objectFit="contain"
                width="100%"
                transition="0.3s ease-in-out"
                _hover={{
                  transform: 'scale(1.05)',
                }}
              />
            </Box>
          </Box>
          <BlogTags tags={['Botanical', 'Product']} marginTop={3} />
          <Heading fontSize="xl" marginTop="2">
            <Text textDecoration="none" _hover={{textDecoration: 'none'}}>
            Inilah 6 Teknik Budidaya Padi yang Sahabat perlu tahu!
            </Text>
          </Heading>
          <Text as="p" fontSize="md" marginTop="2">
          Pengelolaan tanaman terpadu merupakan salah satu pendekatan untuk mengelola lahan, air,
          tanaman dan iklim secara terpadu dan berkelanjutan.
          Hal ini dilakukan untuk meningkatkan produktivitas, kelestarian lingkungan dan pendapatan petani.
          Komponen Pengelolaan Tanaman Terpadu (PTT) berupa:
          </Text>
          <a
            href="https://saprotan-utama.com/inilah-6-teknik-budidaya-padi-yang-sahabat-perlu-tahu/"
            target="_blank"
            style={readMoreButtonStyle} rel="noreferrer"
          >
        Pelajari...
          </a>
          <BlogAuthor name="admin" date={new Date('2021-12-16T02:46:17+00:00')} />
        </Box>
      </WrapItem>
    </Wrap>
    <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
      <Heading as="h2">What we write about</Heading>
      <Text as="p" fontSize="lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam
        arcu, eu tempus tortor molestie at. Vestibulum pretium condimentum dignissim.
        Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat consequat,
        commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere.
        Curabitur neque tortor, mattis nec lacus non, placerat congue elit.
      </Text>
      <Text as="p" fontSize="lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam
        arcu, eu tempus tortor molestie at. Vestibulum pretium condimentum dignissim.
        Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat consequat,
        commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere.
        Curabitur neque tortor, mattis nec lacus non, placerat congue elit.
      </Text>
      <Text as="p" fontSize="lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam
        arcu, eu tempus tortor molestie at. Vestibulum pretium condimentum dignissim.
        Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat consequat,
        commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere.
        Curabitur neque tortor, mattis nec lacus non, placerat congue elit.
      </Text>
    </VStack>
  </Container>
);

export default ArticleList;
