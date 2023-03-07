import { Badge, Center, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { error404_img } from "assets/images";
import { NavLink } from "react-router-dom";
import { TiArrowForward } from "react-icons/ti";

export const ErrorPage404 = () => {
  return (
    <Center h="calc(100vh - 140px)" flexDirection="column" gap={3}>
      <Flex boxSize="250px">
        <Image boxSize="100%" objectFit="cover" src={error404_img} />
      </Flex>
      <Badge variant="solid" colorScheme="red" p={2}>
        Page not found
      </Badge>
      <Flex alignItems="center">
        <Icon as={TiArrowForward} w={8} h={8} pb={1} color="red.500" /> Go back
        to&nbsp;
        <NavLink to="/">
          <Text as="span" textStyle="header" color="blue_atoll">
            Home
          </Text>
        </NavLink>
      </Flex>
    </Center>
  );
};
