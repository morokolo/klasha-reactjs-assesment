import './chart.scss';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";


  const data = [
    { name: "January", Total: 3500 },
    { name: "January", Total: 3400 },
    { name: "January", Total: 3200 },
    { name: "January", Total: 3200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 800 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },
  ];
const Chart = ({ aspect, title, showYAxis,showXAxis, showTooltip }) =>  {
  return (
    <div className="chart">
      
    <ResponsiveContainer width="100%" aspect={aspect}>
      <AreaChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 10,  left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#EF2C5A" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#EF2C5A" stopOpacity={0} />
          </linearGradient>
        </defs>
      
        {/* <CartesianGrid strokeDasharray="3 3" className="chartGrid" /> */}
        {showXAxis && (
          <XAxis dataKey="Total" />
         
        )}

{showYAxis && (
          <YAxis />
         
        )}


        {showTooltip && (
          <Tooltip />
        )}
        
        <Area
          type="monotone"
          dataKey="Total"
          stroke="#EF2C5A"
          fillOpacity={1}
          fill="url(#total)"
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
  )
}

export default Chart