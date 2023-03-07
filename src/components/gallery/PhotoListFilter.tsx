import { Flex, Input, Button, Text } from "@chakra-ui/react";

export const PhotoListFilter = () => {
  return (
    <Flex gap={2} alignItems="center">
      <Text>Enter album ID (1-100)</Text>
      <Input
        placeholder="1"
        w="90px"
        type="number"
        min="1"
        max="100"
        // onKeyUp={""}
      />
      <Button className="photo-button">Filter</Button>
    </Flex>
  );
};
