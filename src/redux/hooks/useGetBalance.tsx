import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getData } from "../../functions/getData";

export const useGetBalance = () => {
  const userNumber = useSelector((s: any) => s.info.userNumber);
  const [data, setData] = useState<any>();
  useEffect(() => {
    if (!userNumber) return;
    setData(getData({ route: "balance", params: userNumber }));
  }, [userNumber]);
  return data;
};
