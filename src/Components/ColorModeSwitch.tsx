import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        onChange={toggleColorMode}
        isChecked={colorMode === "dark"}
        colorScheme="red"
        size="lg"
      />
      <Text>Dark mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
