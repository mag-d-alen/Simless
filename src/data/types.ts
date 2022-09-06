import { MultiValue } from "react-select";
export type InitialTopuUpState = {
  topUpSimNumber: string;
  invoice: InvoiceType | null;
  payment: InvoiceType | null;
  checkoutStep: number;
  topUpAmount: string;
  orderId: number;
};
export type InvoiceType = {
  first_Name: string;
  last_Name: string;
  sim: string;
  email: string;
  phone?: string;
  additionalPhone?: string;
  oneForm?: boolean;
};
export type InitialInfoStateType = {
  selectedCountries?: string[];
  ratesService?: RatesService;
  loading?: boolean;
};
export type InitialSimPurchaseState = {
  chosenDeal:string[] 
}
export type InitialUserInfoType = {
  userSimNumber: string,
  simData: SimDataType
}
export type TopUpResponseType = {
  balance: number,
  amount: string,
    inum: string,
    onum: string,
    orderid: number,

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
