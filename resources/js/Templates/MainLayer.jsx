import { themeChange } from "@/Redux/themeChangerSlicer";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const MainLayer = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const currentTheme = window.localStorage.getItem("theme");
    dispatch(themeChange(currentTheme));
  }, []);

  return <main>{children}</main>;
};

export default MainLayer;
