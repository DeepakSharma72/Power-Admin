import React from 'react';
import './chart.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     name: "January",
//     Revenue: 500,
//     Profit: 123
//   },
//   {
//     name: "Febrauary",
//     Revenue: 700,
//     Profit: 223
//   },
//   {
//     name: "March",
//     Revenue: 390,
//     Profit: 23
//   },
//   {
//     name: "April",
//     Revenue: 900,
//     Profit: 312
//   },
//   {
//     name: "May",
//     Revenue: 500,
//     Profit: 223
//   },
//   {
//     name: "June",
//     Revenue: 400,
//     Profit: 93
//   },
// ];


export default function chart({aspect, title = 'Last 6 Months (Revenue)'}) {
  // const data = [
  //   {
  //     "name": "Page A",
  //     "uv": 4000,
  //     "pv": 2400,
  //     "amt": 2400
  //   },
  //   {
  //     "name": "Page B",
  //     "uv": 3000,
  //     "pv": 1398,
  //     "amt": 2210
  //   },
  //   {
  //     "name": "Page C",
  //     "uv": 2000,
  //     "pv": 9800,
  //     "amt": 2290
  //   },
  //   {
  //     "name": "Page D",
  //     "uv": 2780,
  //     "pv": 3908,
  //     "amt": 2000
  //   },
  //   {
  //     "name": "Page E",
  //     "uv": 1890,
  //     "pv": 4800,
  //     "amt": 2181
  //   },
  //   {
  //     "name": "Page F",
  //     "uv": 2390,
  //     "pv": 3800,
  //     "amt": 2500
  //   },
  //   {
  //     "name": "Page G",
  //     "uv": 3490,
  //     "pv": 4300,
  //     "amt": 2100
  //   }
  // ]

  const data = [
    {
      name: "January",
      Revenue: 500,
      Profit: 123
    },
    {
      name: "Febrauary",
      Revenue: 700,
      Profit: 223
    },
    {
      name: "March",
      Revenue: 390,
      Profit: 23
    },
    {
      name: "April",
      Revenue: 900,
      Profit: 312
    },
    {
      name: "May",
      Revenue: 500,
      Profit: 223
    },
    {
      name: "June",
      Revenue: 400,
      Profit: 93
    },
  ];

  return (
    <div className='chart'>
      <div className='title'>
        {title}
      </div>
      <ResponsiveContainer width='100%' aspect={aspect}>
        <AreaChart data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="Revenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="Profit" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3"  className='chartGrid'/>
          <Tooltip />
          <Area type="monotone" dataKey="Revenue" stroke="#8884d8" fillOpacity={1} fill="url(#Revenue)" />
          <Area type="monotone" dataKey="Profit" stroke="#82ca9d" fillOpacity={1} fill="url(#Profit)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
