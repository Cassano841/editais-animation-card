import { Grid, Box, Typography } from "@mui/material";
import Footer from "../Footer/Footer";
import InConstruction from "../Miscelaneous/InConstruction/InConstruction";
import Navbar from "../Navbar/Navbar";
import "./FAQ.css";

function FAQ() {
  return (
    <>
      <navbar>
        <Navbar />
        <InConstruction/>
      </navbar>
      <main className="faq-content">
        <Grid>
          <Box
            sx={{
              width: "fixed",
              height: "65vh",
              backgroundColor: "lightgray",
              borderRadius: 2,
              padding: 5,
            }}
          >
            <Typography
              variant="h3"
              component="div"
              gutterBottom
              align="center"
            >
              FAQ Watcher
            </Typography>
            <Typography variant="h6" align="center">
              Aqui será possível retirar dúvidas quanto às funcionalidades disponibilizadas neste sistema
            </Typography>
            <Grid
              sx={{
                margin: "20px",
              }}
            >
              <Box
                sx={{
                  margin: "20px",
                }}
              >
                <Typography variant="h5">Como criar um novo edital?</Typography>
                <Typography variant="body2">Clicando aqui</Typography>
              </Box>
              <Box
                sx={{
                  margin: "20px",
                }}
              >
                <Typography variant="h5">Como criar um novo edital?</Typography>
                <Typography variant="body2">Clicando aqui</Typography>
              </Box>
              <Box
                sx={{
                  margin: "20px",
                }}
              >
                <Typography variant="h5">Como criar um novo edital?</Typography>
                <Typography variant="body2">Clicando aqui</Typography>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </main>
      <footer>
          <Footer/>
      </footer>
    </>
  );
}

export default FAQ;
