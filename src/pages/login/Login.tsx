import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
type LoginType = {
  username: string;
  password: string;
};
export const LoginPage: React.FC<{}> = () => {
  const [loginData, setLoginData] = useState<LoginType>({
    username: "",
    password: "",
  });
  const infoLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginData);
  };
  const handleLogin = () => {
    // Aquí podrías agregar la lógica de autenticación
    alert("¡Bienvenido Usuario!");
  };

  return (
    <Container sx={{ mt: 10 }} maxWidth="sm">
      {/* opcion 1 */}
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 3,
            }}
          >
            <Typography variant="h4" align="center" gutterBottom>
              Iniciar Sesión
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={1}>
                <TextField
                  name="username"
                  margin="normal"
                  fullWidth
                  label="Nombre de Usuario"
                  sx={{ mt: 0.5, mb: 1.5 }}
                  type="text"
                  required
                  onChange={infoLogin}
                />
                <TextField
                  name="password"
                  margin="normal"
                  fullWidth
                  label="Contraseña"
                  sx={{ mt: 1.2, mb: 1.2 }}
                  type="password"
                  required
                  onChange={infoLogin}
                />
              </Stack>
              <Button
                fullWidth
                type="submit"
                sx={{ mt: 1.5, mb: 1.5 }}
                variant="contained"
                onClick={handleLogin}
              >
                Iniciar Sesión
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      {/* opcion2 */}
      <form noValidate onSubmit={handleSubmit}>
      <Typography variant="h4" align="center" gutterBottom>
        Iniciar Sesión
      </Typography>
      <TextField
        name="username"
        label="Nombre de Usuario"
        variant="outlined"
        fullWidth
        margin="normal"
        type="text"
        onChange={infoLogin}
        />
      <TextField
        name="password"
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
        onChange={infoLogin}
        />
      <Button
        disableElevation
        variant="contained"
       type="submit"
        fullWidth
        sx={{ mt: 2 }}
        >
        Iniciar Sesión
      </Button>
        </form>
      <br />
      {/* opcion3 */}
      <CssBaseline />
      <Paper
        elevation={3}
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 3,
        }} 
      >
        <Typography variant="h5" gutterBottom>
          Iniciar Sesión
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            name="username"
            label="Nombre de Usuario"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="text"
            onChange={infoLogin}
          />
          <TextField
            name="password"
            variant="outlined"
            label="Contraseña"
            margin="normal"
            required
            fullWidth
            type="password"
            onChange={infoLogin}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleLogin}
          >
            Iniciar Sesión
          </Button>
        </form>
      </Paper>
    </Container>
  );
};
