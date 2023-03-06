import { useContext } from "react";
import { Flex, Center, Image, Text } from "@chakra-ui/react";
import { CustomColorsContext } from "context/CustomColors";
import { NavLink } from "react-router-dom";
import { laptop_img } from "assets/images";

export const NavLogo = () => {
  const { myColors } = useContext(CustomColorsContext);
  return (
    <Flex pos="relative" w="100px">
      <NavLink to="/">
        <Center boxSize="55px">
          <Image boxSize="100%" objectFit="cover" src={laptop_img} />
        </Center>
      </NavLink>
      <Text
        fontSize="lg"
        fontWeight="900"
        position="absolute"
        left="42px"
        top="10px"
        lineHeight="18px"
        letterSpacing={0.5}
      >
        UDIP
        <Text as="span" color={myColors?.sky_red}>
          RAI
        </Text>
      </Text>
    </Flex>
  );
};
