import {
  Box,
  Heading,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from "@chakra-ui/react";
import BalanceChart from "./components/BalanceChart";
import ExpenseChart from "./components/ExpenseChart";
import IncomeChart from "./components/IncomeChart";
import TransactionsTable from "./components/TransactionsTable";

const TransactionsPage = () => {
  return (
    <Box bg={"azure"} height={"full"} color={"black"} p={5} overflowY={"auto"}>
      <TabsRoot
        lazyMount
        unmountOnExit
        defaultValue={"expenses"}
        variant={"enclosed"}
        float={"right"}
        w={"full"}
        mb={20}
      >
        <TabsList bg={"secondary.dark"}>
          <TabsTrigger color={"primary.light"} value="expenses">
            Expenses
          </TabsTrigger>
          <TabsTrigger color={"primary.light"} value="income">
            Income
          </TabsTrigger>
          <TabsTrigger color={"primary.light"} value="balance">
            Balance
          </TabsTrigger>
          <TabsIndicator />
        </TabsList>
        <TabsContent value="expenses">
          <Box height={300} mt={10}>
            <ExpenseChart />
          </Box>
        </TabsContent>
        <TabsContent value="income">
          <Box height={300} mt={10}>
            <IncomeChart />
          </Box>
        </TabsContent>
        <TabsContent value="balance">
          <Box height={300} mt={10}>
            <BalanceChart />
          </Box>
        </TabsContent>
      </TabsRoot>

      <Box mt={100}>
        <Heading as={"h2"} mb={5} fontSize={"2xl"}>
          Transactions
        </Heading>
        <TransactionsTable />
      </Box>
    </Box>
  );
};

export default TransactionsPage;
