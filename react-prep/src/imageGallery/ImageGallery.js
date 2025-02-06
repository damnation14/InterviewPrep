import React, { useState } from "react";
import "./styles.css";

const dogImageUrls = [
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
];

const makeDogCard = (dogImgUrl) => {
  return (
    <div className="dogCard">
      <img className="dogImage" src={dogImgUrl} alt=""></img>
      <p>this is doggo</p>
    </div>
  );
};

const ImageGallery = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {dogImageUrls.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery ${index}`}
          onClick={() => handleClick(image)}
          className="thumbnail"
        />
      ))}

      {selectedImage && (
        <div className="lightbox" onClick={handleClose}>
          <img src={selectedImage} alt="Selected" className="lightbox-image" />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
