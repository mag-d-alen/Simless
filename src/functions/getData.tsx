import axios from "axios";
import { url } from "../../../data/data";

export const getData = async ({
  route,
  params,
}: {
  route: string;
  params?: any;
}) => {
  try {
    const data = params
      ? await axios.get(`${url}/${route}${params}`)
      : await axios.get(`${url}/${route}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
