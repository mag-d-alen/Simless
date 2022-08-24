import { MultiValue } from "react-select";
export type ContextType = {
  selectedCountries?: SelectedCountryType | undefined;
  setSelectedCountries: (counties: SelectedCountryType) => void;
};
export type SelectedCountryType = MultiValue<{ value: string; label: string }>;
export type AccordionItemType = { title: string; content: string }[];
export type AccordionContentType = {
  accordionContent: AccordionItemType;
  refs: any;
  currentAccordion: number;
  setCurrentAccordion: (current: number | null) => void;
  bodyHeight: number;
  setBodyHeight: (height: any) => void;
};
