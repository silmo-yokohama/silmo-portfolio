import React from "react";
import HeaderLogo from "../Logo/HeaderLogo";
import HamburgerButton from "../Buttons/HamburgerButton";
import ThemeChanger from "../Buttons/ThemeChanger";

const Header = () => {
  return (
    <header className="t w-full fixed bg-base-content z-10 h-[60px] md:h-[90px] px-5">
      <div className="w-full flex relative justify-start md:justify-center items-center h-full">
        <HeaderLogo className=" h-[50px] md:h-[70px]" />

        <div className=" absolute flex gap-2 md:gap-4 right-0 top-[50%] translate-y-[-50%]">
          <ThemeChanger />
          <HamburgerButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
