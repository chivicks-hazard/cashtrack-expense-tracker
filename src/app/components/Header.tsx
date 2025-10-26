"use client";
import { Heading } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();

  return (
    <Heading padding={5} className="w-full bg-green-800">
      {pathName.replace("/", "")}
    </Heading>
  );
};

export default Header;
