import React from 'react';

const LogoConnector: React.FC = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 -z-10 opacity-90 hidden md:block">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 256 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 64 C 70 64, 70 32, 128 64 C 186 96, 186 64, 246 64"
          stroke="url(#gradient)"
          strokeWidth="4"
          strokeLinecap="round"
          className="animate-pulse"
        />
        <circle
          cx="128"
          cy="64"
          r="8"
          fill="url(#gradient)"
          className="animate-ping"
          opacity="0.5"
        />
        <circle cx="128" cy="64" r="4" fill="#F2D06B" />
        <defs>
          <linearGradient
            id="gradient"
            x1="0"
            y1="0"
            x2="256"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#734002" />
            <stop offset="0.5" stopColor="#BF8C2C" />
            <stop offset="1" stopColor="#F2D06B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default LogoConnector;
