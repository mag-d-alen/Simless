import React from "react";
import {
  CardCVC,
  CardExpiry,
  CardExpiryDate,
  CardImage,
  CardImageContainer,
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
  cvc: string;
  flipped: boolean;
}> = ({ name, card_Number, expiry_Date, cvc, flipped }) => (
  <CardImage flipped={flipped}>
    <CardName flipped={flipped}>{name}</CardName>
    <CardNumber flipped={flipped}>{card_Number}</CardNumber>
    <Chip flipped={flipped} />
    <CardSignature flipped={!flipped} />
    <CardStripe flipped={!flipped} />
    <CardCVC flipped={flipped}>{cvc}</CardCVC>
    <CardExpiry flipped={flipped}>valid thru</CardExpiry>
    <CardExpiryDate flipped={flipped}>{expiry_Date}</CardExpiryDate>
    <CardIssuer flipped={flipped}>Visa</CardIssuer>
  </CardImage>
);
