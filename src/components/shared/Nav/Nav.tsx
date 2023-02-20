import React, { useState } from "react";

import { DisplayModes } from "../../../constants";
import { BurgerMenu, ChazzLogo, DesktopMenu } from "./index";

import "./Nav.styles.scss";

type Props = { isPlaying?: boolean; darkMode?: boolean; AlertNavParent?: (a: boolean) => void; height?: number };

export const Nav = ({ isPlaying = false, darkMode = false, AlertNavParent, height = 11 }: Props) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);
  const [root] = useState(document.getElementById("root"));

  const displayMode = darkMode ? DisplayModes.dark : DisplayModes.light;
  const { color } = displayMode;
  const logoColor = isBurgerMenuOpen ? "white" : color;

  function toggleMenu(): void {
    if (isPlaying) return;
    if (AlertNavParent) AlertNavParent(!isBurgerMenuOpen);

    setIsBurgerMenuOpen(!isBurgerMenuOpen);
    handleRootBehavior();
  }

  function handleRootBehavior(): void {
    if (!root) return;
    root.style.height = isBurgerMenuOpen ? "auto" : "100vh";
    root.style.overflow = isBurgerMenuOpen ? "auto" : "hidden";
  }

  return (
    <div className="header-nav" style={{ height: `${height}vh` }}>
      <ChazzLogo color={logoColor} isBurgerMenuOpen={isBurgerMenuOpen} height={height} />
      <DesktopMenu {...displayMode} />
      <BurgerMenu isBurgerMenuOpen={isBurgerMenuOpen} toggleMenu={toggleMenu} color={color} />
    </div>
  );
};
