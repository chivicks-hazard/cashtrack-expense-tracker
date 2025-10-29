import { Box } from "@chakra-ui/react";
import BarChart from "./components/BarChart";
import InfoCards from "./components/InfoCards";

const OverviewPage = () => {
  const sampleData = [10, 20, 30, 40, 50];

  return (
    <Box bg={"azure"} color={"black"} p={5}>
      <InfoCards />

      <Box mt={20}>
        <BarChart data={sampleData} width={400} height={300} />
      </Box>
    </Box>
  );
};

export default OverviewPage;
