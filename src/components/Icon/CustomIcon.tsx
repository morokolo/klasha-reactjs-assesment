import React from "react";

import {
  AnalyticsIcon,
  CartIcon,
  ExchangeIcon,
  MarketingIcon,
  PaymentIcon,
  PaymentLinkIcon,
  PieChartIcon,
  TransactionIcon,
  WalletIcon,
} from "../../assets";

type Props = {
  name: string;
  size: number;
  color: string;
};

const IconComponent = ({ name, size = 24, color = "black" }: Props) => {
  let Icon: any = "";
  switch (name) {
    case "dashboard":
      Icon = <PieChartIcon size={size} color={color} />;
      break;
    case "balances":
      Icon = <WalletIcon size={size} color={color} />;
      break;
    case "transactions":
      Icon = <TransactionIcon size={size} color={color} />;
      break;
    case "analytics":
      Icon = <AnalyticsIcon size={size} color={color} />;
      break;
    case "marketing":
      Icon = <MarketingIcon size={size} color={color} />;
      break;
    case "exchange-rates":
      Icon = <ExchangeIcon size={size} color={color} />;
      break;
    case "checkout":
      Icon = <CartIcon size={size} color={color} />;
      break;
    case "payment-link":
      Icon = <PaymentLinkIcon size={size} color={color} />;
      break;
    case "wire":
      Icon = <PaymentIcon size={size} color={color} />;
      break;
    default:
      console.log("Invalid Input");
  }

  return Icon;
};

export default IconComponent;
