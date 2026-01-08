"use client";

import {
  Badge,
  Table,
  TableBody,
  TableColumnHeader,
  TableHeader,
  TableRow,
} from "@chakra-ui/react";

const RecentTransactionsTable = () => {
  const data = [
    {
      title: "Grocery Shopping",
      description:
        "Weekly trip to the supermarket for food and household items.",
      amount: 125.5,
      category: "Groceries",
      type: "Expense",
      date: "2025-12-15",
    },
    {
      title: "Monthly Salary",
      description: "Direct deposit of net pay from employer.",
      amount: 5500.0,
      category: "Salary",
      type: "Income",
      date: "2025-12-15",
    },
    {
      title: "Coffee and Lunch",
      description: "Mid-day meal and beverage at local cafe.",
      amount: 18.75,
      category: "Food & Drink",
      type: "Expense",
      date: "2025-12-14",
    },
    {
      title: "Gym Membership",
      description: "Monthly subscription fee for fitness club.",
      amount: 45.0,
      category: "Health",
      type: "Expense",
      date: "2025-12-14",
    },
    {
      title: "Freelance Payment",
      description: "Payment for completed web development project.",
      amount: 850.0,
      category: "Freelance",
      type: "Income",
      date: "2025-12-13",
    },
    {
      title: "Online Course Fee",
      description: "Enrolment fee for 'Advanced System Design' course.",
      amount: 199.99,
      category: "Education",
      type: "Expense",
      date: "2025-12-13",
    },
    {
      title: "Public Transport",
      description: "Weekly subway pass purchase.",
      amount: 32.5,
      category: "Transportation",
      type: "Expense",
      date: "2025-12-12",
    },
    {
      title: "Stock Dividend",
      description: "Quarterly dividend payment from investment portfolio.",
      amount: 75.2,
      category: "Investments",
      type: "Income",
      date: "2025-12-12",
    },
    {
      title: "Electricity Bill",
      description: "Monthly utility payment for home electricity usage.",
      amount: 88.3,
      category: "Utilities",
      type: "Expense",
      date: "2025-12-11",
    },
    {
      title: "Birthday Gift",
      description: "Purchase of a book and card for a friend.",
      amount: 40.0,
      category: "Gifts",
      type: "Expense",
      date: "2025-12-11",
    },
  ];

  return (
    <Table.Root
      variant={"outline"}
      showColumnBorder
      rounded={"md"}
      interactive
      borderWidth={1}
      fontSize={"md"}
    >
      <TableHeader bg={"primary.light"} roundedTop={"md"}>
        <TableRow>
          <TableColumnHeader>Title</TableColumnHeader>
          <TableColumnHeader>Description</TableColumnHeader>
          <TableColumnHeader>Amount</TableColumnHeader>
          <TableColumnHeader>Category</TableColumnHeader>
          <TableColumnHeader>Type</TableColumnHeader>
          <TableColumnHeader>Date</TableColumnHeader>
        </TableRow>
      </TableHeader>
      <TableBody bg={"primary.lightest"}>
        {data.map((item, index) => (
          <TableRow
            key={index}
            bg={{
              _hover: "primary.lighter",
            }}
          >
            <Table.Cell>{item.title}</Table.Cell>
            <Table.Cell>{item.description}</Table.Cell>
            <Table.Cell>{item.amount}</Table.Cell>
            <Table.Cell>{item.category}</Table.Cell>
            <Table.Cell>
              <Badge
                variant={"solid"}
                colorPalette={item.type === "Expense" ? "red" : "green"}
              >
                {item.type}
              </Badge>
            </Table.Cell>
            <Table.Cell>{item.date}</Table.Cell>
          </TableRow>
        ))}
      </TableBody>
    </Table.Root>
  );
};

export default RecentTransactionsTable;
