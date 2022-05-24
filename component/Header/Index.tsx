import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import IconDot from "./IconDot";

const Header = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      mx={["3%", "3%", "10%"]}
      gap={[1, 3, 10, 10]}
      mt={5}
    >
      <Flex
        w={["70%", "90%", "90%", "70%"]}
        justifyContent="space-between"
        gap={[1, 2, 10]}
        alignItems="center"
      >
        <Text fontSize={{ base: "24px", md: "35px" }} cursor="pointer">
          UCOMMERCE
        </Text>
        <InputGroup size="sm" maxW="35rem">
          <InputRightElement
            color="gray.300"
            cursor="pointer"
            mt={1}
            mr={2}
            fontSize="1.5em"
            children={<AiOutlineSearch />}
          />
          <Input
            placeholder="Search For Products, Brands & Categories"
            borderRadius={5}
            size="md"
          />
        </InputGroup>
      </Flex>

      <Flex gap={2} cursor="pointer">
        <Box position="relative">
          <IconDot left={3} />
          <AiOutlineHeart />
        </Box>
        <IoPersonOutline />
        <Box position="relative">
          <IconDot left={3} />
          <MdOutlineShoppingCart />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
