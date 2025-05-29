import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { restoreSession } from "./Authslice/Authslice";

const AppWrapper = ({ children }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const storeddata = JSON.parse(localStorage.getItem("loginData"));
  //   if (storeddata) {
  //     dispatch(restoreSession(storeddata));
  //   }
  // }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("loginData"));
    if (storedData) {
      dispatch(restoreSession(storedData));
    }
  }, []);

  return children;
};

export default AppWrapper;
