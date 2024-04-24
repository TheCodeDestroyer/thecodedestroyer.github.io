import type { FC } from 'react';

interface LinkedInIconProps {
  className?: string;
}

export const LinkedInIcon: FC<LinkedInIconProps> = ({ className }) => (
  <svg
    width="22"
    height="20"
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clipPath="url(#clip0_2006_3526)">
      <path
        d="M0.535156 2.32323C0.535156 1.64982 0.770853 1.09426 1.24223 0.656565C1.7136 0.218848 2.32641 0 3.08061 0C3.82135 0 4.42067 0.215474 4.87858 0.646464C5.34996 1.09091 5.58565 1.67002 5.58565 2.38383C5.58565 3.0303 5.3567 3.569 4.89879 3.99999C4.42741 4.44444 3.80788 4.66666 3.0402 4.66666H3.02C2.27925 4.66666 1.67994 4.44444 1.22202 3.99999C0.764105 3.55555 0.535156 2.99662 0.535156 2.32323ZM0.797782 20V6.50504H5.28262V20H0.797782ZM7.76747 20H12.2523V12.4646C12.2523 11.9932 12.3062 11.6296 12.4139 11.3737C12.6025 10.9158 12.8887 10.5286 13.2725 10.2121C13.6563 9.8956 14.1378 9.73736 14.717 9.73736C16.2254 9.73736 16.9796 10.7542 16.9796 12.7879V20H21.4644V12.2626C21.4644 10.2693 20.993 8.75756 20.0503 7.72726C19.1075 6.69696 17.8617 6.18181 16.3129 6.18181C14.5755 6.18181 13.222 6.92928 12.2523 8.42423V8.46463H12.2321L12.2523 8.42423V6.50504H7.76747C7.7944 6.93601 7.80787 8.27607 7.80787 10.5252C7.80787 12.7744 7.7944 15.9326 7.76747 20Z"
        fill="#030405"
      />
    </g>
    <defs>
      <clipPath id="clip0_2006_3526">
        <rect
          width="20.9293"
          height="20"
          fill="white"
          transform="translate(0.535156)"
        />
      </clipPath>
    </defs>
  </svg>
);
