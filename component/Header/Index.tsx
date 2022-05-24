import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import type { NextPage } from "next";
const Header: NextPage = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      mx="10"
      mt={5}
      gap={10}
    >
      <Text fontSize="4xl">UCOMMERCE</Text>
      <InputGroup size="sm">
        <InputRightElement
          color="gray.300"
          cursor="pointer"
          mt={1}
          mr={2}
          fontSize="1.2em"
          children={<SearchIcon />}
        />
        <Input
          placeholder="Search For Products, Brands & Categories"
          borderRadius={5}
          size="md"
        />
      </InputGroup>
    </Flex>
  );
};

export default Header;
