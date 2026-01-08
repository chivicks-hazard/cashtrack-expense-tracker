import { Box, Heading } from "@chakra-ui/react";
import InfoCards from "./components/InfoCards";
import OverviewChart from "./components/OverviewChart";
import RecentTransactionsTable from "./components/RecentTransactionsTable";

const OverviewPage = () => {
  const sampleData = [10, 20, 30, 40, 50];

  return (
    <Box bg={"azure"} height={"full"} color={"black"} p={5} overflowY={"auto"}>
      <InfoCards />

      <Box mt={150} height={300}>
        <Heading as={"h2"} mb={5} fontSize={"2xl"}>
          Overview Chart
        </Heading>
        <OverviewChart />
      </Box>

      <Box mt={100}>
        <Heading as={"h2"} mb={5} fontSize={"2xl"}>
          Recent Transactions
        </Heading>
        <RecentTransactionsTable />
      </Box>
    </Box>
  );
};

export default OverviewPage;
