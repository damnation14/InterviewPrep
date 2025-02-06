import React, { useState } from "react";
import "./DebitCard.css";
import cards from "./cards.json";

export const DebitCard = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isDecrypted, setIsDecrypted] = useState(false);

  const handleCardClick = (index) => {
    setSelectedCard(cards[index]);
    setIsDecrypted(false); // Reset the decryption state when a new card is selected
  };

  const handleDetailClick = () => {
    setIsDecrypted(prevState => !prevState); // Toggle the decryption state
  };

  const maskCardNumber = (cardNumber) => {
    return `${cardNumber.slice(0, 4)} XXXX XXXX XXXX`;
  };

  const formatCardNumber = (cardNumber) => {
    return cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
  };

  const maskExpiryDate = () => {
    return "XX/XX";
  };

  const maskCVV = () => {
    return "XXX";
  };

  const maskName = (name) => {
    return name.split(" ").map(() => "XXXX").join(" ");
  };

  return (
    <div className="mt-50 layout-column justify-content-center align-items-center">
      <div className="card outlined" style={{ width: "1000px" }}>
        {selectedCard && (
          <div data-testid="debit-card" onClick={handleDetailClick}>
            <h3 style={{ textAlign: "center" }}>Card Details</h3>
            <br />
            <div className="debit-card-body" data-testid="debit-card-body">
              <p className="debit-card-bank" data-testid="debit-card-bank-name">
                {selectedCard.bank}
              </p>
              <p className="debit-card-no" data-testid="debit-card-no">
                {isDecrypted
                  ? formatCardNumber(selectedCard.number)
                  : maskCardNumber(selectedCard.number)}
              </p>
              <br />
              <div className="debit-card-stripe"></div>
              <p>
                <span
                  className="debit-card-holder-name"
                  data-testid="debit-card-holder-name"
                >
                  {isDecrypted
                    ? selectedCard.name
                    : maskName(selectedCard.name)}
                </span>
                <span
                  className="debit-card-date"
                  data-testid="debit-card-expiry-date"
                >
                  {isDecrypted
                    ? selectedCard.expiry
                    : maskExpiryDate()}
                </span>
                <span className="debit-card-cvv" data-testid="debit-card-cvv">
                  {isDecrypted
                    ? selectedCard.cvv
                    : maskCVV()}
                </span>
              </p>
            </div>
          </div>
        )}
        <div>
          <h3 style={{ textAlign: "center" }}>Cards List</h3>
          <div className="debit-card-list" data-testid="debit-card-list">
            {cards.map((card, index) => (
              <div
                key={index}
                className="list-card"
                data-testid={`list-card-${index}`}
                onClick={() => handleCardClick(index)}
              >
                <p className="list-card-title">Card {index + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
