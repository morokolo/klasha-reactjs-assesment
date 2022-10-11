import "./widget.scss";
import { useContext } from "react";
import { NavigationContext } from "../../context/NavigationContext";
import { CurrencyConvertor } from "../currencyConvertor/CurrencyConvertor";
export const Widget = ({ type }) => {
  const { currency }: any = useContext(NavigationContext);

  return (
    <div className="widget">
      <div className="bottom">
        <div className="info">
          <h5>This week</h5>
          <h1 className="balance">
            <CurrencyConvertor amount={1652.5} currency={currency} />
          </h1>
        </div>
      </div>
    </div>
  );
};
