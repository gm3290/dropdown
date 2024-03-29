import { FC } from "react";
import { IconProps } from "./types";

export const LogoIcon: FC<IconProps> = ({ size, fill }) => {
  return (
    <svg
      viewBox='29.9 29.6 139.9 140'
      fill={fill || "currentColor"}
      height={size || "200"}
      width={size || "200"}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g>
        <path d='M51.7 47.1c0 6.02-4.88 10.9-10.9 10.9-6.02 0-10.9-4.88-10.9-10.9 0-6.02 4.88-10.9 10.9-10.9 6.02 0 10.9 4.88 10.9 10.9z' />
        <path d='M114.1 47.1c0 9.665-7.835 17.5-17.5 17.5s-17.5-7.835-17.5-17.5 7.835-17.5 17.5-17.5 17.5 7.835 17.5 17.5z' />
        <path d='M169.8 47.1c0 9.665-7.835 17.5-17.5 17.5s-17.5-7.835-17.5-17.5 7.835-17.5 17.5-17.5 17.5 7.835 17.5 17.5z' />
        <path d='M51.7 99.6c0 6.02-4.88 10.9-10.9 10.9-6.02 0-10.9-4.88-10.9-10.9 0-6.02 4.88-10.9 10.9-10.9 6.02 0 10.9 4.88 10.9 10.9z' />
        <path d='M114.1 99.6c0 9.665-7.835 17.5-17.5 17.5s-17.5-7.835-17.5-17.5 7.835-17.5 17.5-17.5 17.5 7.835 17.5 17.5z' />
        <path d='M169.8 99.6c0 9.665-7.835 17.5-17.5 17.5s-17.5-7.835-17.5-17.5 7.835-17.5 17.5-17.5 17.5 7.835 17.5 17.5z' />
        <path d='M51.7 152.1c0 6.02-4.88 10.9-10.9 10.9-6.02 0-10.9-4.88-10.9-10.9 0-6.02 4.88-10.9 10.9-10.9 6.02 0 10.9 4.88 10.9 10.9z' />
        <path d='M114.1 152.1c0 9.665-7.835 17.5-17.5 17.5s-17.5-7.835-17.5-17.5 7.835-17.5 17.5-17.5 17.5 7.835 17.5 17.5z' />
        <path d='M163.2 152.1c0 6.02-4.88 10.9-10.9 10.9-6.02 0-10.9-4.88-10.9-10.9 0-6.02 4.88-10.9 10.9-10.9 6.02 0 10.9 4.88 10.9 10.9z' />
      </g>
    </svg>
  );
};
