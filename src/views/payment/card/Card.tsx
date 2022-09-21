import React from "react";
import {
  CardCVV,
  CardExpiry,
  CardExpiryDate,
  CardImage,
  CardIssuer,
  CardName,
  CardNumber,
  CardSignature,
  CardStripe,
  Chip,
} from "./card.styled";

export const Card: React.FC<{
  name: string;
  card_Number: string;
  expiry_Date: string;
  cvv: string;
  flipped: boolean;
}> = ({ name, card_Number, expiry_Date, cvv, flipped }) => {
  const formatCardNumber = (num: string) =>
    `${num.slice(0, 4)} ${num.slice(4, 8)} ${num.slice(8, 12)} ${num.slice(
      12,
      16
    )}`;
  const formatDate = (date: string) =>
    `${date.slice(0, 2)}/${date.slice(2, 4)}`;

  return (
    <CardImage flipped={flipped}>
      <CardName flipped={flipped}>{name}</CardName>
      <CardNumber flipped={flipped}>{formatCardNumber(card_Number)}</CardNumber>
      <Chip flipped={flipped} />
      <CardSignature flipped={!flipped} />
      <CardStripe flipped={!flipped} />
      <CardCVV flipped={flipped}>{cvv}</CardCVV>
      <CardExpiry flipped={flipped}>valid thru</CardExpiry>
      <CardExpiryDate flipped={flipped}>
        {formatDate(expiry_Date)}
      </CardExpiryDate>
      <CardIssuer flipped={flipped}></CardIssuer>
    </CardImage>
  );
};
