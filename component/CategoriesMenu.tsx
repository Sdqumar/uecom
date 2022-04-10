import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { KeyboardEvent, MouseEvent, useState } from "react";
import { styled } from "@mui/system";

const CustomizedButton = styled(Button)({
  color: "#000",
  background: "#fafafa",
  padding: "15px",

  "& :hover": {
    color: "#2e8b57",
  },
});

export default function DrawerMenu() {
  const [state, setState] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState(open);
    };

  return (
    <div>
      <CustomizedButton
        startIcon={<MenuIcon />}
        endIcon={<ArrowDropDownIcon />}
        onClick={toggleDrawer(true)}
      >
        All Categories
      </CustomizedButton>
      <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
        <Conent toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
}

type conent = {
  toggleDrawer: (open: boolean) => (event: KeyboardEvent | MouseEvent) => void;
};

export const Conent = ({ toggleDrawer }: conent) => (
  <Box
    width={250}
    role="presentation"
    onClick={toggleDrawer(false)}
    onKeyDown={toggleDrawer(false)}
  >
    <List>
      {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {["All mail", "Trash", "Spam"].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Box>
);
