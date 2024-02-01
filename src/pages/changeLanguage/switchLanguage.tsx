// Dependencias
import React from "react";
import { Box, Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { useTranslation } from "react-i18next";

const LanguageSwitchButton: React.FC = () => {
  const { i18n } = useTranslation();
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        aria-controls="language-menu"
        aria-haspopup="true"
        onClick={handleOpenMenu}
        style={{
          border: "none",
        }}
      >
        <LanguageOutlinedIcon color="info" />
      </Button>

      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem
          onClick={() => {
            handleLanguageChange("es");
          }}
        >
          Español
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange("en")}>English</MenuItem>
      </Menu>
    </Box>
  );
};

export default LanguageSwitchButton;
