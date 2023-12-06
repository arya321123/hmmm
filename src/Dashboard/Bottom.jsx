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
        Selengkapnya...
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
        Selengkapnya...
          </a>
          <BlogAuthor name="admin" date={new Date('2021-12-16T02:46:17+00:00')} />
        </Box>
      </WrapItem>
    </Wrap>
    <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{base: '100%', sm: '45%', md: '45%', lg: '30%'}}>
        <Box w="100%">
          <Box borderRadius="lg" overflow="hidden">
            <Box textDecoration="none" _hover={{textDecoration: 'none'}}>
              <Image
                transform="scale(1.0)"
                src={
                  'https://saprotan-utama.com/wp-content/uploads/2021/03/Anakan_Padi-600x340.jpg'
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
            Cara Budidaya Padi untuk Memperbanyak Anakan Produktif
            </Text>
          </Heading>
          <Text as="p" fontSize="md" marginTop="2">
          Dalam usaha budidaya padi, tentunya harapan setiap petani adalah mendapatkan hasil yang maksimal.
          Sudah banyak panduan yang disosialisasikan kepada para petani, mulai dari metode tanam jajar legowo,
          pemupukan yang berimbang hingga pengendalian hama terpadu (PHT).
          Namun selain itu, kunci peningkatan produktivitas padi adalah dengan memaksimalkan potensi anakan padi.
          </Text>
          <a
            href="https://saprotan-utama.com/cara-budidaya-padi-untuk-memperbanyak-anakan-produktif/"
            target="_blank"
            style={readMoreButtonStyle} rel="noreferrer"
          >
        Selengkapnya...
          </a>
          <BlogAuthor name="admin" date={new Date('2021-03-15T13:11:34+00:00')} />
        </Box>
      </WrapItem>
    </Wrap>
    <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{base: '100%', sm: '45%', md: '45%', lg: '30%'}}>
        <Box w="100%">
          <Box borderRadius="lg" overflow="hidden">
            <Box textDecoration="none" _hover={{textDecoration: 'none'}}>
              <Image
                transform="scale(1.0)"
                src={
                  'https://saprotan-utama.com/wp-content/uploads/2021/01/pupuk_urea_padi-600x340.jpg'
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
            Dicari di Mana-mana, Apa Manfaat Pupuk Urea untuk Padi?
            </Text>
          </Heading>
          <Text as="p" fontSize="md" marginTop="2">
          Seperti yang Sahabat Pak Tani pasti sudah ketahui, pemupukan berimbang pada padi
          tentunya tak lepas dari tercukupinya tiga unsur berikut, yakni N(Nitrogen), P(Phosphate), dan K(Kalium).
          Dan, Pupuk Urea sendiri adalah salah satu dari beberapa jenis Pupuk Nitrogen
          yang sering digunakan petani padi di Indonesia.
          </Text>
          <a
            href="https://saprotan-utama.com/dicari-di-mana-mana-apa-manfaat-pupuk-urea-untuk-padi/"
            target="_blank"
            style={readMoreButtonStyle} rel="noreferrer"
          >
        Selengkapnya...
          </a>
          <BlogAuthor name="admin" date={new Date('2021-01-21T15:43:24+00:00')} />
        </Box>
      </WrapItem>
    </Wrap>,
    <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{base: '100%', sm: '45%', md: '45%', lg: '30%'}}>
        <Box w="100%">
          <Box borderRadius="lg" overflow="hidden">
            <Box textDecoration="none" _hover={{textDecoration: 'none'}}>
              <Image
                transform="scale(1.0)"
                src={
                  'https://www.ptnpg.com/~img/artikel_npg5-8b677-3553_251-twebp80.webp'
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
            APLIKASI PUPUK NPK FERTICOMP 15-15-15 PADA TANAMAN PADI SAWAH
            </Text>
          </Heading>
          <Text as="p" fontSize="md" marginTop="2">
          Ketersediaan unsur hara bagi tanaman merupakan salah satu faktor yang mempengaruhi produktivitas padi di Indonesia.
          Untuk meningkatkan ketersediaan hara di dalam tanah sekaligus meningkatkan produksi padi,
          PT Nusa Palapa Gemilang mengembangkan pupuk majemuk NPK 15-15-15 dengan Merk FERTICOMP.
          FERTICOMP 15-15-15 memiliki kandungan 15% N, 15% P2O5, dan 15% K2O.
          </Text>
          <a
            href="https://www.ptnpg.com/Berita/aplikasi-pupuk-npk-ferticomp-15-15-15-pada-tanaman-padi-sawah.html"
            target="_blank"
            style={readMoreButtonStyle} rel="noreferrer"
          >
        Selengkapnya...
          </a>
          <BlogAuthor name="admin" date={new Date('2023-11-29T15:43:24+00:00')} />
        </Box>
      </WrapItem>
    </Wrap>,
    <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{base: '100%', sm: '45%', md: '45%', lg: '30%'}}>
        <Box w="100%">
          <Box borderRadius="lg" overflow="hidden">
            <Box textDecoration="none" _hover={{textDecoration: 'none'}}>
              <Image
                transform="scale(1.0)"
                src={
                  'https://www.bertani.co.id/wp-content/uploads/2019/10/PPP-768x418.jpg'
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
            8 Cara Menanam Padi Yang Baik dan Benar Sampai Panen!
            </Text>
          </Heading>
          <Text as="p" fontSize="md" marginTop="2">
          Padi merupakan makanan pokok bagi masyarakat asia terlebih lagi indonesia.
          Padi merupakan asal daripada beras yang menghasilkan nasi yang biasanya kita makan dalam keseharian.
          Indonesia yang mempunyai cita cita tahun 2045 bisa menjadi lumbung padi dunia.
          Didukung oleh banyaknya sda yang sangat melimpah ruah diindonesia.
          </Text>
          <a
            href="https://www.bertani.co.id/cara-menanam-padi/"
            target="_blank"
            style={readMoreButtonStyle} rel="noreferrer"
          >
        Selengkapnya...
          </a>
          <BlogAuthor name="admin" date={new Date('2023-03-19T03:53:15+07:00')} />
        </Box>
      </WrapItem>
    </Wrap>
    <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{base: '100%', sm: '45%', md: '45%', lg: '30%'}}>
        <Box w="100%">
          <Box borderRadius="lg" overflow="hidden">
            <Box textDecoration="none" _hover={{textDecoration: 'none'}}>
              <Image
                transform="scale(1.0)"
                src={
                  'https://bibitonline.com/wp-content/uploads/padi-2.jpg'
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
            Langkah-langkah Cara Menanam Padi
            </Text>
          </Heading>
          <Text as="p" fontSize="md" marginTop="2">
          Tanaman padi merupakan asal muasal dari beras. Beras merupakan kebutuhan utama masyarakat
          Indonesia untuk mencukupi kebutuhan karbohidrat. Begitu bergantungnya masyarakat akan kebutuhan
          beras atau nasi, menyebabkan beras atau nasi menjadi kebutuhan utama dan wajib untuk dipenuhi.
          Kecukupan dan keberhasilan budidaya tanaman padi menjadi penentu untuk mencukupi kebutuhan.
          </Text>
          <a
            href="https://bibitonline.com/artikel/langkah-langkah-cara-menanam-padi"
            target="_blank"
            style={readMoreButtonStyle} rel="noreferrer"
          >
        Selengkapnya...
          </a>
          <BlogAuthor name="admin" date={new Date('2019-03-19T03:53:15+07:00')} />
        </Box>
      </WrapItem>
    </Wrap>
    <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{base: '100%', sm: '45%', md: '45%', lg: '30%'}}>
        <Box w="100%">
          <Box borderRadius="lg" overflow="hidden">
            <Box textDecoration="none" _hover={{textDecoration: 'none'}}>
              <Image
                transform="scale(1.0)"
                src={
                  'https://asset.kompas.com/crops/Kkg01nExRZMyRntaD3E1gHZrIxQ=/350x67:1283x1000/340x340/data/photo/2022/08/21/63022afce3de9.jpg'
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
            Ciri-ciri Tanaman Padi Siap Panen
            </Text>
          </Heading>
          <Text as="p" fontSize="md" marginTop="2">
          Padi merupakan tanaman penghasil beras yang menjadi makanan pokok masyarakat Indonesia.
          Keberadaan tanaman ini sangatlah penting. Maka dari itu, banyak pihak mulai dari petani,
          peneliti, hingga pemerintah saling bahu membahu untuk meningkatkan produksi padi setiap tahunnya.
          Dengan produksi yang tinggi, maka kebutuhan pangan dalam negeri bisa terpenuhi.
          </Text>
          <a
            href="https://agri.kompas.com/read/2022/09/19/142900484/ciri-ciri-tanaman-padi-siap-panen"
            target="_blank"
            style={readMoreButtonStyle} rel="noreferrer"
          >
        Selengkapnya...
          </a>
          <BlogAuthor name="admin" date={new Date('2022-09-19T03:53:15+07:00')} />
        </Box>
      </WrapItem>
    </Wrap>,
    <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{base: '100%', sm: '45%', md: '45%', lg: '30%'}}>
        <Box w="100%">
          <Box borderRadius="lg" overflow="hidden">
            <Box textDecoration="none" _hover={{textDecoration: 'none'}}>
              <Image
                transform="scale(1.0)"
                src={
                  'data:image/jpeg;base64,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'
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
            7 Cara Menanam Padi Yang Baik Dan Menguntungkan Dari Awal Tanam Hingga Panen, Lengkap!
            </Text>
          </Heading>
          <Text as="p" fontSize="md" marginTop="2">
          Cara menanam padi yang baik dan menguntungkan harus kamu ketahui dengan benar supaya hasilnya
          memuaskan. Jangan sampai, padi yang sudah kamu tanam gagal panen.
          Padi adalah salah satu tanaman budidaya yang merupakan tumbuhan penghasil beras.
          Beras merupakan kebutuhan utama berbagai negara Asia tak terkecuali bagi masyarakat di Indonesia.
          </Text>
          <a
            href="https://berita.99.co/cara-menanam-padi/#google_vignette"
            target="_blank"
            style={readMoreButtonStyle} rel="noreferrer"
          >
        Selengkapnya...
          </a>
          <BlogAuthor name="admin" date={new Date('2021-10-07T14:00:31+07:00')} />
        </Box>
      </WrapItem>
    </Wrap>
    <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{base: '100%', sm: '45%', md: '45%', lg: '30%'}}>
        <Box w="100%">
          <Box borderRadius="lg" overflow="hidden">
            <Box textDecoration="none" _hover={{textDecoration: 'none'}}>
              <Image
                transform="scale(1.0)"
                src={
                  'https://4.bp.blogspot.com/-VNU7K0jG-5E/VNB6u4xrRcI/AAAAAAAAAFE/DT4Xh9ul-5g/s1600/images%2B(4).jpg'
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
            PENGENALAN TANAMAN PADI
            </Text>
          </Heading>
          <Text as="p" fontSize="md" marginTop="2">
          Padi merupakan tanaman dagangan di Malaysia dan tujuan ditanam adalah untuk
          mendapatkan beras sebagai makanan ruji.Beras adalah bijian yang diperoleh daripada
          tanaman padi yang telah dikupas kulitnya.Terdapat dua jenis beras iaitu beras biasa dan beras
          pulut.Beras biasa menjadi sumber makanan utama,oleh itu beras ini lebih mendapat nilai
          </Text>
          <a
            href="https://kamipetanimuda.blogspot.com/2015/01/pengenalan-tanaman-padi.html"
            target="_blank"
            style={readMoreButtonStyle} rel="noreferrer"
          >
        Selengkapnya...
          </a>
          <BlogAuthor name="admin" date={new Date('Monday 12 January 2015')} />
        </Box>
      </WrapItem>
    </Wrap>,
    <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{base: '100%', sm: '45%', md: '45%', lg: '30%'}}>
        <Box w="100%">
          <Box borderRadius="lg" overflow="hidden">
            <Box textDecoration="none" _hover={{textDecoration: 'none'}}>
              <Image
                transform="scale(1.0)"
                src={
                  'https://pertanian.kulonprogokab.go.id/files/news/normal/bdc0850478e311f10650b4cf3dd6cff3.jpg'
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
            Hama Utama Padi
            </Text>
          </Heading>
          <Text as="p" fontSize="md" marginTop="2">
          Pertanaman padi varietas unggul yang sehat akan memberikan hasil dan pendapatan optimal
          bagi petani. Untuk itu, tanaman padi harus terus dirawat secara intensif dan dijaga dari gangguan
          organisme pengganggu tanaman (OPT). Serangan OPT dapat menyebabkan tanaman padi
          mengalami puso atau gagal panen. Oleh karena itu, petani wajib memelihara pertanaman padi
          </Text>
          <a
            href="https://pertanian.kulonprogokab.go.id/detil/1206/hama-utama-padi"
            target="_blank"
            style={readMoreButtonStyle} rel="noreferrer"
          >
        Selengkapnya...
          </a>
          <BlogAuthor name="admin" date={new Date('06 Februari 2023 15:07:57')} />
        </Box>
      </WrapItem>
    </Wrap>
    <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
      <Heading as="h2">CONCLUSION</Heading>
      <Text as="p" fontSize="lg">
    Artikel ini mencoba menyajikan informasi yang bermanfaat dan relevan, serta menggali lebih dalam tentang topik yang dibahas.
      </Text>
      <Text as="p" fontSize="lg">
    Kami sadar bahwa tidak semua informasi mungkin sudah tercakup dengan lengkap. Oleh karena itu, kami selalu terbuka untuk umpan balik dan kontribusi dari pembaca. Jika Anda memiliki pertanyaan, saran, atau ingin berbagi pengetahuan lebih lanjut, jangan ragu untuk menghubungi kami.
      </Text>
      <Text as="p" fontSize="lg">
    Terima kasih telah membaca artikel ini. Kami berharap dapat terus memberikan konten yang bermanfaat dan informatif di masa mendatang. Sampai jumpa di artikel-artikel kami berikutnya!
      </Text>
    </VStack>

  </Container>
);

export default ArticleList;
