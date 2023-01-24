import { RoutesInfo } from "./interfaces/routes";

export const routesInfo: RoutesInfo[] = [
  {
    id: 0,
    name: "We are",
    route: "/"
  },
  {
    id: 1,
    name: "Services",
    route: "/services"
  },
  {
    id: 2,
    name: "Work",
    route: "/work"
  },
  {
    id: 3,
    name: "Thoughts",
    route: "/thoughts"
  }
];

// select here which nav options are available
export const availableRouteIDs: number[] = [0, 1, 2];

export const desktopLineBreakSymbol: string = "+";
export const mobileLineBreakSymbol: string = "*";
export const paragraphSymbol: string = "#";

// Navigation bar Display Modes
export const DisplayModes = {
  dark: {
    color: "white",
    activeStyle: "active-black"
  },
  light: {
    color: "black",
    activeStyle: "active-pink"
  }
};
