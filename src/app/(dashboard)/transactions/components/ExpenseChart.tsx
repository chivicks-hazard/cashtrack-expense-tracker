"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ExpenseChart = () => {
  const data = [
    {
      month: "Jan",
      expense: 2400,
    },
    {
      month: "Feb",
      expense: 1398,
    },
    {
      month: "Mar",
      expense: 9800,
    },
    {
      month: "Apr",
      expense: 3908,
    },
    {
      month: "May",
      expense: 4800,
    },
    {
      month: "Jun",
      expense: 3800,
    },
    {
      month: "Jul",
      expense: 4300,
    },
    {
      month: "Aug",
      expense: 2400,
    },
    {
      month: "Sep",
      expense: 1398,
    },
    {
      month: "Oct",
      expense: 9800,
    },
    {
      month: "Nov",
      expense: 3908,
    },
    {
      month: "Dec",
      expense: 4800,
    },
  ];

  return (
    <ResponsiveContainer width="80%" height="100%" maxHeight={300}>
      <LineChart
        margin={{
          top: 10,
          left: 5,
          right: 5,
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
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ExpenseChart;
