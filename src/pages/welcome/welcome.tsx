// Dependencias
import { Paper, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

// Config and themes
import { themePalette } from "../../config/theme.config";

export const Welcome: React.FC<{}> = () => {
  // Translation
  const { t } = useTranslation();

  return (
    <Paper
      elevation={3}
      sx={{
        position: "relative",
        zIndex: 2,
        textAlign: "center",
        backgroundColor: themePalette.BG,
        padding: "0rem 1rem",
      }}
    >
      <Typography
        variant="h4"
        color={themePalette.ACCENT}
        fontFamily={themePalette.BIG}
        sx={{
          fontSize: {
            xs: 18,
            sm: 24,
            md: 32,
            lg: 34,
            xl: 40,
          },
        }}
      >
        {t("rent")}
      </Typography>
      <Typography
        variant="h4"
        color={themePalette.BUTTONS}
        fontFamily={themePalette.BIG}
        sx={{
          fontSize: {
            xs: 18,
            sm: 24,
            md: 32,
            lg: 34,
            xl: 40,
          },
        }}
      >
        {t("whatYouWant")}
      </Typography>
      <Typography
        variant="h4"
        color={themePalette.ACCENT}
        fontFamily={themePalette.BIG}
        sx={{
          fontSize: {
            xs: 18,
            sm: 24,
            md: 32,
            lg: 34,
            xl: 40,
          },
        }}
      >
        {t("inYourCommunity")}
      </Typography>
    </Paper>
  );
};

// Mobile Device
//     <Paper
//       elevation={3}
//       sx={{
//         position: "relative",
//         zIndex: 2,
//         textAlign: "center",
//         maxWidth: "10rem",
//         marginTop: "-5rem",
//         backgroundColor: themePalette.BG,
//       }}
//     ></Paper>

// Not Mobile Device
//   <Paper
//     elevation={3}
//     sx={{
//       position: "relative",
//       zIndex: 2,
//       textAlign: "center",
//       maxWidth: "20rem",
//       marginLeft: "48rem",
//       marginTop: "-13rem",
//       backgroundColor: themePalette.BG,
//     }}
//   ></Paper>
