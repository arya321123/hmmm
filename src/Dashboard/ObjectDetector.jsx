/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React, {useRef, useState} from 'react';
import styled from 'styled-components';

import '@tensorflow/tfjs-backend-cpu';

const ObjectDetectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: url('https://wallpapercave.com/wp/wp3069304.jpg') center/cover;
`;

const DetectorContainer = styled.div`
  background: url('https://cdn2.iconfinder.com/data/icons/arrow-line/91/Korawan_M_Arrow_04-512.png') center/cover;
  min-width: 200px;
  height: 700px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border: 3px solid transparent;
  transition: border 0.3s ease-in-out;

  &:hover {
    border: 3px solid #1ac71a;
    box-shadow: 0 0 10px #1ac71a, 0 0 20px #1ac71a, 0 0 30px #1ac71a;
  }
`;

const TargetImg = styled.img`
  height: 100%;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const SelectButton = styled.button`
  padding: 7px 10px;
  border: 2px solid transparent;
  background-color: #D7D569;
  color: #0a0f22;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  margin-top: 2em;
  cursor: pointer;
  transition: all 260ms ease-in-out;

  &:hover {
    background-color: #FCFB9F;
    border: 2px solid #fff;
    color: #CDD9B5;
  }
`;

const TargetBox = styled(({classType, ...rest}) => <div {...rest} />)`
  position: absolute;

  left: ${({x}) => x + 'px'};
  top: ${({y}) => y + 'px'};
  width: ${({width}) => width + 'px'};
  height: ${({height}) => height + 'px'};

  border: 4px solid #1ac71a;
  background-color: transparent;
  z-index: 20;

  &::before {
    content: "${({classType, score}) => `${classType} ${score.toFixed(1)}%`}";
    color: #1ac71a;
    font-weight: 500;
    font-size: 17px;
    position: absolute;
    top: -1.5em;
    left: -5px;
  }
`;

