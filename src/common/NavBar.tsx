import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { themePalette } from "../config/theme.config";

export const NavBar: React.FC<{}> = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "transparent" }}>
      <AppBar position="fixed" sx={{ backgroundColor: themePalette.BG }}>
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: themePalette.SPLEN,
                    color: themePalette.ACCENT,
                  }}
                >
                  spLENDid
                </Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2}>
                  <Button variant="text">Text</Button>
                  <Button variant="outlined">Outlined</Button>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: themePalette.BUTTONS }}
                  >
                    Contained
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
