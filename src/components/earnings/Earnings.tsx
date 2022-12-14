import React from "react";
import "./earnings.scss";
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { useContext } from "react";
import { NavigationContext } from "../../context/NavigationContext";
import { CurrencyConvertor } from "../currencyConvertor/CurrencyConvertor";
import CustomTooltip from "./customTooltip";

type Props = {
  aspect: number;
  data: Array<{
    data: number;
  }>;
  date: string;
  title: string;
  amount: number;
  showAxis: boolean;
  showTooltip: boolean;
};

const Earnings = ({
  aspect,
  data,
  date,
  title,
  amount,
  showAxis,
  showTooltip,
}: Props) => {
  const { currency }: any = useContext(NavigationContext);
  return (
    <div className={showTooltip ? "no-hover-earnings" : "earnings"}>
      {date && (
        <div className="top">
          <div className="info">
            <h5>{date}</h5>
          </div>
        </div>
      )}
      <div className="chart">
        <ResponsiveContainer width="90%" aspect={aspect}>
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            {showAxis && (
              <>
                <XAxis dataKey="datum" />
                <YAxis />
              </>
            )}

            {showTooltip && (
              <Tooltip
                content={
                  <CustomTooltip active={true} payload={data} label="test" />
                }
                cursor={true}
                wrapperStyle={{
                  outline: "none",
                }}
              />
            )}

            <Area
              animationBegin={800}
              animationDuration={2000}
              type="monotone"
              dataKey="data"
              fill="#EF2C5A"
              strokeWidth={1}
              stroke="#EF2C5A"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="bottom">
        <div className="info">
          {title && <h5>{title}</h5>}

          {amount && (
            <h1 className="balance">
              <CurrencyConvertor amount={amount} currency={currency} />
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Earnings;
