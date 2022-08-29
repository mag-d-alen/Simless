import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setChosenDeal } from "../../../redux/SimPurchaseSlice";
import { setCheckoutStep } from "../../../redux/TopUpSlice";
import { Button } from "../../general.styled";
import { ChipIcon } from "./ChipIcon";
import {
  DealCardContainer,
  DealCardTitle,
  DealCardBody,
  DealCardCountries,
  DealCardPrice,
  DealCardButtons,
  DealCardGigaOption,
} from "./deals.styled";

export const DealCard: React.FC<{ name: string; countries: string[] }> = ({
  name,
  countries,
}) => {
  const [chosen, setChosen] = useState({ name: "", ticked: "" });
    const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  dispatch(setChosenDeal(chosen));
    dispatch(setCheckoutStep(2));
  };
  return (
    <DealCardContainer>
      <DealCardTitle>
        <ChipIcon></ChipIcon>
        {name}
      </DealCardTitle>
      <DealCardCountries>{countries}</DealCardCountries>
      <form onSubmit={(e) => handleSubmit(e)}>
        <DealCardBody>
          {["1G", "3G", "5G"].map((g) => {
            return (
              <DealCardGigaOption>
                {g}
                <input
                  type="checkbox"
                  value={g}
                  checked={name === chosen.name && g === chosen.ticked}
                  onChange={(e) => {
                    setChosen({
                      name: name,
                      ticked:
                        chosen.ticked === e.target.value ? "" : e.target.value,
                    });
                  }}
                />
              </DealCardGigaOption>
            );
          })}
        </DealCardBody>
        <DealCardPrice>180 ש`ח</DealCardPrice>
        <DealCardButtons>
          <Button id="pay" type="submit">
           Checkout
          </Button>
          <Button id="cart" type="submit">
            Add To Cart
          </Button>
        </DealCardButtons>
      </form>
    </DealCardContainer>
  );
};
