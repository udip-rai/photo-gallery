import { Flex, Text } from "@chakra-ui/react";
import { ColorModeSwitcher } from "ColorModeSwitcher";
import { NavLogo } from "components/global";

export const Header = () => {
  return (
    <Flex className="header">
      <NavLogo />
      <Text textStyle="header">Photo Gallery APP with React-Redux</Text>
      <ColorModeSwitcher />
    </Flex>
  );
};
