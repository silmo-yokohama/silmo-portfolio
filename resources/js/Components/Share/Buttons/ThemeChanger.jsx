import { Themes, themeToggle } from "@/Redux/themeChangerSlicer";
import DarkThemeIcon from "@/Svg/DarkThemeIcon";
import LightThemeIcon from "@/Svg/LightThemeIcon";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ThemeChanger = () => {
  const currentTheme = useSelector((state) => state.theme.activeTheme);
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    dispatch(themeToggle());
  };

  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        className="hidden"
        checked={currentTheme === Themes.dark}
        onChange={onChangeHandler}
      />

      {/* sun icon */}
      <LightThemeIcon
        className="swap-off h-10 w-10 fill-secondary"
        viewBox="0 0 24 24"
      />

      {/* moon icon */}
      <DarkThemeIcon
        className="swap-on h-10 w-10 fill-primary"
        viewBox="0 0 24 24"
      />
    </label>
  );
};

export default ThemeChanger;
