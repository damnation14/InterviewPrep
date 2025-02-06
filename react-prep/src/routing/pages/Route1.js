import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Route1 = (props) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/route2");
  };
  return (
    <>
      <button onClick={handleButtonClick}>hehe</button>
    </>
  );
};

export default Route1;
