// Dependencias
import React from "react";
import { Box, Container } from "@mui/material";

// Config and themes
import useIsMobile from "../../config/mediaQueries";

// Assets and images
import comic from "../../assets/comic.png";
import coverCut from "../../assets/comicCut.png";

// Components defined
import LanguageSwitchButton from "../changeLanguage/switchLanguage";
import { SearchBar } from "../searchBar/searchBar";
import { Welcome } from "../welcome/welcome";

export const TopPage: React.FC<{}> = () => {
  // Manejo de Responsive
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        // Mobile Device
        <Container sx={{ mt: 11 }}>
          <Box sx={{ ml: "20rem" }}>
            <LanguageSwitchButton />
          </Box>
          <img
            src={coverCut}
            alt="Comic City high contrast"
            style={{
              height: "auto",
              margin: "auto",
              width: "100%",
              position: "relative",
              zIndex: 1,
            }}
          />
          <Box mt="-3rem">
            <Box sx={{ maxWidth: "45%", mb: "0.5rem" }}>
              <Welcome />
            </Box>
            <SearchBar />
          </Box>
        </Container>
      ) : (
        // Not a Mobile Device
        <Container sx={{ mt: 9, position: "relative", display: "flex" }}>
          <Box
            sx={{
              position: "absolute",
              top: "-1.5rem",
              right: "-1rem",
              margin: "1rem",
            }}
          >
            <LanguageSwitchButton />
          </Box>
          <Box sx={{ ml: "3rem" }}>
            <img
              src={comic}
              alt="Comic City high contrast"
              style={{ height: "32rem", maxWidth: "100%", margin: "auto" }}
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          >
            <Box>
              <Welcome />
            </Box>
            <Box sx={{ mt: "0.5rem", marginLeft: "-30rem" }}>
              <SearchBar />
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};