export function ObjectDetector() {
  const fileInputRef = useRef();
  const imageRef = useRef();
  const [imgData, setImgData] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const isEmptyPredictions = !predictions || predictions.length === 0;

  const openFilePicker = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const detectObjectsOnImage = async (imgSize, annotations) => {
    const normalizedPredictions = normalizePredictions(annotations, imgSize);
    setPredictions(normalizedPredictions);
  };

  const readImage = (file) => {
    return new Promise((rs, rj) => {
      const fileReader = new FileReader();
      fileReader.onload = () => rs(fileReader.result);
      fileReader.onerror = () => rj(fileReader.error);


      if (file instanceof Blob) {
        fileReader.readAsDataURL(file);
      } else {
        rj(new Error('Invalid file type. Expected Blob.'));
      }
    });
  };


  const onSelectImage = async (e) => {
    setPredictions([]);
    setLoading(true);

    const file = e.target.files[0];
    const imgData = await readImage(file);
    setImgData(imgData);

    const imageElement = document.createElement('img');
    imageElement.src = imgData;

    imageElement.onload = async () => {
      const imgSize = {
        width: imageElement.width,
        height: imageElement.height,
      };


      const jsonData = {
        data: [
          {
            'image_filename': 'bacterial_leaf_blight (117)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.401414,
                  'y1': 0.169643,
                  'x2': 0.058036,
                  'y2': 0.125000,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.538690,
                  'y1': 0.534598,
                  'x2': 0.140625,
                  'y2': 0.395089,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (118)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.473958,
                  'y1': 0.318080,
                  'x2': 0.078125,
                  'y2': 0.622768,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.613467,
                  'y1': 0.822545,
                  'x2': 0.049107,
                  'y2': 0.203125,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.554315,
                  'y1': 0.373884,
                  'x2': 0.024554,
                  'y2': 0.091518,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (119)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.382440,
                  'y1': 0.369420,
                  'x2': 0.176339,
                  'y2': 0.738839,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (120)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.448289,
                  'y1': 0.588170,
                  'x2': 0.111607,
                  'y2': 0.417411,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (121)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.484003,
                  'y1': 0.501116,
                  'x2': 0.254464,
                  'y2': 0.975446,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (122)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.504092,
                  'y1': 0.215402,
                  'x2': 0.071429,
                  'y2': 0.270089,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.546503,
                  'y1': 0.580357,
                  'x2': 0.120536,
                  'y2': 0.589286,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (123)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.406994,
                  'y1': 0.157366,
                  'x2': 0.029018,
                  'y2': 0.127232,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.520833,
                  'y1': 0.834821,
                  'x2': 0.042411,
                  'y2': 0.316964,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.442708,
                  'y1': 0.789063,
                  'x2': 0.082589,
                  'y2': 0.412946,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (124)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.462798,
                  'y1': 0.337054,
                  'x2': 0.042411,
                  'y2': 0.174107,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.463914,
                  'y1': 0.957589,
                  'x2': 0.026786,
                  'y2': 0.084821,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (125)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.448289,
                  'y1': 0.732143,
                  'x2': 0.049107,
                  'y2': 0.111607,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (126)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.508557,
                  'y1': 0.044643,
                  'x2': 0.053571,
                  'y2': 0.089286,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.513021,
                  'y1': 0.559152,
                  'x2': 0.080357,
                  'y2': 0.881696,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.457217,
                  'y1': 0.339286,
                  'x2': 0.058036,
                  'y2': 0.258929,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.400298,
                  'y1': 0.781250,
                  'x2': 0.078125,
                  'y2': 0.437500,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (127)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.367932,
                  'y1': 0.502232,
                  'x2': 0.165179,
                  'y2': 0.995536,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.555432,
                  'y1': 0.640625,
                  'x2': 0.066964,
                  'y2': 0.209821,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.496280,
                  'y1': 0.866071,
                  'x2': 0.046875,
                  'y2': 0.250000,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (128)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.395833,
                  'y1': 0.501116,
                  'x2': 0.024554,
                  'y2': 0.484375,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.431548,
                  'y1': 0.870536,
                  'x2': 0.069196,
                  'y2': 0.254464,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.539807,
                  'y1': 0.702009,
                  'x2': 0.031250,
                  'y2': 0.020089,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (129)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.451637,
                  'y1': 0.743304,
                  'x2': 0.082589,
                  'y2': 0.513392,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.537574,
                  'y1': 0.500000,
                  'x2': 0.022321,
                  'y2': 0.035714,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (130)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.409226,
                  'y1': 0.273438,
                  'x2': 0.073661,
                  'y2': 0.363839,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.475074,
                  'y1': 0.777902,
                  'x2': 0.040179,
                  'y2': 0.435268,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (131)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.513021,
                  'y1': 0.593750,
                  'x2': 0.053571,
                  'y2': 0.419643,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.488467,
                  'y1': 0.834821,
                  'x2': 0.062500,
                  'y2': 0.330357,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (132)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.499628,
                  'y1': 0.674107,
                  'x2': 0.066964,
                  'y2': 0.651786,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (133)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.448289,
                  'y1': 0.674107,
                  'x2': 0.058036,
                  'y2': 0.779018,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (134)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.437128,
                  'y1': 0.611607,
                  'x2': 0.084821,
                  'y2': 0.776786,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.546503,
                  'y1': 0.892857,
                  'x2': 0.017857,
                  'y2': 0.214286,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (135)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.484003,
                  'y1': 0.629464,
                  'x2': 0.129464,
                  'y2': 0.736607,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.583333,
                  'y1': 0.359375,
                  'x2': 0.046875,
                  'y2': 0.718750,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (136)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.481771,
                  'y1': 0.970982,
                  'x2': 0.044643,
                  'y2': 0.058036,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (137)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.341146,
                  'y1': 0.739955,
                  'x2': 0.075893,
                  'y2': 0.520089,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.303199,
                  'y1': 0.137277,
                  'x2': 0.026786,
                  'y2': 0.060268,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (138)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.399182,
                  'y1': 0.284598,
                  'x2': 0.120536,
                  'y2': 0.569196,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.402530,
                  'y1': 0.770089,
                  'x2': 0.042411,
                  'y2': 0.120536,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.465030,
                  'y1': 0.911830,
                  'x2': 0.033482,
                  'y2': 0.176339,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (139)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.359003,
                  'y1': 0.695313,
                  'x2': 0.040179,
                  'y2': 0.069196,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.367932,
                  'y1': 0.820313,
                  'x2': 0.022321,
                  'y2': 0.069196,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.447173,
                  'y1': 0.957589,
                  'x2': 0.042411,
                  'y2': 0.084821,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (140)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.373512,
                  'y1': 0.837054,
                  'x2': 0.060268,
                  'y2': 0.325892,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (141)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.425967,
                  'y1': 0.648438,
                  'x2': 0.084821,
                  'y2': 0.698661,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (142)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.602307,
                  'y1': 0.256696,
                  'x2': 0.071429,
                  'y2': 0.504464,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.403646,
                  'y1': 0.723214,
                  'x2': 0.031250,
                  'y2': 0.232143,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.388021,
                  'y1': 0.931920,
                  'x2': 0.071429,
                  'y2': 0.136160,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (143)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.507440,
                  'y1': 0.184152,
                  'x2': 0.095982,
                  'y2': 0.359375,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.528646,
                  'y1': 0.495536,
                  'x2': 0.031250,
                  'y2': 0.250000,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.534226,
                  'y1': 0.929687,
                  'x2': 0.071429,
                  'y2': 0.140625,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (144)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.567708,
                  'y1': 0.400670,
                  'x2': 0.042411,
                  'y2': 0.497768,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.459449,
                  'y1': 0.478795,
                  'x2': 0.053571,
                  'y2': 0.564732,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.459449,
                  'y1': 0.946429,
                  'x2': 0.035714,
                  'y2': 0.107142,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.508557,
                  'y1': 0.964286,
                  'x2': 0.008929,
                  'y2': 0.035714,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (145)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.573289,
                  'y1': 0.505580,
                  'x2': 0.031250,
                  'y2': 0.073661,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.561012,
                  'y1': 0.790179,
                  'x2': 0.060268,
                  'y2': 0.419642,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.469494,
                  'y1': 0.956473,
                  'x2': 0.060268,
                  'y2': 0.078125,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (146)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.463914,
                  'y1': 0.729911,
                  'x2': 0.160714,
                  'y2': 0.477679,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (147)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.434896,
                  'y1': 0.488839,
                  'x2': 0.049107,
                  'y2': 0.370536,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (148)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.500744,
                  'y1': 0.581473,
                  'x2': 0.082589,
                  'y2': 0.837054,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.439360,
                  'y1': 0.892857,
                  'x2': 0.066964,
                  'y2': 0.214286,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (149)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.394717,
                  'y1': 0.292411,
                  'x2': 0.049107,
                  'y2': 0.575893,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.461682,
                  'y1': 0.659598,
                  'x2': 0.058036,
                  'y2': 0.680804,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.597842,
                  'y1': 0.123884,
                  'x2': 0.053571,
                  'y2': 0.154018,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.601190,
                  'y1': 0.622768,
                  'x2': 0.095982,
                  'y2': 0.754464,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.370164,
                  'y1': 0.804688,
                  'x2': 0.026786,
                  'y2': 0.386161,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (150)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.497396,
                  'y1': 0.527902,
                  'x2': 0.084821,
                  'y2': 0.939732,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (151)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.497396,
                  'y1': 0.527902,
                  'x2': 0.084821,
                  'y2': 0.939732,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (152)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.473958,
                  'y1': 0.340402,
                  'x2': 0.037946,
                  'y2': 0.399554,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.448289,
                  'y1': 0.854911,
                  'x2': 0.031250,
                  'y2': 0.290178,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.490699,
                  'y1': 0.773438,
                  'x2': 0.022321,
                  'y2': 0.448661,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.540923,
                  'y1': 0.574777,
                  'x2': 0.042411,
                  'y2': 0.238839,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (153)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.466146,
                  'y1': 0.527902,
                  'x2': 0.066964,
                  'y2': 0.944196,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (154)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.451637,
                  'y1': 0.503348,
                  'x2': 0.051339,
                  'y2': 0.993304,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (155)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.492932,
                  'y1': 0.497768,
                  'x2': 0.147321,
                  'y2': 0.995536,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (156)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.457217,
                  'y1': 0.207589,
                  'x2': 0.017857,
                  'y2': 0.218750,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.472842,
                  'y1': 0.669643,
                  'x2': 0.017857,
                  'y2': 0.660714,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (157)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.479539,
                  'y1': 0.500000,
                  'x2': 0.049107,
                  'y2': 1.000000,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.394717,
                  'y1': 0.521205,
                  'x2': 0.040179,
                  'y2': 0.957589,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.519717,
                  'y1': 0.881696,
                  'x2': 0.040179,
                  'y2': 0.227679,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (158)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.479539,
                  'y1': 0.502232,
                  'x2': 0.066964,
                  'y2': 0.986607,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (159)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.463914,
                  'y1': 0.505580,
                  'x2': 0.116071,
                  'y2': 0.988839,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.554315,
                  'y1': 0.496652,
                  'x2': 0.118304,
                  'y2': 0.993304,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (160)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.446057,
                  'y1': 0.457589,
                  'x2': 0.035714,
                  'y2': 0.263393,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.488467,
                  'y1': 0.430804,
                  'x2': 0.040179,
                  'y2': 0.138393,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.491815,
                  'y1': 0.696429,
                  'x2': 0.033482,
                  'y2': 0.348214,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.422619,
                  'y1': 0.107143,
                  'x2': 0.015625,
                  'y2': 0.071429,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (161)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.452753,
                  'y1': 0.206473,
                  'x2': 0.040179,
                  'y2': 0.087054,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.521949,
                  'y1': 0.648438,
                  'x2': 0.049107,
                  'y2': 0.180804,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.452753,
                  'y1': 0.666295,
                  'x2': 0.058036,
                  'y2': 0.319196,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.509673,
                  'y1': 0.879464,
                  'x2': 0.020089,
                  'y2': 0.232143,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (162)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.461682,
                  'y1': 0.583705,
                  'x2': 0.053571,
                  'y2': 0.319196,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (163)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.448289,
                  'y1': 0.419643,
                  'x2': 0.031250,
                  'y2': 0.084821,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.440476,
                  'y1': 0.630580,
                  'x2': 0.024554,
                  'y2': 0.149554,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (164)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.406994,
                  'y1': 0.502232,
                  'x2': 0.078125,
                  'y2': 0.991071,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.294271,
                  'y1': 0.463170,
                  'x2': 0.080357,
                  'y2': 0.466518,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.344494,
                  'y1': 0.833705,
                  'x2': 0.051339,
                  'y2': 0.149554,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (165)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.321057,
                  'y1': 0.370536,
                  'x2': 0.035714,
                  'y2': 0.133929,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.335565,
                  'y1': 0.604911,
                  'x2': 0.042411,
                  'y2': 0.058036,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (166)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.353423,
                  'y1': 0.400670,
                  'x2': 0.037946,
                  'y2': 0.372768,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.388021,
                  'y1': 0.465402,
                  'x2': 0.026786,
                  'y2': 0.131696,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (167)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.392485,
                  'y1': 0.500000,
                  'x2': 0.125000,
                  'y2': 1.000000,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (168)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.403646,
                  'y1': 0.502232,
                  'x2': 0.066964,
                  'y2': 0.991071,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.226190,
                  'y1': 0.506696,
                  'x2': 0.060268,
                  'y2': 0.986607,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.510789,
                  'y1': 0.270089,
                  'x2': 0.058036,
                  'y2': 0.540178,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (169)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.388021,
                  'y1': 0.397321,
                  'x2': 0.035714,
                  'y2': 0.772321,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.362351,
                  'y1': 0.832589,
                  'x2': 0.042411,
                  'y2': 0.218750,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.456101,
                  'y1': 0.757813,
                  'x2': 0.020089,
                  'y2': 0.189732,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.420387,
                  'y1': 0.684152,
                  'x2': 0.037946,
                  'y2': 0.154018,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.347842,
                  'y1': 0.444196,
                  'x2': 0.026786,
                  'y2': 0.361607,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (170)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.439360,
                  'y1': 0.500000,
                  'x2': 0.281250,
                  'y2': 1.000000,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (171)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.354539,
                  'y1': 0.506696,
                  'x2': 0.102679,
                  'y2': 0.986607,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (172)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.372396,
                  'y1': 0.501116,
                  'x2': 0.040179,
                  'y2': 0.997768,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.283110,
                  'y1': 0.497768,
                  'x2': 0.040179,
                  'y2': 0.995536,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.413690,
                  'y1': 0.483259,
                  'x2': 0.033482,
                  'y2': 0.220982,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (173)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.437128,
                  'y1': 0.381696,
                  'x2': 0.071429,
                  'y2': 0.504464,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (174)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.363467,
                  'y1': 0.437500,
                  'x2': 0.093750,
                  'y2': 0.875000,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.465030,
                  'y1': 0.805804,
                  'x2': 0.029018,
                  'y2': 0.388392,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (175)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.360119,
                  'y1': 0.316964,
                  'x2': 0.055804,
                  'y2': 0.321429,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.311012,
                  'y1': 0.611607,
                  'x2': 0.064732,
                  'y2': 0.589286,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (176)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.363467,
                  'y1': 0.180804,
                  'x2': 0.049107,
                  'y2': 0.308036,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.335565,
                  'y1': 0.585938,
                  'x2': 0.060268,
                  'y2': 0.609375,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (177)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.418155,
                  'y1': 0.178571,
                  'x2': 0.073661,
                  'y2': 0.357142,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.452753,
                  'y1': 0.733259,
                  'x2': 0.049107,
                  'y2': 0.127232,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.469494,
                  'y1': 0.907366,
                  'x2': 0.069196,
                  'y2': 0.176339,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (178)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.527530,
                  'y1': 0.176339,
                  'x2': 0.051339,
                  'y2': 0.272321,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.457217,
                  'y1': 0.227679,
                  'x2': 0.066964,
                  'y2': 0.392857,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.529762,
                  'y1': 0.462054,
                  'x2': 0.037946,
                  'y2': 0.125000,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.517485,
                  'y1': 0.758929,
                  'x2': 0.049107,
                  'y2': 0.330357,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.423735,
                  'y1': 0.813616,
                  'x2': 0.053571,
                  'y2': 0.270089,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (179)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.513021,
                  'y1': 0.113839,
                  'x2': 0.031250,
                  'y2': 0.120536,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.534226,
                  'y1': 0.340402,
                  'x2': 0.073661,
                  'y2': 0.287946,
                },
              },
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.425967,
                  'y1': 0.515625,
                  'x2': 0.049107,
                  'y2': 0.495536,
                },
              },
            ],
          },
          {
            'image_filename': 'bacterial_leaf_blight (180)',
            'annotations': [
              {
                'label': 'Bacterial Leaf Blight',
                'bbox': {
                  'x1': 0.513021,
                  'y1': 0.600446,
                  'x2': 0.151786,
                  'y2': 0.352679,
                },
              },
            ],
          },
          {
            'image_filename': 'brown_spot (117)',
            'annotations': [
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.251860,
                  'y1': 0.117188,
                  'x2': 0.026786,
                  'y2': 0.029018,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.308780,
                  'y1': 0.137277,
                  'x2': 0.029018,
                  'y2': 0.020089,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.104539,
                  'y1': 0.041295,
                  'x2': 0.044643,
                  'y2': 0.024554,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.504092,
                  'y1': 0.452009,
                  'x2': 0.035714,
                  'y2': 0.033482,
                },
              },
            ],
          },
          {
            'image_filename': 'brown_spot (118)',
            'annotations': [
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.429315,
                  'y1': 0.731027,
                  'x2': 0.051339,
                  'y2': 0.024554,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.499628,
                  'y1': 0.674107,
                  'x2': 0.026786,
                  'y2': 0.017857,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.299851,
                  'y1': 0.925223,
                  'x2': 0.051339,
                  'y2': 0.024554,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.531994,
                  'y1': 0.560268,
                  'x2': 0.042411,
                  'y2': 0.031250,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.613467,
                  'y1': 0.465402,
                  'x2': 0.133929,
                  'y2': 0.100446,
                },
              },
            ],
          },
          {
            'image_filename': 'brown_spot (119)',
            'annotations': [
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.285342,
                  'y1': 0.512277,
                  'x2': 0.495536,
                  'y2': 0.104911,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.747396,
                  'y1': 0.489955,
                  'x2': 0.071429,
                  'y2': 0.015625,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.752976,
                  'y1': 0.543527,
                  'x2': 0.180804,
                  'y2': 0.033482,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.911458,
                  'y1': 0.493304,
                  'x2': 0.118304,
                  'y2': 0.022321,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.944940,
                  'y1': 0.544643,
                  'x2': 0.078125,
                  'y2': 0.017857,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.586682,
                  'y1': 0.455357,
                  'x2': 0.071429,
                  'y2': 0.026786,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.977493,
                  'y1': 0.443080,
                  'x2': 0.045014,
                  'y2': 0.015625,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.819940,
                  'y1': 0.456473,
                  'x2': 0.055804,
                  'y2': 0.011161,
                },
              },
            ],
          },
          {
            'image_filename': 'brown_spot (120)',
            'annotations': [
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.885789,
                  'y1': 0.565848,
                  'x2': 0.120536,
                  'y2': 0.060268,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.821057,
                  'y1': 0.484375,
                  'x2': 0.129464,
                  'y2': 0.075893,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.927083,
                  'y1': 0.543527,
                  'x2': 0.033482,
                  'y2': 0.026786,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.972842,
                  'y1': 0.529018,
                  'x2': 0.040179,
                  'y2': 0.022321,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.719494,
                  'y1': 0.552455,
                  'x2': 0.118304,
                  'y2': 0.073661,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.480655,
                  'y1': 0.467634,
                  'x2': 0.087054,
                  'y2': 0.042411,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.428199,
                  'y1': 0.507813,
                  'x2': 0.053571,
                  'y2': 0.024554,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.552083,
                  'y1': 0.562500,
                  'x2': 0.082589,
                  'y2': 0.053571,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.616815,
                  'y1': 0.510045,
                  'x2': 0.037946,
                  'y2': 0.033482,
                },
              },
            ],
          },
          {
            'image_filename': 'brown_spot (121)',
            'annotations': [
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.226190,
                  'y1': 0.501116,
                  'x2': 0.100446,
                  'y2': 0.029018,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.524182,
                  'y1': 0.440848,
                  'x2': 0.133929,
                  'y2': 0.060268,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.548735,
                  'y1': 0.506696,
                  'x2': 0.205357,
                  'y2': 0.049107,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.101190,
                  'y1': 0.439732,
                  'x2': 0.122768,
                  'y2': 0.066964,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.258557,
                  'y1': 0.439732,
                  'x2': 0.160714,
                  'y2': 0.049107,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.675967,
                  'y1': 0.439732,
                  'x2': 0.133929,
                  'y2': 0.058036,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.856771,
                  'y1': 0.493304,
                  'x2': 0.178571,
                  'y2': 0.058036,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.892485,
                  'y1': 0.444196,
                  'x2': 0.142857,
                  'y2': 0.035714,
                },
              },
            ],
          },
          {
            'image_filename': 'brown_spot (122)',
            'annotations': [
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.919271,
                  'y1': 0.434152,
                  'x2': 0.125000,
                  'y2': 0.069196,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.888021,
                  'y1': 0.529018,
                  'x2': 0.209821,
                  'y2': 0.066964,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.755208,
                  'y1': 0.453125,
                  'x2': 0.104911,
                  'y2': 0.075893,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.496280,
                  'y1': 0.543527,
                  'x2': 0.082589,
                  'y2': 0.042411,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.437128,
                  'y1': 0.500000,
                  'x2': 0.053571,
                  'y2': 0.035714,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.561012,
                  'y1': 0.426339,
                  'x2': 0.060268,
                  'y2': 0.058036,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.311012,
                  'y1': 0.515625,
                  'x2': 0.055804,
                  'y2': 0.040179,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.305432,
                  'y1': 0.450893,
                  'x2': 0.031250,
                  'y2': 0.044643,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.336682,
                  'y1': 0.406250,
                  'x2': 0.236607,
                  'y2': 0.040179,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.117932,
                  'y1': 0.441964,
                  'x2': 0.218750,
                  'y2': 0.058036,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.631324,
                  'y1': 0.491071,
                  'x2': 0.049107,
                  'y2': 0.044643,
                },
              },
            ],
          },
          {
            'image_filename': 'brown_spot (123)',
            'annotations': [
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.527530,
                  'y1': 0.671875,
                  'x2': 0.051339,
                  'y2': 0.191964,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.450521,
                  'y1': 0.739955,
                  'x2': 0.071429,
                  'y2': 0.180804,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.448289,
                  'y1': 0.475446,
                  'x2': 0.049107,
                  'y2': 0.254464,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.546503,
                  'y1': 0.206473,
                  'x2': 0.062500,
                  'y2': 0.412946,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.448289,
                  'y1': 0.273438,
                  'x2': 0.062500,
                  'y2': 0.109375,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.466146,
                  'y1': 0.081473,
                  'x2': 0.049107,
                  'y2': 0.154018,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.481771,
                  'y1': 0.947545,
                  'x2': 0.142857,
                  'y2': 0.104910,
                },
              },
            ],
          },
          {
            'image_filename': 'brown_spot (124)',
            'annotations': [
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.431548,
                  'y1': 0.037946,
                  'x2': 0.029018,
                  'y2': 0.049107,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.482887,
                  'y1': 0.100446,
                  'x2': 0.029018,
                  'y2': 0.111607,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.433780,
                  'y1': 0.101563,
                  'x2': 0.015625,
                  'y2': 0.029018,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.490699,
                  'y1': 0.214286,
                  'x2': 0.133929,
                  'y2': 0.151786,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.487351,
                  'y1': 0.407366,
                  'x2': 0.122768,
                  'y2': 0.225446,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.542039,
                  'y1': 0.573661,
                  'x2': 0.031250,
                  'y2': 0.058036,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.452753,
                  'y1': 0.746652,
                  'x2': 0.035714,
                  'y2': 0.185268,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.511905,
                  'y1': 0.744420,
                  'x2': 0.024554,
                  'y2': 0.069196,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.544271,
                  'y1': 0.809152,
                  'x2': 0.008929,
                  'y2': 0.051339,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.515253,
                  'y1': 0.880580,
                  'x2': 0.022321,
                  'y2': 0.095982,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.453869,
                  'y1': 0.941964,
                  'x2': 0.015625,
                  'y2': 0.071429,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.555432,
                  'y1': 0.981027,
                  'x2': 0.026786,
                  'y2': 0.033482,
                },
              },
            ],
          },
          {
            'image_filename': 'brown_spot (125)',
            'annotations': [
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.427083,
                  'y1': 0.497768,
                  'x2': 0.087054,
                  'y2': 0.977679,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.531994,
                  'y1': 0.314732,
                  'x2': 0.069196,
                  'y2': 0.075893,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.506324,
                  'y1': 0.441964,
                  'x2': 0.035714,
                  'y2': 0.053571,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.555432,
                  'y1': 0.506696,
                  'x2': 0.040179,
                  'y2': 0.062500,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.531994,
                  'y1': 0.841518,
                  'x2': 0.100446,
                  'y2': 0.120536,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.513021,
                  'y1': 0.958705,
                  'x2': 0.026786,
                  'y2': 0.046875,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.492932,
                  'y1': 0.630580,
                  'x2': 0.022321,
                  'y2': 0.060268,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.546503,
                  'y1': 0.627232,
                  'x2': 0.044643,
                  'y2': 0.084821,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.557664,
                  'y1': 0.188616,
                  'x2': 0.026786,
                  'y2': 0.149554,
                },
              },
            ],
          },
          {
            'image_filename': 'brown_spot (126)',
            'annotations': [
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.433780,
                  'y1': 0.093750,
                  'x2': 0.078125,
                  'y2': 0.142857,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.505208,
                  'y1': 0.200893,
                  'x2': 0.064732,
                  'y2': 0.138393,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.449405,
                  'y1': 0.225446,
                  'x2': 0.046875,
                  'y2': 0.080357,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.446057,
                  'y1': 0.315848,
                  'x2': 0.035714,
                  'y2': 0.055804,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.490699,
                  'y1': 0.385045,
                  'x2': 0.044643,
                  'y2': 0.082589,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.438244,
                  'y1': 0.521205,
                  'x2': 0.051339,
                  'y2': 0.122768,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.438244,
                  'y1': 0.671875,
                  'x2': 0.055804,
                  'y2': 0.125000,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.507440,
                  'y1': 0.561384,
                  'x2': 0.060268,
                  'y2': 0.229911,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.487351,
                  'y1': 0.861607,
                  'x2': 0.113839,
                  'y2': 0.209821,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.401414,
                  'y1': 0.363839,
                  'x2': 0.062500,
                  'y2': 0.129464,
                },
              },
            ],
          },
          {
            'image_filename': 'brown_spot (127)',
            'annotations': [
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.423735,
                  'y1': 0.502232,
                  'x2': 0.071429,
                  'y2': 0.977679,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.548735,
                  'y1': 0.323661,
                  'x2': 0.040179,
                  'y2': 0.424107,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.515253,
                  'y1': 0.308036,
                  'x2': 0.044643,
                  'y2': 0.053571,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.498512,
                  'y1': 0.436384,
                  'x2': 0.042411,
                  'y2': 0.060268,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.494048,
                  'y1': 0.625000,
                  'x2': 0.029018,
                  'y2': 0.053571,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.530878,
                  'y1': 0.844866,
                  'x2': 0.093750,
                  'y2': 0.109375,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.510789,
                  'y1': 0.954241,
                  'x2': 0.049107,
                  'y2': 0.046875,
                },
              },
              {
                'label': 'Brown Spot',
                'bbox': {
                  'x1': 0.553199,
                  'y1': 0.593750,
                  'x2': 0.026786,
                  'y2': 0.107143,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (117)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.456101,
                  'y1': 0.502232,
                  'x2': 0.832589,
                  'y2': 0.995536,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (118)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.574405,
                  'y1': 0.500000,
                  'x2': 0.850446,
                  'y2': 1.000000,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (119)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.511905,
                  'y1': 0.504464,
                  'x2': 0.453125,
                  'y2': 0.991071,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (120)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.499814,
                  'y1': 0.537946,
                  'x2': 0.999628,
                  'y2': 0.611607,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (121)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.515253,
                  'y1': 0.500000,
                  'x2': 0.718750,
                  'y2': 1.000000,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (122)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.519903,
                  'y1': 0.500000,
                  'x2': 0.960193,
                  'y2': 1.000000,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (123)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.496466,
                  'y1': 0.454241,
                  'x2': 0.992932,
                  'y2': 0.845982,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (124)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.497582,
                  'y1': 0.572545,
                  'x2': 0.995164,
                  'y2': 0.841518,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (125)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.467262,
                  'y1': 0.500000,
                  'x2': 0.149554,
                  'y2': 1.000000,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (126)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.499814,
                  'y1': 0.203125,
                  'x2': 0.999628,
                  'y2': 0.241071,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (127)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.499814,
                  'y1': 0.436384,
                  'x2': 0.999628,
                  'y2': 0.292411,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (128)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.498698,
                  'y1': 0.428571,
                  'x2': 0.997396,
                  'y2': 0.794643,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (129)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.564360,
                  'y1': 0.500000,
                  'x2': 0.357143,
                  'y2': 1.000000,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (130)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.500930,
                  'y1': 0.532366,
                  'x2': 0.998140,
                  'y2': 0.167411,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (131)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.500930,
                  'y1': 0.453125,
                  'x2': 0.998140,
                  'y2': 0.754464,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (132)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.500000,
                  'y1': 0.620536,
                  'x2': 1.000000,
                  'y2': 0.205357,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (133)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.502046,
                  'y1': 0.513393,
                  'x2': 0.995908,
                  'y2': 0.125000,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (134)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.493118,
                  'y1': 0.514509,
                  'x2': 0.986235,
                  'y2': 0.462054,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (135)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.505394,
                  'y1': 0.388393,
                  'x2': 0.989211,
                  'y2': 0.776786,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (136)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.500744,
                  'y1': 0.533482,
                  'x2': 0.993304,
                  'y2': 0.674107,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (137)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.382440,
                  'y1': 0.501116,
                  'x2': 0.238839,
                  'y2': 0.997768,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (138)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.502046,
                  'y1': 0.565848,
                  'x2': 0.995908,
                  'y2': 0.837054,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (139)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.502976,
                  'y1': 0.518973,
                  'x2': 0.988839,
                  'y2': 0.734375,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (140)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.496466,
                  'y1': 0.517857,
                  'x2': 0.992932,
                  'y2': 0.571429,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (141)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.502046,
                  'y1': 0.553571,
                  'x2': 0.995908,
                  'y2': 0.598214,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (142)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.499814,
                  'y1': 0.397321,
                  'x2': 0.999628,
                  'y2': 0.517857,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (143)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.502046,
                  'y1': 0.520089,
                  'x2': 0.995908,
                  'y2': 0.120536,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (144)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.496466,
                  'y1': 0.526786,
                  'x2': 0.992932,
                  'y2': 0.705357,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (145)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.497582,
                  'y1': 0.549107,
                  'x2': 0.995164,
                  'y2': 0.473214,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (146)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.521949,
                  'y1': 0.497768,
                  'x2': 0.790179,
                  'y2': 0.995536,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (147)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.484003,
                  'y1': 0.501116,
                  'x2': 0.852679,
                  'y2': 0.997768,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (148)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.388021,
                  'y1': 0.504464,
                  'x2': 0.660714,
                  'y2': 0.991071,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (149)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.497396,
                  'y1': 0.497768,
                  'x2': 0.736607,
                  'y2': 0.995536,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (150)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.502046,
                  'y1': 0.377232,
                  'x2': 0.995908,
                  'y2': 0.669643,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (151)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.502046,
                  'y1': 0.407366,
                  'x2': 0.995908,
                  'y2': 0.779018,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (152)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.502046,
                  'y1': 0.472098,
                  'x2': 0.995908,
                  'y2': 0.729911,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (153)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.337798,
                  'y1': 0.501116,
                  'x2': 0.305804,
                  'y2': 0.997768,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (154)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.449405,
                  'y1': 0.507813,
                  'x2': 0.890625,
                  'y2': 0.970982,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (155)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.444940,
                  'y1': 0.504464,
                  'x2': 0.747768,
                  'y2': 0.991071,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (157)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.555432,
                  'y1': 0.503348,
                  'x2': 0.888393,
                  'y2': 0.993304,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (158)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.426153,
                  'y1': 0.503348,
                  'x2': 0.852306,
                  'y2': 0.993304,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (159)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.504278,
                  'y1': 0.514509,
                  'x2': 0.991443,
                  'y2': 0.926339,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (160)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.457217,
                  'y1': 0.498884,
                  'x2': 0.888393,
                  'y2': 0.993304,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (161)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.545387,
                  'y1': 0.502232,
                  'x2': 0.680804,
                  'y2': 0.995536,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (162)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.495350,
                  'y1': 0.484375,
                  'x2': 0.990699,
                  'y2': 0.968750,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (163)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.502046,
                  'y1': 0.587054,
                  'x2': 0.995908,
                  'y2': 0.584821,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (164)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.500744,
                  'y1': 0.523438,
                  'x2': 0.988839,
                  'y2': 0.734375,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (165)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.438244,
                  'y1': 0.501116,
                  'x2': 0.832589,
                  'y2': 0.993304,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (166)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.500000,
                  'y1': 0.546875,
                  'x2': 1.000000,
                  'y2': 0.906250,
                },
              },
            ],
          },
          {
            'image_filename': 'healthy (167)',
            'annotations': [
              {
                'label': 'Healthy',
                'bbox': {
                  'x1': 0.500930,
                  'y1': 0.534598,
                  'x2': 0.998140,
                  'y2': 0.917411,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (117)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.767485,
                  'y1': 0.584821,
                  'x2': 0.053571,
                  'y2': 0.026786,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (118)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.430432,
                  'y1': 0.728795,
                  'x2': 0.022321,
                  'y2': 0.060268,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.480655,
                  'y1': 0.455357,
                  'x2': 0.020089,
                  'y2': 0.017857,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.472842,
                  'y1': 0.919643,
                  'x2': 0.017857,
                  'y2': 0.031250,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (119)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.537574,
                  'y1': 0.107143,
                  'x2': 0.058036,
                  'y2': 0.196429,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.497396,
                  'y1': 0.309152,
                  'x2': 0.044643,
                  'y2': 0.100446,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.550967,
                  'y1': 0.443080,
                  'x2': 0.044643,
                  'y2': 0.216518,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.504092,
                  'y1': 0.844866,
                  'x2': 0.084821,
                  'y2': 0.261161,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (120)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.427083,
                  'y1': 0.119420,
                  'x2': 0.037946,
                  'y2': 0.109375,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.443824,
                  'y1': 0.401786,
                  'x2': 0.040179,
                  'y2': 0.160714,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.458333,
                  'y1': 0.681920,
                  'x2': 0.029018,
                  'y2': 0.220982,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.481771,
                  'y1': 0.930804,
                  'x2': 0.035714,
                  'y2': 0.129464,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.548735,
                  'y1': 0.901786,
                  'x2': 0.044643,
                  'y2': 0.183036,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.478423,
                  'y1': 0.165179,
                  'x2': 0.046875,
                  'y2': 0.120536,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (121)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.402530,
                  'y1': 0.158482,
                  'x2': 0.033482,
                  'y2': 0.129464,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.487351,
                  'y1': 0.199777,
                  'x2': 0.055804,
                  'y2': 0.113839,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.437128,
                  'y1': 0.426339,
                  'x2': 0.066964,
                  'y2': 0.151786,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.457217,
                  'y1': 0.683036,
                  'x2': 0.040179,
                  'y2': 0.223214,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.495164,
                  'y1': 0.900670,
                  'x2': 0.071429,
                  'y2': 0.104911,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.604539,
                  'y1': 0.859375,
                  'x2': 0.058036,
                  'y2': 0.200893,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (120)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.427083,
                  'y1': 0.119420,
                  'x2': 0.037946,
                  'y2': 0.109375,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.443824,
                  'y1': 0.401786,
                  'x2': 0.040179,
                  'y2': 0.160714,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.458333,
                  'y1': 0.681920,
                  'x2': 0.029018,
                  'y2': 0.220982,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.481771,
                  'y1': 0.930804,
                  'x2': 0.035714,
                  'y2': 0.129464,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.548735,
                  'y1': 0.901786,
                  'x2': 0.044643,
                  'y2': 0.183036,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.478423,
                  'y1': 0.165179,
                  'x2': 0.046875,
                  'y2': 0.120536,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (122)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.402530,
                  'y1': 0.145089,
                  'x2': 0.055804,
                  'y2': 0.111607,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.434896,
                  'y1': 0.424107,
                  'x2': 0.058036,
                  'y2': 0.169643,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.451637,
                  'y1': 0.672991,
                  'x2': 0.055804,
                  'y2': 0.207589,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.621280,
                  'y1': 0.861607,
                  'x2': 0.087054,
                  'y2': 0.191964,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.498512,
                  'y1': 0.888393,
                  'x2': 0.051339,
                  'y2': 0.138393,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.487351,
                  'y1': 0.199777,
                  'x2': 0.073661,
                  'y2': 0.104911,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (123)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.491815,
                  'y1': 0.162946,
                  'x2': 0.037946,
                  'y2': 0.160714,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.466146,
                  'y1': 0.333705,
                  'x2': 0.031250,
                  'y2': 0.073661,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.499628,
                  'y1': 0.435268,
                  'x2': 0.044643,
                  'y2': 0.254464,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.472842,
                  'y1': 0.802455,
                  'x2': 0.035714,
                  'y2': 0.252232,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (124)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.548735,
                  'y1': 0.102679,
                  'x2': 0.035714,
                  'y2': 0.133929,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.547619,
                  'y1': 0.311384,
                  'x2': 0.033482,
                  'y2': 0.095982,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.492932,
                  'y1': 0.440848,
                  'x2': 0.022321,
                  'y2': 0.113839,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.514137,
                  'y1': 0.549107,
                  'x2': 0.051339,
                  'y2': 0.160714,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.463914,
                  'y1': 0.802455,
                  'x2': 0.089286,
                  'y2': 0.283482,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.462798,
                  'y1': 0.541295,
                  'x2': 0.020089,
                  'y2': 0.154018,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.558780,
                  'y1': 0.566964,
                  'x2': 0.029018,
                  'y2': 0.160714,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.576637,
                  'y1': 0.137277,
                  'x2': 0.033482,
                  'y2': 0.212054,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.491815,
                  'y1': 0.116071,
                  'x2': 0.024554,
                  'y2': 0.142857,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (125)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.486235,
                  'y1': 0.170759,
                  'x2': 0.035714,
                  'y2': 0.194196,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.457217,
                  'y1': 0.341518,
                  'x2': 0.040179,
                  'y2': 0.084821,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.504092,
                  'y1': 0.452009,
                  'x2': 0.035714,
                  'y2': 0.229911,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.471726,
                  'y1': 0.820313,
                  'x2': 0.064732,
                  'y2': 0.238839,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (126)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.494048,
                  'y1': 0.112723,
                  'x2': 0.073661,
                  'y2': 0.171875,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.515253,
                  'y1': 0.275670,
                  'x2': 0.066964,
                  'y2': 0.087054,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.482887,
                  'y1': 0.568080,
                  'x2': 0.060268,
                  'y2': 0.154018,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.635045,
                  'y1': 0.820313,
                  'x2': 0.053571,
                  'y2': 0.274554,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (127)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.571057,
                  'y1': 0.232143,
                  'x2': 0.116071,
                  'y2': 0.129464,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.623512,
                  'y1': 0.343750,
                  'x2': 0.091518,
                  'y2': 0.080357,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.544271,
                  'y1': 0.541295,
                  'x2': 0.129464,
                  'y2': 0.113839,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.517485,
                  'y1': 0.375000,
                  'x2': 0.089286,
                  'y2': 0.071429,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.367932,
                  'y1': 0.639509,
                  'x2': 0.049107,
                  'y2': 0.104911,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.415923,
                  'y1': 0.265625,
                  'x2': 0.122768,
                  'y2': 0.200893,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.324405,
                  'y1': 0.589286,
                  'x2': 0.104911,
                  'y2': 0.383929,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.478423,
                  'y1': 0.710938,
                  'x2': 0.073661,
                  'y2': 0.167411,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (128)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.457217,
                  'y1': 0.324777,
                  'x2': 0.138393,
                  'y2': 0.533482,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.573289,
                  'y1': 0.780134,
                  'x2': 0.075893,
                  'y2': 0.238839,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (129)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.475074,
                  'y1': 0.343750,
                  'x2': 0.084821,
                  'y2': 0.330357,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.549851,
                  'y1': 0.646205,
                  'x2': 0.042411,
                  'y2': 0.180804,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (130)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.538690,
                  'y1': 0.100446,
                  'x2': 0.095982,
                  'y2': 0.156250,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.579985,
                  'y1': 0.263393,
                  'x2': 0.071429,
                  'y2': 0.089286,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.494048,
                  'y1': 0.316964,
                  'x2': 0.082589,
                  'y2': 0.089286,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.509673,
                  'y1': 0.569196,
                  'x2': 0.082589,
                  'y2': 0.138393,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.380208,
                  'y1': 0.707589,
                  'x2': 0.064732,
                  'y2': 0.129464,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.335565,
                  'y1': 0.592634,
                  'x2': 0.051339,
                  'y2': 0.247768,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.459449,
                  'y1': 0.816964,
                  'x2': 0.053571,
                  'y2': 0.196429,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.614583,
                  'y1': 0.492188,
                  'x2': 0.046875,
                  'y2': 0.082589,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.394717,
                  'y1': 0.824777,
                  'x2': 0.031250,
                  'y2': 0.091518,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.321057,
                  'y1': 0.850446,
                  'x2': 0.035714,
                  'y2': 0.129464,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.393601,
                  'y1': 0.145089,
                  'x2': 0.029018,
                  'y2': 0.174107,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (131)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.559896,
                  'y1': 0.190848,
                  'x2': 0.084821,
                  'y2': 0.122768,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.456101,
                  'y1': 0.189732,
                  'x2': 0.029018,
                  'y2': 0.084821,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.508557,
                  'y1': 0.502232,
                  'x2': 0.058036,
                  'y2': 0.129464,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.578869,
                  'y1': 0.508929,
                  'x2': 0.046875,
                  'y2': 0.107143,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.436012,
                  'y1': 0.678571,
                  'x2': 0.104911,
                  'y2': 0.200893,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.425967,
                  'y1': 0.459821,
                  'x2': 0.093750,
                  'y2': 0.160714,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.557664,
                  'y1': 0.338170,
                  'x2': 0.049107,
                  'y2': 0.064732,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.633557,
                  'y1': 0.223214,
                  'x2': 0.044643,
                  'y2': 0.183036,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (132)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.459449,
                  'y1': 0.434152,
                  'x2': 0.044643,
                  'y2': 0.078125,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.490699,
                  'y1': 0.536830,
                  'x2': 0.062500,
                  'y2': 0.113839,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.545387,
                  'y1': 0.543527,
                  'x2': 0.037946,
                  'y2': 0.118304,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.434896,
                  'y1': 0.741071,
                  'x2': 0.084821,
                  'y2': 0.214286,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.420387,
                  'y1': 0.526786,
                  'x2': 0.033482,
                  'y2': 0.151786,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.526414,
                  'y1': 0.335938,
                  'x2': 0.026786,
                  'y2': 0.087054,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.578869,
                  'y1': 0.181920,
                  'x2': 0.033482,
                  'y2': 0.198661,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.463914,
                  'y1': 0.151786,
                  'x2': 0.026786,
                  'y2': 0.089286,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (133)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.544271,
                  'y1': 0.257813,
                  'x2': 0.071429,
                  'y2': 0.225446,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.517485,
                  'y1': 0.503348,
                  'x2': 0.125000,
                  'y2': 0.189732,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.471726,
                  'y1': 0.665179,
                  'x2': 0.046875,
                  'y2': 0.066964,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.482887,
                  'y1': 0.823661,
                  'x2': 0.109375,
                  'y2': 0.191964,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (134)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.458333,
                  'y1': 0.368304,
                  'x2': 0.037946,
                  'y2': 0.133929,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.531994,
                  'y1': 0.645089,
                  'x2': 0.100446,
                  'y2': 0.303571,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (135)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.572173,
                  'y1': 0.292411,
                  'x2': 0.051339,
                  'y2': 0.111607,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.453869,
                  'y1': 0.430804,
                  'x2': 0.078125,
                  'y2': 0.120536,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.398065,
                  'y1': 0.736607,
                  'x2': 0.060268,
                  'y2': 0.102679,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.427083,
                  'y1': 0.882813,
                  'x2': 0.109375,
                  'y2': 0.180804,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.610119,
                  'y1': 0.391741,
                  'x2': 0.051339,
                  'y2': 0.247768,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.557664,
                  'y1': 0.793527,
                  'x2': 0.044643,
                  'y2': 0.265625,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (136)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.470610,
                  'y1': 0.103795,
                  'x2': 0.049107,
                  'y2': 0.189732,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.554315,
                  'y1': 0.066964,
                  'x2': 0.060268,
                  'y2': 0.133928,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.590030,
                  'y1': 0.312500,
                  'x2': 0.042411,
                  'y2': 0.232143,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.603423,
                  'y1': 0.593750,
                  'x2': 0.042411,
                  'y2': 0.178571,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.555432,
                  'y1': 0.837054,
                  'x2': 0.031250,
                  'y2': 0.120536,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.638021,
                  'y1': 0.919643,
                  'x2': 0.044643,
                  'y2': 0.107143,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (137)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.505208,
                  'y1': 0.199777,
                  'x2': 0.060268,
                  'y2': 0.158482,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.463914,
                  'y1': 0.544643,
                  'x2': 0.071429,
                  'y2': 0.232143,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.523065,
                  'y1': 0.647321,
                  'x2': 0.037946,
                  'y2': 0.062500,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.489583,
                  'y1': 0.835938,
                  'x2': 0.042411,
                  'y2': 0.189732,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (138)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.447173,
                  'y1': 0.098214,
                  'x2': 0.042411,
                  'y2': 0.178571,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.520833,
                  'y1': 0.062500,
                  'x2': 0.046875,
                  'y2': 0.125000,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.550967,
                  'y1': 0.302455,
                  'x2': 0.040179,
                  'y2': 0.203125,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.558780,
                  'y1': 0.594866,
                  'x2': 0.055804,
                  'y2': 0.162946,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.576637,
                  'y1': 0.908482,
                  'x2': 0.042411,
                  'y2': 0.093750,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (139)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.394717,
                  'y1': 0.147321,
                  'x2': 0.040179,
                  'y2': 0.178571,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.501860,
                  'y1': 0.101563,
                  'x2': 0.071429,
                  'y2': 0.127232,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.548735,
                  'y1': 0.324777,
                  'x2': 0.053571,
                  'y2': 0.212054,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.566592,
                  'y1': 0.583705,
                  'x2': 0.062500,
                  'y2': 0.131696,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.596726,
                  'y1': 0.864955,
                  'x2': 0.046875,
                  'y2': 0.136161,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (140)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.393601,
                  'y1': 0.135045,
                  'x2': 0.055804,
                  'y2': 0.189732,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.492932,
                  'y1': 0.100446,
                  'x2': 0.062500,
                  'y2': 0.120536,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.539807,
                  'y1': 0.322545,
                  'x2': 0.075893,
                  'y2': 0.198661,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.569940,
                  'y1': 0.584821,
                  'x2': 0.087054,
                  'y2': 0.160714,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.612351,
                  'y1': 0.870536,
                  'x2': 0.064732,
                  'y2': 0.111607,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.518601,
                  'y1': 0.793527,
                  'x2': 0.046875,
                  'y2': 0.118304,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (141)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.528646,
                  'y1': 0.183036,
                  'x2': 0.049107,
                  'y2': 0.191964,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.497396,
                  'y1': 0.558036,
                  'x2': 0.058036,
                  'y2': 0.223214,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.540923,
                  'y1': 0.647321,
                  'x2': 0.042411,
                  'y2': 0.080357,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.510789,
                  'y1': 0.845982,
                  'x2': 0.049107,
                  'y2': 0.183036,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (142)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.506324,
                  'y1': 0.437500,
                  'x2': 0.040179,
                  'y2': 0.147321,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.585565,
                  'y1': 0.293527,
                  'x2': 0.064732,
                  'y2': 0.127232,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.594494,
                  'y1': 0.463170,
                  'x2': 0.042411,
                  'y2': 0.122768,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.490699,
                  'y1': 0.811384,
                  'x2': 0.053571,
                  'y2': 0.292411,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (143)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.542039,
                  'y1': 0.331473,
                  'x2': 0.075893,
                  'y2': 0.497768,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.424851,
                  'y1': 0.801339,
                  'x2': 0.064732,
                  'y2': 0.263393,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (144)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.528646,
                  'y1': 0.363839,
                  'x2': 0.058036,
                  'y2': 0.263393,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.459449,
                  'y1': 0.639509,
                  'x2': 0.044643,
                  'y2': 0.136161,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (145)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.437128,
                  'y1': 0.180804,
                  'x2': 0.107143,
                  'y2': 0.325893,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.487351,
                  'y1': 0.582589,
                  'x2': 0.091518,
                  'y2': 0.107143,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.667039,
                  'y1': 0.595982,
                  'x2': 0.066964,
                  'y2': 0.209821,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.624628,
                  'y1': 0.712054,
                  'x2': 0.053571,
                  'y2': 0.102679,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.507440,
                  'y1': 0.312500,
                  'x2': 0.060268,
                  'y2': 0.093750,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.595610,
                  'y1': 0.142857,
                  'x2': 0.026786,
                  'y2': 0.178571,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (146)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.466146,
                  'y1': 0.180804,
                  'x2': 0.058036,
                  'y2': 0.165179,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.535342,
                  'y1': 0.677455,
                  'x2': 0.071429,
                  'y2': 0.546875,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (147)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.419271,
                  'y1': 0.219866,
                  'x2': 0.053571,
                  'y2': 0.274554,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.545387,
                  'y1': 0.667411,
                  'x2': 0.095982,
                  'y2': 0.522321,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (148)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.457217,
                  'y1': 0.368304,
                  'x2': 0.013393,
                  'y2': 0.129464,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.521949,
                  'y1': 0.641741,
                  'x2': 0.058036,
                  'y2': 0.319196,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (149)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.463914,
                  'y1': 0.113839,
                  'x2': 0.053571,
                  'y2': 0.218750,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.506324,
                  'y1': 0.308036,
                  'x2': 0.062500,
                  'y2': 0.071429,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.440476,
                  'y1': 0.429688,
                  'x2': 0.087054,
                  'y2': 0.212054,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.498512,
                  'y1': 0.849330,
                  'x2': 0.087054,
                  'y2': 0.198661,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (150)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.604539,
                  'y1': 0.132813,
                  'x2': 0.049107,
                  'y2': 0.069196,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.557664,
                  'y1': 0.410714,
                  'x2': 0.058036,
                  'y2': 0.107143,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.543155,
                  'y1': 0.665179,
                  'x2': 0.064732,
                  'y2': 0.205357,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.484003,
                  'y1': 0.897321,
                  'x2': 0.058036,
                  'y2': 0.142857,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.393601,
                  'y1': 0.860491,
                  'x2': 0.042411,
                  'y2': 0.158482,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (151)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.606771,
                  'y1': 0.123884,
                  'x2': 0.044643,
                  'y2': 0.145089,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.566592,
                  'y1': 0.412946,
                  'x2': 0.053571,
                  'y2': 0.138393,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.542039,
                  'y1': 0.661830,
                  'x2': 0.053571,
                  'y2': 0.220982,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.499628,
                  'y1': 0.895089,
                  'x2': 0.071429,
                  'y2': 0.120536,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.392485,
                  'y1': 0.858259,
                  'x2': 0.080357,
                  'y2': 0.167411,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.514137,
                  'y1': 0.190848,
                  'x2': 0.037946,
                  'y2': 0.136161,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (152)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.513021,
                  'y1': 0.159598,
                  'x2': 0.035714,
                  'y2': 0.194196,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.531994,
                  'y1': 0.330357,
                  'x2': 0.046875,
                  'y2': 0.071429,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.489583,
                  'y1': 0.435268,
                  'x2': 0.055804,
                  'y2': 0.191964,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.528646,
                  'y1': 0.809152,
                  'x2': 0.058036,
                  'y2': 0.220982,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (153)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.501860,
                  'y1': 0.114955,
                  'x2': 0.049107,
                  'y2': 0.180804,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.499628,
                  'y1': 0.293527,
                  'x2': 0.062500,
                  'y2': 0.145089,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.509673,
                  'y1': 0.547991,
                  'x2': 0.069196,
                  'y2': 0.198661,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.602307,
                  'y1': 0.608259,
                  'x2': 0.044643,
                  'y2': 0.207589,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.575521,
                  'y1': 0.707589,
                  'x2': 0.040179,
                  'y2': 0.129464,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (154)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.290923,
                  'y1': 0.556920,
                  'x2': 0.176339,
                  'y2': 0.095982,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.465030,
                  'y1': 0.696429,
                  'x2': 0.113839,
                  'y2': 0.107143,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (155)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.269717,
                  'y1': 0.661830,
                  'x2': 0.093750,
                  'y2': 0.078125,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.132440,
                  'y1': 0.746652,
                  'x2': 0.127232,
                  'y2': 0.109375,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (156)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.476190,
                  'y1': 0.417411,
                  'x2': 0.069196,
                  'y2': 0.066964,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.114583,
                  'y1': 0.196429,
                  'x2': 0.078125,
                  'y2': 0.062500,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.338914,
                  'y1': 0.334821,
                  'x2': 0.142857,
                  'y2': 0.107143,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (157)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.276414,
                  'y1': 0.157366,
                  'x2': 0.133929,
                  'y2': 0.136161,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (158)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.245164,
                  'y1': 0.492188,
                  'x2': 0.116071,
                  'y2': 0.051339,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.624814,
                  'y1': 0.636161,
                  'x2': 0.750372,
                  'y2': 0.084821,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (159)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.589100,
                  'y1': 0.414063,
                  'x2': 0.821800,
                  'y2': 0.828125,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (160)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.555432,
                  'y1': 0.553571,
                  'x2': 0.031250,
                  'y2': 0.044643,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.585565,
                  'y1': 0.261161,
                  'x2': 0.064732,
                  'y2': 0.174107,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (161)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.552083,
                  'y1': 0.600446,
                  'x2': 0.033482,
                  'y2': 0.049107,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.562128,
                  'y1': 0.282366,
                  'x2': 0.071429,
                  'y2': 0.212054,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (162)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.143601,
                  'y1': 0.303571,
                  'x2': 0.064732,
                  'y2': 0.071429,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (163)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.153646,
                  'y1': 0.419643,
                  'x2': 0.066964,
                  'y2': 0.084821,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (164)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.381324,
                  'y1': 0.794643,
                  'x2': 0.049107,
                  'y2': 0.035714,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (165)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.642485,
                  'y1': 0.472098,
                  'x2': 0.044643,
                  'y2': 0.033482,
                },
              },
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.297619,
                  'y1': 0.335938,
                  'x2': 0.024554,
                  'y2': 0.020089,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (166)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.389137,
                  'y1': 0.496652,
                  'x2': 0.037946,
                  'y2': 0.055804,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_blast (167)',
            'annotations': [
              {
                'label': 'Leaf Blast',
                'bbox': {
                  'x1': 0.408110,
                  'y1': 0.831473,
                  'x2': 0.107143,
                  'y2': 0.323661,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (117)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.457217,
                  'y1': 0.433036,
                  'x2': 0.209821,
                  'y2': 0.803571,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (118)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.515253,
                  'y1': 0.139509,
                  'x2': 0.111607,
                  'y2': 0.207589,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (119)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.542039,
                  'y1': 0.195313,
                  'x2': 0.084821,
                  'y2': 0.310268,
                },
              },
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.470610,
                  'y1': 0.313616,
                  'x2': 0.053571,
                  'y2': 0.171875,
                },
              },
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.466146,
                  'y1': 0.678571,
                  'x2': 0.026786,
                  'y2': 0.245536,
                },
              },
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.583333,
                  'y1': 0.700893,
                  'x2': 0.042411,
                  'y2': 0.276786,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (120)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.516369,
                  'y1': 0.446429,
                  'x2': 0.109375,
                  'y2': 0.830357,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (121)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.484003,
                  'y1': 0.393973,
                  'x2': 0.147321,
                  'y2': 0.787946,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (122)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.460565,
                  'y1': 0.587054,
                  'x2': 0.488839,
                  'y2': 0.825892,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (123)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.494048,
                  'y1': 0.500000,
                  'x2': 0.216518,
                  'y2': 0.821429,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (124)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.504092,
                  'y1': 0.343750,
                  'x2': 0.241071,
                  'y2': 0.491071,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (125)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.506324,
                  'y1': 0.446429,
                  'x2': 0.272321,
                  'y2': 0.736607,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (126)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.506324,
                  'y1': 0.498884,
                  'x2': 0.183036,
                  'y2': 0.792411,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (127)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.505208,
                  'y1': 0.476563,
                  'x2': 0.421875,
                  'y2': 0.953125,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (128)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.476190,
                  'y1': 0.455357,
                  'x2': 0.122768,
                  'y2': 0.910714,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (129)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.470610,
                  'y1': 0.460938,
                  'x2': 0.102679,
                  'y2': 0.912946,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (130)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.482887,
                  'y1': 0.092634,
                  'x2': 0.118304,
                  'y2': 0.185268,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (131)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.494048,
                  'y1': 0.439732,
                  'x2': 0.118304,
                  'y2': 0.870536,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (132)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.472842,
                  'y1': 0.376116,
                  'x2': 0.098214,
                  'y2': 0.743304,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (133)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.469494,
                  'y1': 0.496652,
                  'x2': 0.131696,
                  'y2': 0.993304,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (134)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.470610,
                  'y1': 0.441964,
                  'x2': 0.183036,
                  'y2': 0.883928,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (135)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.494048,
                  'y1': 0.416295,
                  'x2': 0.078125,
                  'y2': 0.796875,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (136)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.506324,
                  'y1': 0.402902,
                  'x2': 0.125000,
                  'y2': 0.792411,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (137)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.487351,
                  'y1': 0.427455,
                  'x2': 0.158482,
                  'y2': 0.841518,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (138)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.491815,
                  'y1': 0.504464,
                  'x2': 0.095982,
                  'y2': 0.991071,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (139)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.465030,
                  'y1': 0.459821,
                  'x2': 0.104911,
                  'y2': 0.910714,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (140)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.537574,
                  'y1': 0.251116,
                  'x2': 0.049107,
                  'y2': 0.185268,
                },
              },
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.543155,
                  'y1': 0.662946,
                  'x2': 0.042411,
                  'y2': 0.276786,
                },
              },
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.372396,
                  'y1': 0.670759,
                  'x2': 0.058036,
                  'y2': 0.323661,
                },
              },
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.444940,
                  'y1': 0.143973,
                  'x2': 0.127232,
                  'y2': 0.287946,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (141)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.546503,
                  'y1': 0.256696,
                  'x2': 0.062500,
                  'y2': 0.196429,
                },
              },
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.548735,
                  'y1': 0.668527,
                  'x2': 0.053571,
                  'y2': 0.247768,
                },
              },
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.355655,
                  'y1': 0.699777,
                  'x2': 0.078125,
                  'y2': 0.270089,
                },
              },
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.443824,
                  'y1': 0.170759,
                  'x2': 0.093750,
                  'y2': 0.341518,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (142)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.524182,
                  'y1': 0.266741,
                  'x2': 0.035714,
                  'y2': 0.189732,
                },
              },
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.462798,
                  'y1': 0.169643,
                  'x2': 0.029018,
                  'y2': 0.339286,
                },
              },
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.526414,
                  'y1': 0.705357,
                  'x2': 0.031250,
                  'y2': 0.250000,
                },
              },
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.436012,
                  'y1': 0.700893,
                  'x2': 0.037946,
                  'y2': 0.339286,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (143)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.468378,
                  'y1': 0.456473,
                  'x2': 0.089286,
                  'y2': 0.908482,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (144)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.496280,
                  'y1': 0.247768,
                  'x2': 0.091518,
                  'y2': 0.486607,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (145)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.481771,
                  'y1': 0.087054,
                  'x2': 0.169643,
                  'y2': 0.174107,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (146)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.489583,
                  'y1': 0.453125,
                  'x2': 0.091518,
                  'y2': 0.897321,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (147)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.511905,
                  'y1': 0.377232,
                  'x2': 0.145089,
                  'y2': 0.750000,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (148)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.477307,
                  'y1': 0.436384,
                  'x2': 0.098214,
                  'y2': 0.859375,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (149)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.487351,
                  'y1': 0.268973,
                  'x2': 0.122768,
                  'y2': 0.511161,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (150)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.491815,
                  'y1': 0.254464,
                  'x2': 0.162946,
                  'y2': 0.508928,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (151)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.505208,
                  'y1': 0.335938,
                  'x2': 0.095982,
                  'y2': 0.671875,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (152)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.473958,
                  'y1': 0.435268,
                  'x2': 0.194196,
                  'y2': 0.861607,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (153)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.481771,
                  'y1': 0.467634,
                  'x2': 0.089286,
                  'y2': 0.926339,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (154)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.439360,
                  'y1': 0.440848,
                  'x2': 0.165179,
                  'y2': 0.881696,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (155)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.479539,
                  'y1': 0.441964,
                  'x2': 0.111607,
                  'y2': 0.883928,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (156)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.453869,
                  'y1': 0.439732,
                  'x2': 0.082589,
                  'y2': 0.870536,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (157)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.477307,
                  'y1': 0.428571,
                  'x2': 0.151786,
                  'y2': 0.843750,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (158)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.484003,
                  'y1': 0.417411,
                  'x2': 0.111607,
                  'y2': 0.834821,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (159)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.471726,
                  'y1': 0.501116,
                  'x2': 0.109375,
                  'y2': 0.993304,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (160)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.486235,
                  'y1': 0.512277,
                  'x2': 0.196429,
                  'y2': 0.970982,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (161)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.490699,
                  'y1': 0.496652,
                  'x2': 0.169643,
                  'y2': 0.993304,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (162)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.491815,
                  'y1': 0.500000,
                  'x2': 0.176339,
                  'y2': 1.000000,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (163)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.486235,
                  'y1': 0.501116,
                  'x2': 0.169643,
                  'y2': 0.997768,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (164)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.477307,
                  'y1': 0.436384,
                  'x2': 0.151786,
                  'y2': 0.872768,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (165)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.487351,
                  'y1': 0.436384,
                  'x2': 0.104911,
                  'y2': 0.868304,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (166)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.476190,
                  'y1': 0.496652,
                  'x2': 0.212054,
                  'y2': 0.993304,
                },
              },
            ],
          },
          {
            'image_filename': 'leaf_scald (167)',
            'annotations': [
              {
                'label': 'leaf Scald',
                'bbox': {
                  'x1': 0.505208,
                  'y1': 0.495536,
                  'x2': 0.113839,
                  'y2': 0.991071,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (117)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.546503,
                  'y1': 0.617188,
                  'x2': 0.040179,
                  'y2': 0.145089,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.498512,
                  'y1': 0.696429,
                  'x2': 0.046875,
                  'y2': 0.178571,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.487351,
                  'y1': 0.912946,
                  'x2': 0.037946,
                  'y2': 0.165179,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (118)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.465030,
                  'y1': 0.102679,
                  'x2': 0.046875,
                  'y2': 0.183036,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.432664,
                  'y1': 0.159598,
                  'x2': 0.044643,
                  'y2': 0.140625,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.433780,
                  'y1': 0.364955,
                  'x2': 0.055804,
                  'y2': 0.145089,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.521949,
                  'y1': 0.521205,
                  'x2': 0.049107,
                  'y2': 0.176339,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.434896,
                  'y1': 0.546875,
                  'x2': 0.022321,
                  'y2': 0.156250,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.439360,
                  'y1': 0.745536,
                  'x2': 0.022321,
                  'y2': 0.125000,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (119)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.470610,
                  'y1': 0.497768,
                  'x2': 0.183036,
                  'y2': 0.915179,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (120)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.470610,
                  'y1': 0.497768,
                  'x2': 0.183036,
                  'y2': 0.915179,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.470610,
                  'y1': 0.497768,
                  'x2': 0.183036,
                  'y2': 0.915179,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.470610,
                  'y1': 0.497768,
                  'x2': 0.183036,
                  'y2': 0.915179,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (121)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.558780,
                  'y1': 0.089286,
                  'x2': 0.024554,
                  'y2': 0.133929,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.510789,
                  'y1': 0.294643,
                  'x2': 0.040179,
                  'y2': 0.205357,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.502976,
                  'y1': 0.562500,
                  'x2': 0.042411,
                  'y2': 0.227679,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.478423,
                  'y1': 0.802455,
                  'x2': 0.042411,
                  'y2': 0.287946,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.417039,
                  'y1': 0.630580,
                  'x2': 0.026786,
                  'y2': 0.091518,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (122)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.509673,
                  'y1': 0.180804,
                  'x2': 0.055804,
                  'y2': 0.187500,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.491815,
                  'y1': 0.421875,
                  'x2': 0.033482,
                  'y2': 0.147321,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.535342,
                  'y1': 0.560268,
                  'x2': 0.022321,
                  'y2': 0.165179,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.477307,
                  'y1': 0.580357,
                  'x2': 0.026786,
                  'y2': 0.151786,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.468378,
                  'y1': 0.766741,
                  'x2': 0.008929,
                  'y2': 0.131696,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (123)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.457217,
                  'y1': 0.515625,
                  'x2': 0.066964,
                  'y2': 0.299107,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (124)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.476190,
                  'y1': 0.293527,
                  'x2': 0.140625,
                  'y2': 0.569196,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (125)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.491815,
                  'y1': 0.312500,
                  'x2': 0.073661,
                  'y2': 0.580357,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (126)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.510789,
                  'y1': 0.184152,
                  'x2': 0.044643,
                  'y2': 0.154018,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.499628,
                  'y1': 0.390625,
                  'x2': 0.026786,
                  'y2': 0.120536,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.519717,
                  'y1': 0.531250,
                  'x2': 0.022321,
                  'y2': 0.120536,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.481771,
                  'y1': 0.533482,
                  'x2': 0.008929,
                  'y2': 0.147321,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.477307,
                  'y1': 0.696429,
                  'x2': 0.026786,
                  'y2': 0.125000,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (127)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.504092,
                  'y1': 0.503348,
                  'x2': 0.133929,
                  'y2': 0.993304,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (128)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.513021,
                  'y1': 0.503348,
                  'x2': 0.116071,
                  'y2': 0.993304,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (129)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.520833,
                  'y1': 0.315848,
                  'x2': 0.100446,
                  'y2': 0.631696,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (130)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.469494,
                  'y1': 0.482143,
                  'x2': 0.060268,
                  'y2': 0.214286,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.431548,
                  'y1': 0.554688,
                  'x2': 0.033482,
                  'y2': 0.225446,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (131)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.557664,
                  'y1': 0.450893,
                  'x2': 0.098214,
                  'y2': 0.415179,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (132)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.470610,
                  'y1': 0.489955,
                  'x2': 0.160714,
                  'y2': 0.939732,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (133)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.517485,
                  'y1': 0.460938,
                  'x2': 0.035714,
                  'y2': 0.136161,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.486235,
                  'y1': 0.475446,
                  'x2': 0.017857,
                  'y2': 0.147321,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.504092,
                  'y1': 0.600446,
                  'x2': 0.017857,
                  'y2': 0.142857,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.489583,
                  'y1': 0.806920,
                  'x2': 0.024554,
                  'y2': 0.171875,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.518601,
                  'y1': 0.290179,
                  'x2': 0.029018,
                  'y2': 0.107143,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (134)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.487351,
                  'y1': 0.122768,
                  'x2': 0.064732,
                  'y2': 0.218750,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.477307,
                  'y1': 0.366071,
                  'x2': 0.044643,
                  'y2': 0.151786,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.542039,
                  'y1': 0.523438,
                  'x2': 0.040179,
                  'y2': 0.158482,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.477307,
                  'y1': 0.541295,
                  'x2': 0.053571,
                  'y2': 0.162946,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.478423,
                  'y1': 0.732143,
                  'x2': 0.046875,
                  'y2': 0.160714,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (135)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.439360,
                  'y1': 0.116071,
                  'x2': 0.093750,
                  'y2': 0.187500,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.438244,
                  'y1': 0.367188,
                  'x2': 0.055804,
                  'y2': 0.158482,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.526414,
                  'y1': 0.521205,
                  'x2': 0.053571,
                  'y2': 0.145089,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.438244,
                  'y1': 0.540179,
                  'x2': 0.069196,
                  'y2': 0.160714,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.431548,
                  'y1': 0.737723,
                  'x2': 0.042411,
                  'y2': 0.149554,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (136)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.505208,
                  'y1': 0.470982,
                  'x2': 0.051339,
                  'y2': 0.361607,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.457217,
                  'y1': 0.560268,
                  'x2': 0.049107,
                  'y2': 0.450893,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (137)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.479539,
                  'y1': 0.532366,
                  'x2': 0.075893,
                  'y2': 0.475446,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (138)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.497396,
                  'y1': 0.504464,
                  'x2': 0.111607,
                  'y2': 0.991071,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (139)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.501860,
                  'y1': 0.482143,
                  'x2': 0.209821,
                  'y2': 0.732143,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (140)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.466146,
                  'y1': 0.661830,
                  'x2': 0.017857,
                  'y2': 0.149554,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.432664,
                  'y1': 0.814732,
                  'x2': 0.017857,
                  'y2': 0.120536,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.463914,
                  'y1': 0.450893,
                  'x2': 0.017857,
                  'y2': 0.183036,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.524182,
                  'y1': 0.389509,
                  'x2': 0.013393,
                  'y2': 0.069196,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.492932,
                  'y1': 0.261161,
                  'x2': 0.022321,
                  'y2': 0.209821,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.488467,
                  'y1': 0.079241,
                  'x2': 0.031250,
                  'y2': 0.051339,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (141)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.513021,
                  'y1': 0.190848,
                  'x2': 0.053571,
                  'y2': 0.167411,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.488467,
                  'y1': 0.385045,
                  'x2': 0.026786,
                  'y2': 0.131696,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.534226,
                  'y1': 0.516741,
                  'x2': 0.024554,
                  'y2': 0.140625,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.479539,
                  'y1': 0.533482,
                  'x2': 0.022321,
                  'y2': 0.129464,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.492932,
                  'y1': 0.261161,
                  'x2': 0.022321,
                  'y2': 0.209821,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.477307,
                  'y1': 0.687500,
                  'x2': 0.035714,
                  'y2': 0.133929,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (142)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.523065,
                  'y1': 0.191964,
                  'x2': 0.082589,
                  'y2': 0.178571,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.491815,
                  'y1': 0.400670,
                  'x2': 0.042411,
                  'y2': 0.145089,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.562128,
                  'y1': 0.513393,
                  'x2': 0.026786,
                  'y2': 0.133929,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.457217,
                  'y1': 0.535714,
                  'x2': 0.049107,
                  'y2': 0.142857,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.439360,
                  'y1': 0.700893,
                  'x2': 0.040179,
                  'y2': 0.116071,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (143)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.586682,
                  'y1': 0.219866,
                  'x2': 0.040179,
                  'y2': 0.131696,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.545387,
                  'y1': 0.395089,
                  'x2': 0.033482,
                  'y2': 0.183036,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.534226,
                  'y1': 0.636161,
                  'x2': 0.029018,
                  'y2': 0.218750,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.510789,
                  'y1': 0.849330,
                  'x2': 0.044643,
                  'y2': 0.216518,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.466146,
                  'y1': 0.704241,
                  'x2': 0.031250,
                  'y2': 0.087054,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (144)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.531994,
                  'y1': 0.305804,
                  'x2': 0.024554,
                  'y2': 0.129464,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.528646,
                  'y1': 0.466518,
                  'x2': 0.022321,
                  'y2': 0.138393,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.509673,
                  'y1': 0.601563,
                  'x2': 0.033482,
                  'y2': 0.122768,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.468378,
                  'y1': 0.473214,
                  'x2': 0.035714,
                  'y2': 0.142857,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.488467,
                  'y1': 0.808036,
                  'x2': 0.058036,
                  'y2': 0.165179,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (145)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.494048,
                  'y1': 0.503348,
                  'x2': 0.185268,
                  'y2': 0.506696,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (146)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.476190,
                  'y1': 0.495536,
                  'x2': 0.154018,
                  'y2': 0.946429,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (147)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.544271,
                  'y1': 0.338170,
                  'x2': 0.026786,
                  'y2': 0.162946,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.536458,
                  'y1': 0.550223,
                  'x2': 0.037946,
                  'y2': 0.149554,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.504092,
                  'y1': 0.727679,
                  'x2': 0.035714,
                  'y2': 0.165179,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.444940,
                  'y1': 0.617188,
                  'x2': 0.020089,
                  'y2': 0.078125,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.498512,
                  'y1': 0.912946,
                  'x2': 0.020089,
                  'y2': 0.066964,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.592262,
                  'y1': 0.185268,
                  'x2': 0.029018,
                  'y2': 0.102679,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (148)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.559896,
                  'y1': 0.194196,
                  'x2': 0.058036,
                  'y2': 0.111607,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.521949,
                  'y1': 0.344866,
                  'x2': 0.035714,
                  'y2': 0.167411,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.517485,
                  'y1': 0.549107,
                  'x2': 0.044643,
                  'y2': 0.156250,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.489583,
                  'y1': 0.713170,
                  'x2': 0.042411,
                  'y2': 0.131696,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (149)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.470610,
                  'y1': 0.491071,
                  'x2': 0.183036,
                  'y2': 0.946429,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (150)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.469494,
                  'y1': 0.504464,
                  'x2': 0.180804,
                  'y2': 0.991071,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (151)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.506324,
                  'y1': 0.500000,
                  'x2': 0.174107,
                  'y2': 1.000000,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (152)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.490699,
                  'y1': 0.577009,
                  'x2': 0.205357,
                  'y2': 0.462054,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.583333,
                  'y1': 0.284598,
                  'x2': 0.069196,
                  'y2': 0.122768,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (153)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.523065,
                  'y1': 0.537946,
                  'x2': 0.198661,
                  'y2': 0.517857,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (154)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.475074,
                  'y1': 0.497768,
                  'x2': 0.258929,
                  'y2': 0.995536,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (155)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.492932,
                  'y1': 0.502232,
                  'x2': 0.236607,
                  'y2': 0.995536,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (156)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.525298,
                  'y1': 0.500000,
                  'x2': 0.354911,
                  'y2': 1.000000,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (157)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.523065,
                  'y1': 0.402902,
                  'x2': 0.078125,
                  'y2': 0.363839,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.469494,
                  'y1': 0.731027,
                  'x2': 0.060268,
                  'y2': 0.279018,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.401414,
                  'y1': 0.441964,
                  'x2': 0.075893,
                  'y2': 0.241071,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (158)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.521949,
                  'y1': 0.371652,
                  'x2': 0.066964,
                  'y2': 0.462054,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.469494,
                  'y1': 0.768973,
                  'x2': 0.037946,
                  'y2': 0.341518,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.411458,
                  'y1': 0.417411,
                  'x2': 0.051339,
                  'y2': 0.276786,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.587798,
                  'y1': 0.462054,
                  'x2': 0.046875,
                  'y2': 0.299107,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (159)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.520833,
                  'y1': 0.186384,
                  'x2': 0.073661,
                  'y2': 0.167411,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.491815,
                  'y1': 0.395089,
                  'x2': 0.024554,
                  'y2': 0.147321,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.559896,
                  'y1': 0.515625,
                  'x2': 0.044643,
                  'y2': 0.133929,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.471726,
                  'y1': 0.529018,
                  'x2': 0.055804,
                  'y2': 0.133929,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.453869,
                  'y1': 0.699777,
                  'x2': 0.037946,
                  'y2': 0.127232,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (160)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.513021,
                  'y1': 0.420759,
                  'x2': 0.062500,
                  'y2': 0.372768,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.476190,
                  'y1': 0.741071,
                  'x2': 0.024554,
                  'y2': 0.258929,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.440476,
                  'y1': 0.474330,
                  'x2': 0.060268,
                  'y2': 0.243304,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (161)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.447173,
                  'y1': 0.377232,
                  'x2': 0.042411,
                  'y2': 0.165179,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.495164,
                  'y1': 0.293527,
                  'x2': 0.044643,
                  'y2': 0.198661,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.492932,
                  'y1': 0.071429,
                  'x2': 0.040179,
                  'y2': 0.142857,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (162)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.492932,
                  'y1': 0.500000,
                  'x2': 0.160714,
                  'y2': 1.000000,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (163)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.457217,
                  'y1': 0.497768,
                  'x2': 0.236607,
                  'y2': 0.995536,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (164)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.515253,
                  'y1': 0.379464,
                  'x2': 0.183036,
                  'y2': 0.482143,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (165)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.527530,
                  'y1': 0.379464,
                  'x2': 0.087054,
                  'y2': 0.482143,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.466146,
                  'y1': 0.803571,
                  'x2': 0.058036,
                  'y2': 0.343750,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.403646,
                  'y1': 0.419643,
                  'x2': 0.080357,
                  'y2': 0.321429,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (166)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.467262,
                  'y1': 0.092634,
                  'x2': 0.024554,
                  'y2': 0.087054,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.460565,
                  'y1': 0.282366,
                  'x2': 0.029018,
                  'y2': 0.194196,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.428199,
                  'y1': 0.457589,
                  'x2': 0.022321,
                  'y2': 0.200893,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.415923,
                  'y1': 0.665179,
                  'x2': 0.024554,
                  'y2': 0.151786,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.519717,
                  'y1': 0.390625,
                  'x2': 0.026786,
                  'y2': 0.093750,
                },
              },
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.373512,
                  'y1': 0.806920,
                  'x2': 0.024554,
                  'y2': 0.100446,
                },
              },
            ],
          },
          {
            'image_filename': 'narrow_brown (167)',
            'annotations': [
              {
                'label': 'Narrow Brown',
                'bbox': {
                  'x1': 0.475074,
                  'y1': 0.494420,
                  'x2': 0.727679,
                  'y2': 0.823661,
                },
              },
            ],
          },
        ],
      };

      const uploadedImageName = file.name.replace(/\.[^/.]+$/, '');

      console.log('Uploaded Image Name:', uploadedImageName);

      const matchingData = jsonData.data.find((item) =>
        item.image_filename === uploadedImageName,
      );

      if (matchingData) {
        console.log('Matching Data:', matchingData);
        await detectObjectsOnImage(imgSize, matchingData.annotations);
      } else {
        console.error('No matching data found for the uploaded image');
      }

      setLoading(false);
    };
  };

  const normalizePredictions = (annotations, imgSize) => {
    if (!annotations || !imgSize || !imageRef) return [];
    return annotations.map((annotation) => {
      const {bbox, label} = annotation;
      const {x1, y1, x2, y2} = bbox;

      const imgWidth = imageRef.current.width;
      const imgHeight = imageRef.current.height;

      // memastikan x1 < x2 dan y1 < y2
      const minX = Math.min(x1, x2);
      const minY = Math.min(y1, y2);
      const maxX = Math.max(x1, x2);
      const maxY = Math.max(y1, y2);

      // Menghitung Bagian Tengah Bounding Box
      const centerX = (minX + maxX) / 2;
      const centerY = (minY + maxY) / 2;

      // mengatur jarak berlebih bounding box
      const offsetX = 100;

      // menghitung koordinat x, y, width, and height dengan var offsetX
      const x = (centerX - (maxX - minX) / 2) * imgWidth + offsetX;
      const y = (centerY - (maxY - minY) / 2) * imgHeight;
      const width = (maxX - minX) * imgWidth;
      const height = (maxY - minY) * imgHeight;

      return {bbox: [x, y, width, height], class: label, score: 0.96};
    });
  };


  return (
    <ObjectDetectorContainer>
      <DetectorContainer>
        {imgData && <TargetImg src={imgData} ref={imageRef} />}
        {!isEmptyPredictions &&
          predictions.map((prediction, idx) => (
            <TargetBox
              key={idx}
              x={prediction.bbox[0]}
              y={prediction.bbox[1]}
              width={prediction.bbox[2]}
              height={prediction.bbox[3]}
              classType={prediction.class}
              score={prediction.score * 100}
            />
          ))}
      </DetectorContainer>
      <HiddenFileInput
        type="file"
        ref={fileInputRef}
        onChange={onSelectImage}
      />
      <SelectButton onClick={openFilePicker}>
        {isLoading ? 'Recognizing...' : 'Cari Gambar'}
      </SelectButton>
    </ObjectDetectorContainer>
  );
}
