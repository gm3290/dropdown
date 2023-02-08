import type { FC } from "react";

import "./styles.scss";

export const HeroSection: FC = () => {
  //   console.log(styles);
  return (
    <section className='hero-section-wrapper'>
      <div className='hero-section-content'>
        <h1>Hello World!</h1>
      </div>
    </section>
  );
};
