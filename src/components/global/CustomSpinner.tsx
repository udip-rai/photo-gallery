import { Box, Center, Image, Spinner, Text } from "@chakra-ui/react";
import { busy_img } from "assets/images";

export const CustomSpinner = () => {
  return (
    <Center pos="relative" h="calc(100vh - 140px)" flexDir="column" gap={0.5}>
      <Spinner
        thickness="6px"
        speed="0.99s"
        emptyColor="gray.200"
        color="blue.500"
        boxSize="85px"
      />
      <Box pos="absolute" margin="0 auto" mb={4}>
        <Image boxSize="80px" src={busy_img} />
      </Box>
      <Text>Loading</Text>
    </Center>
  );
};
