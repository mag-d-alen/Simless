import {
  AccordionSummary,
  Typography,
  AccordionDetails,
  Accordion,
} from "@mui/material";
import React from "react";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

export const AccordionItem: React.FC<{
  faqData: { title: string; content: string };
}> = ({ faqData }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <Typography>{faqData.title}</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Typography>{faqData.content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
