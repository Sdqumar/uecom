import type { NextPage } from "next";
import Header from "../component/Header";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
    </Box>
  );
};

export default Home;
