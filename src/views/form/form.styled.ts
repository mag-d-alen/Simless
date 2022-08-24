import styled from "styled-components";
import { Field } from "formik";

export const InputLabel = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: smaller;
  flex: 1;
`;
export const FormEntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: smaller;
  align-items: center;
  width: 100%;
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-start;
  gap: 3rem;
  width: 100%;
`;
export const InputField = styled(Field)`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: aliceblue;
  border: none;
  border-radius: 0.3rem;
  margin: 0.5rem;
  padding: 0.3rem;
`;
export const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

export const PhoneContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ErrorAlert = styled.div`
  background-color: #ff0000b8;
  color: white;
  border: none;
  border-radius: 0.3rem;
  padding: 0.3rem;
  font-size: 0.5rem;
  margin: -0.5rem 0.5rem 0.5rem 0.5rem;
  text-transform: uppercase;
  font-weight: 500;
`;
