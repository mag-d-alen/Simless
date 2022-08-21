import { AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import React from "react";
import { faqData } from "../../countries";
import { AccordionItem } from "./accordion/Accordion";

export const FAQ = () => {



  return (<>{faqData.map(datum => <AccordionItem faqData={ datum}></AccordionItem>)}</>)
};
