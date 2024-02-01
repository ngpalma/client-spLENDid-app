// Dependencias
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Grid } from "@mui/material";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import { useTranslation } from "react-i18next";

// Components defined
import QuiltedImageList from "../cardImg/cardImg";
import UserAvatarPopOver from "../userAvatar/userAvatar";

// Types & Configs
import { themePalette } from "../../config/theme.config";
import { ProductCardProps } from "../../types";

export default function ActionAreaCard({
  prodName,
  ownerName,
  pricePerDay,
  imgProd,
  description,
}: ProductCardProps) {
  // Translation
  const { t } = useTranslation();
  return (
    <Card sx={{ maxWidth: 345, mt: 0 }}>
      {/* El CardActionArea permite que se pueda hacer click en la Card y te lleve al Detalle -> aun no implementado */}
      <CardActionArea>
        <Typography
          variant="h6"
          component="div"
          color={themePalette.ACCENT}
          sx={{
            fontFamily: themePalette.BIG,
            border: `2px solid ${themePalette.BORDERS}`,
            paddingLeft: "1rem",
            paddingRight: "1rem",
            width: "fit-content",
            marginLeft: "0.2rem",
            marginTop: "0.2rem",
            marginBottom: "-2rem",
            zIndex: 1,
            position: "relative",
            backgroundColor: themePalette.BG,
          }}
        >
          {prodName}
        </Typography>
        <Box sx={{ zIndex: 0, position: "relative", top: "-2rem" }}>
          <QuiltedImageList itemData={imgProd} />
        </Box>
        <CardContent>
          <Grid container>
            <Grid
              item
              sx={{
                fontFamily: themePalette.DEF,
                mt: "-4.5rem",
                position: "relative",
                left: "15rem",
              }}
            >
              <UserAvatarPopOver userName={ownerName} />
            </Grid>
            <Grid item mt="-2.5rem">
              <Typography variant="body2" sx={{ fontFamily: themePalette.DEF }}>
                {pricePerDay} / {t("day")}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: themePalette.DEF,
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  WebkitLineClamp: 3, // Number of lines to display
                  textOverflow: "ellipsis",
                }}
              >
                {description}
              </Typography>
              <CalendarMonthTwoToneIcon
                sx={{ position: "relative", mt: "0.5rem" }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
