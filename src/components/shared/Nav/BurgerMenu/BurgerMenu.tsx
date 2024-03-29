import React from "react";

import { BurgerIcon } from "./BurgerIcon/BurgerIcon";
import { BurgerMenuOptions } from "./BurgerMenuOptions/BurgerMenuOptions";

import "./BurgerMenu.styles.scss";

type Props = {
  isBurgerMenuOpen: boolean;
  toggleMenu: () => void;
  color: string;
};

export const BurgerMenu = ({ isBurgerMenuOpen, toggleMenu, color }: Props) => {
  return (
    <div className={`burger-menu ${isBurgerMenuOpen ? "active" : ""}`}>
      <BurgerIcon isBurgerMenuOpen={isBurgerMenuOpen} toggleMenu={toggleMenu} color={color} />
      <BurgerMenuOptions isBurgerMenuOpen={isBurgerMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
};
