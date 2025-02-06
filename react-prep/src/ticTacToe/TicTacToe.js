import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const getUpdatedBoardTileValues = (prevItems, index, newValue) => {
  const updatedItems = [...prevItems];
  updatedItems[index] = newValue;
  return updatedItems;
};

const checkIfPlayerWon = (boardTileValues) => {
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 3, 8],
  ];
  for (let pattern of winningPatterns) {
    const [a, b, c] = pattern;
    if (
      boardTileValues[a] &&
      boardTileValues[a] === boardTileValues[b] &&
      boardTileValues[a] === boardTileValues[c]
    ) {
      return boardTileValues[a];
    }
  }
  return undefined;
};

const TicTacToe = (props) => {
  const [boardTileValues, setBoardTileValues] = useState(Array(9).fill(null));
  const [isPlayerOne, setIsPlayerOne] = useState(true);

  const handleTileClick = (index) => () => {
    if (boardTileValues[index]) {
      return;
    }
    if (isPlayerOne) {
      setBoardTileValues((prevItems) => {
        return getUpdatedBoardTileValues(prevItems, index, "X");
      });
      setIsPlayerOne(false);
      return;
    }
    setBoardTileValues((prevItems) => {
      return getUpdatedBoardTileValues(prevItems, index, "O");
    });
    setIsPlayerOne(true);
  };

  const isGameOver = checkIfPlayerWon(boardTileValues);

  const makeTicTacToeTiles = (boardTileValue, index) => (
    <div className="ticTacToeTile" onClick={handleTileClick(index)}>
      {boardTileValue}
    </div>
  );

  const boardTiles = boardTileValues.map(makeTicTacToeTiles);

  return (
    <>
      <h1>tictac</h1>
      <div className="ticTacToeContainer">{boardTiles}</div>
      {isGameOver ? <div>game over</div> : null}
    </>
  );
};

export default TicTacToe;
