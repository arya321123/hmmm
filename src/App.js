/* eslint-disable require-jsdoc */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {Route, Routes} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Navbar from './Component/Navbar';
import Home from './Dashboard/Home';
import Kontak from './Dashboard/Kontak';
import Product from './Dashboard/product/Product';
import Tentang from './Dashboard/Tentang';
import Footer from './Component/Footer';
import FloatingChatBot from './Dashboard/FloatingChatBot';
import {ObjectDetector} from './Dashboard/ObjectDetector';
import ThankYou from './Dashboard/product/ThankYou';

// eslint-disable-next-line require-jsdoc


function App() {
  const [, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Object Detection/deteksipenyakit.json');

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        // Handle the error without referencing response here
      }
    };


    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/product" element={<Product />} />
        <Route path="/ObjectDetector"element={<ObjectDetector />}/>
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/ty" element={<ThankYou />} />
      </Routes>
      <Footer />
      <FloatingChatBot />
    </>
  );
}

export default App;
