import { toggleMenu } from "@/Redux/frontMenuSlicer";
import HamburgerCloseIcon from "@/Svg/HamburgerCloseIcon";
import HamburgerOpenIcon from "@/Svg/HamburgerOpenIcon";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const HamburgerButton = () => {
  const isOpen = useSelector((state) => state.menu.isOpen);
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    dispatch(toggleMenu());
  };

  return (
    <label className="btn btn-square swap swap-rotate bg-neutral-content border-none shadow-md outline-none hover:bg-neutral-content">
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        className="hidden"
        onChange={onChangeHandler}
        checked={isOpen}
      />

      {/* hamburger icon */}
      <HamburgerOpenIcon />

      {/* close icon */}
      <HamburgerCloseIcon />
    </label>
  );
};

export default HamburgerButton;
