/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-len */
'use client';

import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import {Image as ChakraImage} from '@chakra-ui/react';
import {useParams} from 'react-router-dom';
import {useState} from 'react';

const ProductDetail = ({products}) => {
  const {id} = useParams();
  const [quantity, setQuantity] = useState(1);
  const selectedProduct = products.find((product) => product.id === parseInt(id, 10));

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  const {nama, gambar, deskripsi, harga} = selectedProduct;

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleBuyClick = () => {
    console.log(`Membeli ${quantity} ${nama}(s) untuk total ${quantity * harga} Rp`);
  };

  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{base: 1, lg: 2}}
        spacing={{base: 8, md: 10}}
        py={{base: 18, md: 24}}>
        <Flex>
          <ChakraImage
            rounded={'md'}
            alt={nama}
            src={gambar}
            objectfit={'cover'}
            align={'center'}
            w={'100%'}
            h={{base: '100%', sm: '400px', lg: '500px'}}
          />


        </Flex>
        <Stack spacing={{base: 6, md: 10}}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{base: '2xl', sm: '4xl', lg: '5xl'}}>
              {nama}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              Rp.{harga.toFixed(2)} (IDR)
            </Text>
          </Box>

          <Stack
            spacing={{base: 4, sm: 6}}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{base: 4, sm: 6}}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'lg'}
                fontWeight={'300'}>
                {deskripsi}
              </Text>
              <HStack spacing={4}>
                <Button
                  size="sm"
                  onClick={handleDecrease}
                  disabled={quantity === 1}>
                  Kurangi
                </Button>
                <Text>{quantity}</Text>
                <Button size="sm" onClick={handleIncrease}>
                  Tambah
                </Button>
              </HStack>
              <Button
                mt={4}
                onClick={handleBuyClick}
                colorScheme="teal"
                size="lg"
                width="full">
                Beli {quantity} {nama}(s)
              </Button>
            </VStack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default ProductDetail;
