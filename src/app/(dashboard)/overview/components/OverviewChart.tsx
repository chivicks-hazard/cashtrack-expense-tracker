"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const OverviewChart = () => {
  const data = [
    {
      month: "Jan",
      expense: 2400,
      income: 4000,
    },
    {
      month: "Feb",
      expense: 1398,
      income: 3000,
    },
    {
      month: "Mar",
      expense: 9800,
      income: 2000,
    },
    {
      month: "Apr",
      expense: 3908,
      income: 2780,
    },
    {
      month: "May",
      expense: 4800,
      income: 1890,
    },
    {
      month: "Jun",
      expense: 3800,
      income: 2390,
    },
    {
      month: "Jul",
      expense: 4300,
      income: 3490,
    },
    {
      month: "Aug",
      expense: 2400,
      income: 4000,
    },
    {
      month: "Sep",
      expense: 1398,
      income: 3000,
    },
    {
      month: "Oct",
      expense: 9800,
      income: 2000,
    },
    {
      month: "Nov",
      expense: 3908,
      income: 2780,
    },
    {
      month: "Dec",
      expense: 4800,
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
          dataKey={"expense"}
          stroke="red"
          isAnimationActive={true}
        />
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

export default OverviewChart;
