import { CurrencyConvertor } from "components/currencyConvertor/CurrencyConvertor";
import { NavigationContext } from "context/NavigationContext";
import React, { useContext } from "react";
import "./customTooltip.scss";
const CustomTooltip = ({ active, payload, label }) => {
  const { currency }: any = useContext(NavigationContext);
  if (active) {
    return (
      <div className="subscribers-by-channel-tooltip">
        <p className="subscribers-by-channel-tooltip-value">
          <CurrencyConvertor amount={payload[0].value} currency={currency} />
        </p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
