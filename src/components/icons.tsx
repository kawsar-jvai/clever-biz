import { cn } from "clsx-for-tailwind";
import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const IconLogout: React.FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-4 h-4", className)}
      {...props}
    >
      <path
        d="M11.2467 17.5H5.41667C4.49583 17.5 3.75 16.5408 3.75 15.3575V4.64167C3.75 3.45917 4.49583 2.5 5.41667 2.5H11.25M13.3333 12.9167L16.25 10L13.3333 7.08333M7.91667 9.99667H16.25"
        stroke="#DEE1EB"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconHome: React.FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M6 19H9V14C9 13.7167 9.096 13.4793 9.288 13.288C9.48 13.0967 9.71733 13.0007 10 13H14C14.2833 13 14.521 13.096 14.713 13.288C14.905 13.48 15.0007 13.7173 15 14V19H18V10L12 5.5L6 10V19ZM4 19V10C4 9.68333 4.071 9.38333 4.213 9.1C4.355 8.81667 4.55067 8.58333 4.8 8.4L10.8 3.9C11.15 3.63333 11.55 3.5 12 3.5C12.45 3.5 12.85 3.63333 13.2 3.9L19.2 8.4C19.45 8.58333 19.646 8.81667 19.788 9.1C19.93 9.38333 20.0007 9.68333 20 10V19C20 19.55 19.804 20.021 19.412 20.413C19.02 20.805 18.5493 21.0007 18 21H14C13.7167 21 13.4793 20.904 13.288 20.712C13.0967 20.52 13.0007 20.2827 13 20V15H11V20C11 20.2833 10.904 20.521 10.712 20.713C10.52 20.905 10.2827 21.0007 10 21H6C5.45 21 4.97933 20.8043 4.588 20.413C4.19667 20.0217 4.00067 19.5507 4 19Z"
        fill="#DEE1EB"
      />
    </svg>
  );
};

interface CurveSvgProps extends React.SVGProps<SVGSVGElement> {
  strokeColor?: string;
  startColor?: string;
  endColor?: string;
  className?: string;
}

export const CurveSvg: React.FC<CurveSvgProps> = ({
  strokeColor = "#31BB24",
  startColor = "#48E03A",
  endColor = "#161F42",
  className,
  ...props
}) => {
  const gradientId = React.useId(); // ensures unique gradient ID per instance

  return (
    <svg
      width="244"
      height="85"
      viewBox="0 0 244 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M2.67051 84.93C1.76349 85.0216 0.871811 85.025 0 84.93H2.67051C14.0614 83.7805 27.8738 68.7406 35.1728 60.3893C43.0531 51.373 53.5601 39.7807 68.0073 42.3567C82.4545 44.9328 92.9615 52.6583 107.409 50.0823C121.856 47.5062 128.423 23.0334 144.183 24.3214C159.944 25.6095 177.018 43.6433 192.778 35.915C208.539 28.1868 225.613 3.71399 233.493 1.13791C239.797 -0.922956 243.124 0.279217 244 1.13791V72.1227C244 76.608 244 78.8507 243.128 80.562C242.361 82.0673 241.137 83.2911 239.632 84.0581C237.921 84.93 235.68 84.93 231.2 84.93H8.90528H2.67051Z"
        fill={`url(#${gradientId})`}
        fillOpacity="0.41"
      />
      <path
        d="M32 65.8272C33.3086 67.1384 37.2346 68.4497 42.4691 63.2046C49.0123 56.6483 52.9383 40.913 68.642 38.2905C84.3457 35.668 88.2716 50.0919 107.901 54.0257C127.531 57.9595 134.074 54.0268 144.543 47.4705C155.012 40.9141 166.79 16 185.111 16C203.432 16 209.975 21.2451 223.062 34.3578C233.531 44.8479 241.383 47.4705 244 47.4705"
        stroke={strokeColor}
        strokeWidth="0.907315"
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1="198.032"
          y1="5.15217"
          x2="195.505"
          y2="88.8779"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.46" stopColor={startColor} />
          <stop offset="1" stopColor={endColor} />
        </linearGradient>
      </defs>
    </svg>
  );
};
