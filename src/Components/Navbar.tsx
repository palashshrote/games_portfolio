import React from "react";
import logo from "../assets/basketball.svg";
import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image boxSize="60px" src={logo} />
      <Text>Navbar</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
