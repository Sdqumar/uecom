import type { NextPage } from "next";
import Header from "../component/Header";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Typography } from "@mui/material";
import CategoriesMenu from "../component/CategoriesMenu";
import { styled } from "@mui/system";

const Menu = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "10px 50px",
  textAlign: "center",
});

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
      <Menu>
        <CategoriesMenu />
        {[
          "Home",
          "New Arrivals",
          "Trending",
          "Deals for You",
          "Discounts",
          "Weekly Offers",
          "Become a Vendor",
        ].map((item) => (
          <Typography key={item} variant="subtitle1">
            {item}
          </Typography>
        ))}
      </Menu>
    </Box>
  );
};

export default Home;
