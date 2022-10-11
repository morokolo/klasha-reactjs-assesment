import React from "react";

export default function ExchangeIcon({ size = 18, color = "none" }) {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.125 12.75V12.75C4.125 8.40076 7.65076 4.875 12 4.875H19.875M19.875 4.875L17.0956 1.5M19.875 4.875L17.0956 8.25"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M19.875 11.25V11.25C19.875 15.5992 16.3492 19.125 12 19.125H4.125M4.125 19.125L6.90441 22.5M4.125 19.125L6.90441 15.75"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </svg>
  );
}
