/* eslint-disable require-jsdoc */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {Route, Routes} from 'react-router-dom';
import React, {useState} from 'react';
import Navbar from './Component/Navbar';
import Home from './Dashboard/Home';
import Kontak from './Dashboard/Kontak';
import Product from './Dashboard/Product';
import Tentang from './Dashboard/Tentang';
import Footer from './Component/Footer';
import ProductDetail from './Dashboard/ProductDetail';
import FloatingChatBot from './Dashboard/FloatingChatBot';
import Checkout from './Dashboard/Checkout';
import ImageUploader from './Component/ImageUploader';
import ObjectDetection from './Component/ObjectDetection';
// eslint-disable-next-line require-jsdoc

const products = [
  {
    id: 1,
    kategori: 'Benih Padi',
    nama: 'Benih Prima',
    deskripsi: 'Benih padi prima dengan beragam varietas populer seperti IR-64, Membramo, Ciherang, Mekongga, Pepe, Situ Bangendit, Way Apo Buru, dll. Benih Prima memiliki warna cerah, daya tumbuh ≥ 90 %, campuran varietas lain ≤ 0.2 %.\nJarak Tanam: Tanam bibit 1 – 2 per lubang',
    harga: 85000,
    gambar: 'benihprima.jpg',
  },
  {
    id: 2,
    kategori: 'Benih Padi',
    nama: 'Benih Unggul',
    deskripsi: 'Benih padi unggul dengan beragam varietas populer seperti IR-64, Membramo, Ciherang, Mekongga, Pepe, Situ Bangendit, Way Apo Buru, dll. Benih Unggul memiliki warna cerah, daya tumbuh ≥ 80 %, campuran varietas lain ≤ 0.5 %.\nJarak Tanam: Tanam bibit 1 – 2 per lubang',
    harga: 95000,
    gambar: 'benih unggul.jpg',
  },
  {
    id: 3,
    kategori: 'Pupuk',
    nama: 'Pupuk NPK 16.16.16 Merah',
    deskripsi: 'NPK PAK TANI 16-16-16 MERAH merupakan pupuk majemuk yang diproduksi dengan teknologi modern dengan komposisi unsur hara seimbang. Pupuk compound granular yang mengandung unsur N-P-K yang seimbang, seperti Copper, Zinc, Mangan, dan Boron yang sesuai dengan kebutuhan tanaman. Berbentuk granular mudah larut dalam air. Pupuk ini bisa digunakan untuk pupuk dasar maupun pupuk susulan untuk padi.\nRekomendasi Dosis: 500 (kg/ha)',
    harga: 19500,
    gambar: 'NPK.jpg',
  },
  {
    id: 4,
    kategori: 'Pupuk',
    nama: 'Pupuk NPK 16.16.16 Biru',
    deskripsi: 'NPK PAK TANI 16-16-16 BIRU merupakan pupuk majemuk yang diproduksi dengan teknologi modern dengan komposisi unsur hara seimbang. Pupuk compound granular yang mengandung unsur N-P-K yang seimbang, seperti Copper, Zinc, Mangan, dan Boron yang sesuai dengan kebutuhan tanaman. Berbentuk granular mudah larut dalam air. Pupuk ini bisa digunakan untuk pupuk dasar maupun pupuk susulan untuk padi.\nRekomendasi Dosis: 500 (kg/ha)',
    harga: 19500,
    gambar: 'NPKbiru.jpg',
  },
  {
    id: 5,
    kategori: 'Pupuk',
    nama: 'NPK Cair Indofertil',
    deskripsi: 'Pupuk NPK cair yang diaplikasikan dengan cara penyemprotan pada daun, batang dan cabang tanaman. Sangat berguna untuk memacu pertumbuhan daun, pembentukan bunga dan buah. Pupuk ini sangat ideal dipakai pada tanaman padi\nRekomendasi Dosis: 5-10 sendok makan per tangki semprot 15 lt',
    harga: 34500,
    gambar: 'NPKcair.png',
  },
  {
    id: 6,
    kategori: 'Pupuk',
    nama: 'Pupuk Fertila Padi',
    deskripsi: 'Pupuk spray 100% Soluble, lengkap unsur hara makro dan unsur hara mikro yang diformulasikan khususnya untuk tanaman padi pada masa vegetatif.\nRekomendasi Dosis: 4 kg/ha',
    harga: 25000,
    gambar: 'fertilapadi.jpg',
  },
  {
    id: 7,
    kategori: 'Pupuk',
    nama: 'Pupuk ULTRADAP',
    deskripsi: 'ULTRADAP merupakan pupuk Mono Ammonium Phosphate berbentuk kristal yang mudah larut dalam air. Cocok dipakai untuk tanaman padi.\nRekomendasi Dosis: 2 – 4 gr/lt air',
    harga: 50300,
    gambar: 'ultradap.jpg',
  },
  {
    id: 8,
    kategori: 'Pupuk',
    nama: 'Pupuk PN Kristal',
    deskripsi: 'PN13-0-45/KNO3 Prill adalah pupuk Kalium (Potassium) Nitrat yang diformulasikan dari bahan alam tambang sumber Nitrat dan Potassium di Chile. Mengandung Nitrogen dalam bentuk Nitrat dan Potassium yang mudah larut.\nRekomendasi Dosis: 25 – 30 kg/ha KNO Putih',
    harga: 39800,
    gambar: 'pnkristal.jpg',
  },
  {
    id: 9,
    kategori: 'Pupuk',
    nama: 'Pupuk Magnesium Sulfate',
    deskripsi: 'Merupakan pupuk makro sekunder yang mengandung Magnesium dan Sulfur, berbentuk kristal sehingga mudah larut. Pupuk Magnesium Kristal Pak Tani dapat diaplikasikan dengan cara disemprot/disiramkan dan ditabur.\nRekomendasi Dosis: 35 – 50 kg/ha',
    harga: 14000,
    gambar: 'magnesium.png',
  },
  {
    id: 10,
    kategori: 'Fungisida',
    nama: 'Fungisida TAFT 75 WP',
    deskripsi: 'Taft 75 WP adalah Fungisida protektif, kuratif, dan sistemik, berbentuk tepung yang dapat disuspensikan berwarna kuning ke biru-biruan. Berfungsi untuk mengendalikan penyakit bercak daun (Cercospora janseana) pada padi.\nRekomendasi Dosis: 2 gr/l air',
    harga: 70800,
    gambar: 'taft.jpg',
  },
  {
    id: 11,
    kategori: 'Pupuk',
    nama: 'CPN 15-0-14 KNO3 Merah',
    deskripsi: 'CPN 15-0-14 KNO3 Merah adalah pupuk Kalium (Potassium) Nitrat yang diformulasikan dari bahan alam tambang sumber Nitrat dan Potassium di Chilie. Mengandung Nitrogen dalam bentuk Nitrat dan Kalium yang mudah larut. CPN 15-0-14/KNO3 Merah cocok untuk fase vegetatif (pertumbuhan awal tanaman sampai menjelang pembungaan).\nRekomendasi Dosis: 25 – 30 kg/ha KNO3 Merah',
    harga: 67300,
    gambar: 'cpn15.jpg',
  },
  {
    id: 12,
    kategori: 'Herbisida',
    nama: 'ULTRON 25 18 WP',
    deskripsi: 'ULTRON 25 18 WP adalah herbisida sistemik selektif pra tumbuh dan purna tumbuh berbentuk tepung yang dapat disuspensikan untuk mengendalikan gulma umum pada tanaman padi.\nRekomendasi Dosis: 60 – 80 g/ha',
    harga: 8500,
    gambar: 'herbisida.jpg',
  },
  {
    id: 13,
    kategori: 'Zat Pengatur Tumbuh',
    nama: 'Poston 250SC',
    deskripsi: 'POSTON 250 SC adalah zat pengatur tumbuh tanaman berbentuk pekatan suspensi, berwarna putih, untuk meningkatkan produksi gabah dan mutu hasil panen pada tanaman padi.\nRekomendasi Dosis: Semprot pada saat menjelang keluarnya malai 250 ml/ha',
    harga: 58800,
    gambar: 'poston.png',
  },
  {
    id: 14,
    kategori: 'Fungisida',
    nama: 'Torbinol 480 SC',
    deskripsi: 'Torbinol 480 SC adalah fungisida sistemik yang bersifat protektif berbentuk pekatan suspensi, untuk mengendalikan penyakit blas (Pyricularia oryzae) pada tanaman padi\nRekomendasi Dosis: 200 – 300 ml/hektar',
    harga: 146000,
    gambar: 'torbinol.jpg',
  },
  {
    id: 15,
    kategori: 'Insektisida',
    nama: 'Avimax 20 100 EC',
    deskripsi: 'Avimax 20 100 EC adalah insektisida racun kontak dan lambung berbentuk pekatan yang dapat diemulsikan berwarna kuning terang untuk mengendalikan hama pada tanaman padi.\nRekomendasi Dosis: Penyemprotan volume tinggi: 0.25 ml/l',
    harga: 42200,
    gambar: 'avimax.jpg',
  },

];

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBuyClick = ({product, quantity}) => {
    setSelectedProduct({product, quantity});
  };

  const [detectionResults, setDetectionResults] = useState([]);

  const handleImageUpload = async (imageFile) => {
    // Implementasi deteksi objek di sini
    // Gunakan data label dan model yang sesuai
    // Contoh hasil deteksi (format dapat disesuaikan dengan output model):
    const predictions = [
      {label: 'Object1', confidence: 0.95},
      {label: 'Object2', confidence: 0.85},
      // ... dan seterusnya
    ];

    setDetectionResults(predictions);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/product" element={<Product products={products} />} />
        <Route path="/image-upload" element={<ImageUploader onImageUpload={handleImageUpload} />} />
        {detectionResults.length > 0 && <Route path="/object-detection" element={<ObjectDetection predictions={detectionResults} />} />}
        <Route path="/product/:id" element={<ProductDetail products={products} />} />
        <Route path="/checkout" element={<Checkout selectedProduct={selectedProduct} />} />
        <Route path="/tentang" element={<Tentang />} />
      </Routes>
      <Footer />
      <FloatingChatBot />
    </>
  );
}

export default App;
