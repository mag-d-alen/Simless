import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getData } from "../../functions/getData";
import { setSimData } from "../UserInfoSlice";

export const useGetBalance = () => {
  const userSimNumber = useSelector((s: any) => s.userInfo.userSimNumber);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userSimNumber) return;
    try {
     getData({ route: "balance", params: userSimNumber }).then((data => {
      data ? dispatch(setSimData(data.data)) : null
    })) 
    } catch (error) {
      console.log(error)
    }
  }, [userSimNumber]);
};
