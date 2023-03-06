import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout1 = () => {
  return (
    <Grid className="layout1" templateAreas={`"header" "body" "footer"`}>
      <GridItem className="header" area="header">
        <Header />
      </GridItem>
      <GridItem className="body" area="body">
        <Outlet />
      </GridItem>
      <GridItem className="footer" area="footer">
        <Footer />
      </GridItem>
    </Grid>
  );
};
