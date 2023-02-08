import { NAV_LIST } from "../../constants/menuItems";
import { FC } from "react";
import { MenuItemWrapper } from "../ui/menuItem";

import "./styles.scss";

export const NavigationBar: FC = () => {
  return (
    <nav className='navigation-bar-wrapper'>
      <ul className='navigation-bar'>
        {NAV_LIST.map((navItem, i) => (
          <li key={i}>
            <MenuItemWrapper item={navItem} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
