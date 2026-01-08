"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const IncomeChart = () => {
  const data = [
    {
      month: "Jan",
      income: 4000,
    },
    {
      month: "Feb",
      income: 3000,
    },
    {
      month: "Mar",
      income: 2000,
    },
    {
      month: "Apr",
      income: 2780,
    },
    {
      month: "May",
      income: 1890,
    },
    {
      month: "Jun",
      income: 2390,
    },
    {
      month: "Jul",
      income: 3490,
    },
    {
      month: "Aug",
      income: 4000,
    },
    {
      month: "Sep",
      income: 3000,
    },
    {
      month: "Oct",
      income: 2000,
    },
    {
      month: "Nov",
      income: 2780,
    },
    {
      month: "Dec",
      income: 1890,
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
          dataKey={"income"}
          stroke="green"
          isAnimationActive={true}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default IncomeChart;
