/* eslint-disable react/prop-types */
import React from 'react';
import {Link} from 'react-router-dom';
import {Flex, SimpleGrid} from '@chakra-ui/react';
import ProductSimple from './ProductSimple';

const Product = ({products}) => {
  return (
    <Flex justify="center" align="center" direction="column">
      <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={8}>
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <ProductSimple product={product} />
          </Link>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Product;
