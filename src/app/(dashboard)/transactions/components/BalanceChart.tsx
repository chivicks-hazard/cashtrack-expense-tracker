"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const BalanceChart = () => {
  const data = [
    {
      month: "Jan",
      balance: 1600,
    },
    {
      month: "Feb",
      balance: 1602,
    },
    {
      month: "Mar",
      balance: 4500,
    },
    {
      month: "Apr",
      balance: 3908,
    },
    {
      month: "May",
      balance: 4800,
    },
    {
      month: "Jun",
      balance: 3800,
    },
    {
      month: "Jul",
      balance: 4300,
    },
    {
      month: "Aug",
      balance: 2400,
    },
    {
      month: "Sep",
      balance: 2000,
    },
    {
      month: "Oct",
      balance: 2000,
    },
    {
      month: "Nov",
      balance: 1890,
    },
    {
      month: "Dec",
      balance: 1890,
    },
  ];

  return (
    <ResponsiveContainer width="80%" height="100%" maxHeight={300}>
      <LineChart
        margin={{
          top: 10,
          left: 20,
          right: 30,
          bottom: 10,
        }}
        data={data}
      >
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line
          type={"monotone"}
          dataKey={"balance"}
          stroke="blue"
          isAnimationActive={true}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BalanceChart;
