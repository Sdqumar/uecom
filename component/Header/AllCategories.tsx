import { Button, Text } from "@chakra-ui/react";
import { AiOutlineCaretDown, AiOutlineMenu } from "react-icons/ai";
import CustomDrawer from "../Global/Drawer";

export default function AllCategories() {
  return (
    <>
      <CustomDrawer>
        <Button
          leftIcon={<AiOutlineMenu style={{ margin: "3px 8px " }} />}
          rightIcon={
            <AiOutlineCaretDown size="10px" style={{ margin: "3px 5px 1px" }} />
          }
          colorScheme="gray"
          variant="solid"
        >
          All Categories
        </Button>
      </CustomDrawer>
    </>
  );
}
