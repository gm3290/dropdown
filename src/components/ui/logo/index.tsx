import { FC } from "react";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../icons/logoIcon";

import "./styles.scss";

export const Logo: FC = () => {
  return (
    <Link to='/'>
      <div className='logo-wrapper'>
        <LogoIcon size={26} />
        <span>Deeplink</span>
      </div>
    </Link>
  );
};
