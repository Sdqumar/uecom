import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import AllCategories from "./AllCategories";

const HeaderBottom = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      mx={["3%", "3%", "10%"]}
      gap={[1, 3, 10, 10]}
      mt={5}
    >
      <AllCategories />
    </Flex>
  );
};

export default HeaderBottom;
