import React from "react";
import "./styles.css";

const dogImageUrls = [
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

const Flex = (props) => {
  const dogCards = dogImageUrls.map(makeDogCard);
  return <div className="dogContainer">{dogCards}</div>;
};

export default Flex;
