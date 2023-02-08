import { FC } from "react";
import { Outlet } from "react-router-dom";
import { AppFooter } from "../footer";
import { AppHeader } from "../head";

export const AppLayout: FC = () => {
  return (
    <div className='app-wrapper'>
      <AppHeader />
      <main className='app-main-content'>
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
};
