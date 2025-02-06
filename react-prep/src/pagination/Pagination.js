import React, { useState } from "react";

import { fruitsData } from "./data";

const Pagination = (props) => {
  // const [fruitsData, setFruitsData] = props;
  const [page, setPage] = useState(0);

  const handlePreviousClick = () => {
    setPage((prev) => prev - 1);
  };
  const handleNextClick = () => {
    setPage((prev) => prev + 1);
  };

  const fruits = fruitsData.slice(page * 10, page * 10 + 10);
  const fruitsList = fruits.map((fruit) => <li>{fruit}</li>);
  return (
    <>
      <ul>{fruitsList}</ul>
      <div>
        {page > 0 ? (
          <button onClick={handlePreviousClick}>Previous</button>
        ) : null}
        <button onClick={handleNextClick}>Next</button>
      </div>
    </>
  );
};

export default Pagination;
