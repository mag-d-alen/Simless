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
export type RatesService = {
  serviceid_name: string;
  serviceid: string;
  VAT_coefficient: string;
  GPRS_plan: any;
  SMS_plan: any;
  Voice_plan: any;
  VAS: any[];
}[];
export type SimDataType = {
  aserviceid: string;
  balance: string;
  blocked: string;
  curr: string;
  inum: string;
  onum: string;
  prepayed: string;
  tsimid: string;
};
