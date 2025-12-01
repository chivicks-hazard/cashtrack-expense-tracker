"use client";
import { Heading } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();

  return (
    <Heading
      padding={5}
      pos={"fixed"}
      top={0}
      // right={0}
      className="w-full"
      bg={"primary.base"}
    >
      {pathName.replace("/", "")}
    </Heading>
  );
};

export default Header;
