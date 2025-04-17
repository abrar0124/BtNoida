import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { restoreSession } from "./Authslice/Authslice"; // update path if needed

const AppWrapper = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storeddata = JSON.parse(localStorage.getItem("loginData"));
    if (storeddata) {
      dispatch(restoreSession(storeddata));
    }
  }, []);

  return children;
};
export default AppWrapper;
