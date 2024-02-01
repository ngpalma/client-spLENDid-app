import * as React from "react";
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import icon from "../../assets/icon.png";
import { useTranslation } from "react-i18next";
import LanguageSwitchButton from "../changeLanguage/switchLanguage";
import { registerUser } from "../../redux/slices/user.slice";
import { useAppDispatch } from "../../redux/hooks";

export const SignUp: React.FC<{}> = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    rPassword: string;
  }

  const [user, setUser] = React.useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const property = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [property]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Verificar si las contraseñas coinciden
    if (user.password !== user.rPassword) {
      console.log("Las contraseñas no coinciden");
      return;
    }

    dispatch(registerUser(user)).then(() => {
      console.log("Registro exitoso");
      setUser({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        rPassword: "",
      });
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LanguageSwitchButton />

        <img src={icon} alt="icon" style={{ height: "5rem" }} />

        <Typography component="h1" variant="h5">
          {t("signUp")}
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label={t("firstName")}
                autoFocus
                value={user.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label={t("lastName")}
                name="lastName"
                autoComplete="family-name"
                value={user.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label={t("emailAddress")}
                name="email"
                autoComplete="email"
                value={user.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label={t("password")}
                type="password"
                id="password"
                autoComplete="new-password"
                value={user.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="rPassword"
                label={t("repeat")}
                type="password"
                id="rPassword"
                autoComplete="new-password"
                value={user.rPassword}
                onChange={handleChange}

              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label={<Link href="/terms">{t("termsServices")}</Link>}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
          >
            {t("signUp")}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                {t("haveAccount")} {t("signIn")}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
