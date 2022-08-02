import Navbar from "../Navbar/Navbar";
import {
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid, 
  Link
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./Login.css";
import InQA from "../Miscelaneous/InQA/InQA";

function Login() {
  return (
    <>
      <header>
        <Navbar />
        <InQA />
      </header>
      <div className="login">
          <div>
        <Box
          sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Entrar
          </Typography>
          <Box
            component="form"
            
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="senha"
              label="Senha"
              type="password"
              id="senha"
              autoComplete="senha-atual"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Logar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu a senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  Crie sua conta aqui!
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </div>
      </div>
    </>
  );
}

export default Login;