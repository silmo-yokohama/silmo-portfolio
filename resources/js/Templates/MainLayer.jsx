import { themeChange } from "@/Redux/themeChangerSlicer";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const MainLayer = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const currentTheme = window.localStorage.getItem("theme");
    document.querySelector("body").style.marginBottom = "0";
    dispatch(themeChange(currentTheme));
  }, []);

  return <main className="t">{children}</main>;
};

export default MainLayer;
