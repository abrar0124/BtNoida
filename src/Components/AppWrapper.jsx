import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { restoreSession } from "./Authslice/Authslice";

const AppWrapper = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const storeddata = JSON.parse(localStorage.getItem("loginData"));
    if (storeddata) {
      dispatch(restoreSession(storeddata));
      console.log(storeddata);
    }
  }, []);
  return children;
};

export default AppWrapper;
