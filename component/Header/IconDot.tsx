import { Box } from "@chakra-ui/react";

const IconDot = ({ left }: { left: number }) => {
  return (
    <Box
      bg="red.400"
      w={2}
      h={2}
      borderRadius="100"
      position="absolute"
      left={left}
    ></Box>
  );
};

export default IconDot;
