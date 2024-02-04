import React from "react";
import logo from "../assets/basketball.svg";
import { HStack, Image, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack>
      <Image boxSize="60px" src={logo} />
      <Text>Navbar</Text>
    </HStack>
  );
};

export default Navbar;
