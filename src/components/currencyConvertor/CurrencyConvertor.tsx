import React from "react";

type Props = {
  amount: number;
  currency: string;
};

export const CurrencyConvertor = ({ amount, currency }: Props) => {
  return (
    <div>
      {currency === "USD" && <span> &#36; {amount.toFixed(2)}</span>}
      {currency === "NN" && <span>&#8358; {(amount / 7.432).toFixed(2)}</span>}
    </div>
  );
};
