import { FC } from "react";
import { HeroSection } from "../../components/sections/heroSection";

import "./styles.scss";

export const HomePage: FC = () => {
  return (
    <div className='home-page-wrapper'>
      <HeroSection />
    </div>
  );
};
