import { FC, useMemo } from "react";
import { Link } from "react-router-dom";
import { Menu } from "../../../types/menu";
import { Dropdown } from "../dropdown";

import "./styles.scss";

type MenuItemProps = {
  item: Menu;
};

const MenuItem: FC<Omit<Menu, "items">> = ({ label, path, external }) => {
  if (!path) {
    return <div className='menu-item'>{label}</div>;
  }

  return (
    <div className='menu-item'>
      <Link to={path} target={external ? "_blank" : ""}>
        {label}
      </Link>
    </div>
  );
};

export const MenuItemWrapper: FC<MenuItemProps> = ({ item }) => {
  const trigger = useMemo(
    () => (
      <MenuItem label={item.label} path={item.path} external={item.external} />
    ),
    [item]
  );

  if (!item.items) {
    return trigger;
  }

  return (
    <Dropdown trigger={trigger} offset={24}>
      {item.items.map((ite, i) => (
        <MenuItem
          key={i}
          external={ite.external}
          label={ite.label}
          path={ite.path}
        />
      ))}
    </Dropdown>
  );
};
