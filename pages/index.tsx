import type { NextPage } from "next";
import Header from "../component/Header";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default Home;
