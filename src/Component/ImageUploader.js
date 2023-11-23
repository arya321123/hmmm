/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, {useState} from 'react';

const ImageUploader = ({onImageUpload}) => {
  const [image, setImage] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      setImage(URL.createObjectURL(file));
      onImageUpload(file);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    onImageUpload(file);
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={preventDefault}
      style={{border: '2px dashed #aaa', padding: '20px', textAlign: 'center', cursor: 'pointer'}}
    >
      <input type="file" accept="image/*" onChange={handleFileChange} style={{display: 'none'}} />
      <p>Tarik Gambar dan letakan atau cari di File</p>
      {image && <img src={image} alt="Uploaded" style={{maxWidth: '100%', maxHeight: '300px'}} />}
    </div>
  );
};

export default ImageUploader;
