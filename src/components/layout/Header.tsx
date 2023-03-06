import { Flex, Hide, Text } from "@chakra-ui/react";
import { ColorModeSwitcher } from "ColorModeSwitcher";
import { NavLogo } from "components/global";
import { useLocation } from "react-router-dom";
import { readableString } from "utils/logic";

export const Header = () => {
  const location = useLocation(),
    title = location.pathname.split("/").pop(),
    newTitle = readableString(title!, "-");

  return (
    <Flex className="header">
      <NavLogo />
      <Hide below="350px">
        <Text textStyle="title">{newTitle}</Text>
      </Hide>
      <ColorModeSwitcher />
    </Flex>
  );
};
