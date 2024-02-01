// Dependencias
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// Components defined
import ActionAreaCard from "../card/card";

// Types & Configs
import { hardItems } from "../../hardCoded/hardItems";

export const Cards: React.FC<{}> = () => {
  return (
    <Box sx={{ flexGrow: 1 }} mt={6} padding={4} margin={4}>
      <Grid container spacing={3}>
        {hardItems.map((item) => (
          <Grid item key={item.prodId} xs={12} sm={6} md={4} lg={3}>
            <ActionAreaCard
              prodName={item.prodName}
              ownerName={item.ownerName}
              pricePerDay={item.pricePerDay}
              imgProd={item.imgProd}
              description={item.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
