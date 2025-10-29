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
      className="w-full bg-green-800"
    >
      {pathName.replace("/", "")}
    </Heading>
  );
};

export default Header;
