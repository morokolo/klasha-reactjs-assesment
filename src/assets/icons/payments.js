import React from "react";

export default function PaymentIcon({ size = 18, color = "none" }) {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7L19.625 7M19.625 7L16.625 4M19.625 7L16.625 10"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.625 16.6875L5 16.6875M5 16.6875L8 13.6875M5 16.6875L8 19.6875"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
