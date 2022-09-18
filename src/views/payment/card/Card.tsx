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
}> = ({ name, card_Number, expiry_Date, cvv, flipped }) => (
  <CardImage flipped={flipped}>
    <CardName flipped={flipped}>{name}</CardName>
    <CardNumber flipped={flipped}>{card_Number}</CardNumber>
    <Chip flipped={flipped} />
    <CardSignature flipped={!flipped} />
    <CardStripe flipped={!flipped} />
    <CardCVV flipped={flipped}>{cvv}</CardCVV>
    <CardExpiry flipped={flipped}>valid thru</CardExpiry>
    <CardExpiryDate flipped={flipped}>{expiry_Date}</CardExpiryDate>
    <CardIssuer flipped={flipped}>Visa</CardIssuer>
  </CardImage>
);
