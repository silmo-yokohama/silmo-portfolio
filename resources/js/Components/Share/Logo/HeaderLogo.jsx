import React from "react";
import { getActiveTheme } from "@/Functions/common";
import { Themes } from "@/Redux/themeChangerSlicer";

const HeaderLogo = (props) => {
  const { className, ...options } = props;
  const activeTheme = getActiveTheme();

  const imgPath =
    activeTheme === Themes.light
      ? "/images/logo/logo-h-black.png"
      : "/images/logo/logo-h-white.png";

  return <img src={imgPath} alt="SilMo" className={className} {...options} />;
};

export default HeaderLogo;
