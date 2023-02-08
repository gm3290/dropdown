import { FC } from "react";
import { NavigationBar } from "../navbar";
import { Logo } from "../ui/logo";

import "./styles.scss";

export const AppHeader: FC = () => {
  return (
    <header className='app-header'>
      <div className='fixed-app-header'>
        <div className='app-header-wrapper'>
          <div className='app-header-left'>
            <Logo />
          </div>
          <div className='app-header-mid'>
            <NavigationBar />
          </div>
          <div className='app-header-right'>Became a Contributor</div>
        </div>
      </div>
    </header>
  );
};
