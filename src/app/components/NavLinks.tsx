"use client";
import { Flex, HStack, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaHome } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";

interface Link {
  href: string;
  icon: IconType;
  label: string;
}

const links: Link[] = [
  {
    href: "overview",
    icon: FaHome,
    label: "Overview",
  },
  {
    href: "transactions",
    icon: GrTransaction,
    label: "Transactions",
  },
  {
    href: "accounts",
    icon: FaDollarSign,
    label: "Accounts",
  },
  {
    href: "settings",
    icon: IoSettingsOutline,
    label: "Settings",
  },
];

const NavLinks = () => {
  return (
    <Flex direction={"column"} gap={"5"} mt={20} className="">
      {links.map((link, index) => (
        <Link href={link.href} key={index} className="">
          <HStack fontSize={20} className="hover:text-green-500">
            <Icon as={link.icon} />
            <Text>{link.label}</Text>
          </HStack>
        </Link>
      ))}
    </Flex>
  );
};

export { NavLinks as default, links };
