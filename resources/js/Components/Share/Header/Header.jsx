import React from "react";
import { css } from "@emotion/css";
import { useSelector } from "react-redux";

const headerStyle = css``;

const Header = () => {
  const isOpen = useSelector((state) => state.isOpen);
  return <header className="w-full fixed " css={headerStyle}></header>;
};

export default Header;
