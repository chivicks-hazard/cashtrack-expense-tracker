import {
  Box,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from "@chakra-ui/react";
import BarChart from "./components/BarChart";
import InfoCards from "./components/InfoCards";

const OverviewPage = () => {
  const sampleData = [10, 20, 30, 40, 50];

  return (
    <Box bg={"azure"} height={"full"} color={"black"} p={5} overflowY={"auto"}>
      <InfoCards />

      <Box mt={20}>
        <TabsRoot
          lazyMount
          unmountOnExit
          defaultValue={"expenses"}
          size={"sm"}
          variant={"enclosed"}
          float={"right"}
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
          <TabsContent value="expenses">Expenses is $30</TabsContent>
          <TabsContent value="income">Income is $20</TabsContent>
          <TabsContent value="balance">Balance is $10</TabsContent>
        </TabsRoot>

        <BarChart />
      </Box>
    </Box>
  );
};

export default OverviewPage;
