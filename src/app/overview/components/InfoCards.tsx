"use client";
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { BsGraphDownArrow, BsGraphUpArrow } from "react-icons/bs";
import { MdAccountBalanceWallet } from "react-icons/md";

const InfoCards = () => {
  return (
    <Flex dir="row" align={"center"} gap={20} mt={5}>
      {/* Total Balance */}
      <Box bg={"primary.lighter"} color={"primary.dark"} p={2} rounded={"md"}>
        <Flex dir="row" justify={"center"} align={"center"} gap={3}>
          <Icon>
            <MdAccountBalanceWallet />
          </Icon>
          <Heading as={"h3"} fontWeight={600}>
            Total Balance
          </Heading>
        </Flex>

        <Text as={"span"} mt={4} fontSize={25} display={"block"}>
          &#x24; 2000
        </Text>
      </Box>

      {/* Total Income */}
      <Box bg={"primary.lighter"} color={"primary.dark"} p={2} rounded={"md"}>
        <Flex dir="row" justify={"center"} align={"center"} gap={3}>
          <Icon>
            <BsGraphUpArrow />
          </Icon>
          <Heading as={"h3"} fontWeight={600}>
            Total Income
          </Heading>
        </Flex>

        <Text as={"span"} mt={4} fontSize={25} display={"block"}>
          &#x24; 12000
        </Text>
      </Box>

      {/* Total Expense */}
      <Box bg={"primary.lighter"} color={"primary.dark"} p={2} rounded={"md"}>
        <Flex dir="row" justify={"center"} align={"center"} gap={3}>
          <Icon>
            <BsGraphDownArrow />
          </Icon>
          <Heading as={"h3"} fontWeight={600}>
            Total Expenses
          </Heading>
        </Flex>

        <Text as={"span"} mt={4} fontSize={25} display={"block"}>
          &#x24; 10000
        </Text>
      </Box>
    </Flex>
  );
};

export default InfoCards;
