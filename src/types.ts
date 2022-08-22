import { MultiValue } from "react-select";
export type SelectedCountry = MultiValue<{ value: string; label: string }>;
export type AccordionItemType = { title: string; content: string }[];
export type AccordionContentType = {
  accordionContent: AccordionItemType;
  refs: any;
  currentAccordion: number;
  setCurrentAccordion: (current: number | null) => void;
  bodyHeight: number;
  setBodyHeight: (height: any) => void;
};
