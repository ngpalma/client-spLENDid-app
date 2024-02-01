// Dependencias
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

//Config and themes
import { themePalette } from "../../config/theme.config";

export const SearchBar: React.FC<{}> = () => {
  // Translation
  const { t } = useTranslation();

  const [searchData, setSearchData] = React.useState<string>();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchData(event.target.value);
  };

  const handleSearch = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    console.log("Esto es el estado:", searchData);
    setSearchData("");
  };

  // TO DO: Esta funcion no anda! Por que?????????
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") handleSearch;
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="left"
      onKeyDown={handleKeyDown}
    >
      <TextField
        variant="outlined"
        fullWidth
        type="search"
        name="searchData"
        onChange={handleChange}
        value={searchData}
        sx={{
          backgroundColor: themePalette.BG,
        }}
        onKeyDown={handleKeyDown}
        label={
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Nunito",
              color: "primary",
              fontSize: "10px",
            }}
          >
            {t("searchBarText")}
          </Typography>
        }
      />

      <Button
        variant="outlined"
        sx={{ marginLeft: "-5rem", fontSize: "10px" }}
        onClick={handleSearch}
      >
        {t("search")}
      </Button>
    </Box>
  );
};
