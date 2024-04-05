import type { FC } from 'react';

interface TwitterIconProps {
  className?: string;
}

export const TwitterIcon: FC<TwitterIconProps> = ({ className }) => (
  <svg
    width="28"
    height="24"
    viewBox="0 0 28 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clipPath="url(#clip0_2006_3531)">
      <path
        d="M21.6342 0.0012207H25.7052L16.8113 10.1663L27.2743 23.9988H19.0819L12.6653 15.6095L5.32329 23.9988H1.24982L10.7627 13.126L0.725586 0.0012207H9.12591L14.9259 7.66938L21.6342 0.0012207ZM20.2055 21.5621H22.4612L7.90026 2.30989H5.47955L20.2055 21.5621Z"
        fill="#030405"
      />
    </g>
    <defs>
      <clipPath id="clip0_2006_3531">
        <rect
          width="26.5487"
          height="24"
          fill="white"
          transform="translate(0.725586)"
        />
      </clipPath>
    </defs>
  </svg>
);
