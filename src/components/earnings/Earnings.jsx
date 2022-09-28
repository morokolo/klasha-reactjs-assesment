
import './earnings.scss';
import { AreaChart, Area, Tooltip, ResponsiveContainer, XAxis, YAxis } from "recharts";

// const data = [
//   { data: 4500 },
//   {
//     data: 5000,
//   },
//   {
//     data: 5700,
//   },
//   {
//     data: 3400,
//   },
//   {
//     data: 7000,
//   },
//   {
//     data: 5300,
//   },
//   {
//     data: 5800,
//   },
//   {
//     data: 8000,
//   },
//   {
//     data: 6300,
//   },
//   {
//     data: 6300,
//   },
//   {
//     data: 6300,
//   },
//   {
//     data: 10680,
//   },
//   {
//     data: 10680,
//   },
//   {
//     data: 10680,
//   },
//   {
//     data: 10680,
//   },
//   {
//     data: 5500,
//   },
//   {
//     data: 5500,
//   },
//   {
//     data: 5500,
//   },
//   {
//     data: 7680,
//   },
//   {
//     data: 7680,
//   },
//   {
//     data: 7680,
//   },
//   {
//     data: 7680,
//   },
//   {
//     data: 16000,
//   },
//   {
//     data: 15500,
//   },
//   {
//     data: 17700,
//   },
//   {
//     data: 17700,
//   },
//   {
//     data: 17700,
//   },
//   {
//     data: 17700,
//   },
//   {
//     data: 17700,
//   },
//   {
//     data: 7000,
//   },
//   {
//     data: 7300,
//   },
//   {
//     data: 7500,
//   },
//   {
//     data: 7700,
//   },
//   {
//     data: 14000,
//   },
//   {
//     data: 14000,
//   },
//   {
//     data: 14000,
//   },

//   {
//     data: 14000,
//   },
//   {
//     data: 14000,
//   },
//   {
//     data: 14000,
//   },
//   {
//     data: 14000,
//   },
//   {
//     data: 13000,
//   },
//   {
//     data: 12000,
//   },
//   {
//     data: 10000,
//   },
//   {
//     data: 10000,
//   },
//   {
//     data: 10000,
//   },
//   {
//     data: 10000,
//   },
//   {
//     data: 10000,
//   },
//   {
//     data: 10000,
//   },

//   {
//     data: 10000,
//   },
//   {
//     data: 10000,
//   },
//   {
//     data: 10000,
//   },
// ];

const Earnings = ({aspect, data, date, title, amount,showAxis}) => {
  return (
    <div className="earnings">
      {
        date && (
          <div className="top">
          <div className="info">
            <h5>{date}</h5>
          </div>
        </div>
        )
      }
      <div className="chart">
        <ResponsiveContainer width="90%" aspect={aspect}>
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
              {
                showAxis && (
                  <>
                   <XAxis dataKey="datum" />
            <YAxis />
            </>
                )
              }
           

          
            {/* <Tooltip cursor={false} /> */}
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
          {
            title && (
              <h5 >{title}</h5>
            )
          }
         
         {
          amount && (
            <h1 className='balance'>&#8358;{amount}</h1>
          )
         }
        </div>
      </div>
    </div>
  );
}

export default Earnings