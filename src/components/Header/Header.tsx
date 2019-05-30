import * as React from "react";

import css from "./_Header.module.scss";

import { HeaderProps } from "./Header.type";

const Header: React.FC<HeaderProps> = ({ title }) => (
  <h1 className={css.header}>{title}</h1>
);

export default Header;
