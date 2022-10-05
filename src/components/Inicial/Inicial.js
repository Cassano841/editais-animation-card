import Navbar from "../Navbar/Navbar";
import LastFivePostsCreated from "../Miscelaneous/LastPosts/LastFivePostsCreated";
import LastFivePostsUpdated from "../Miscelaneous/LastPosts/LastFivePostsUpdated";
import LoremIpsun from "../Miscelaneous/LoremIpsum/LoremIpsum";
import Destaques from "../Miscelaneous/LastPosts/Destaques";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Inicial() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="conteudo">
        <Container
          maxWidth="lg"
          sx={{
            padding: 5,
          }}
        >
          <Box
            sx={{
              width: "fixed",
              height: 200,
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
              Bem vindo a plataforma Watcher!
            </Typography>
            <Typography variant="h6">
              Esta plataforma tem como finalidade disponibilizar de forma
              agradável as informações relacionadas às datas do calendário
              acadêmico e também aos editais de Ensino, Extensão e Pesquisa que
              acontecem ao longo do ano no Instituto.
            </Typography>
            <Typography variant="subtitle2" align="right" margin={5}>
              Autor/Desenvolvedor: Nícholas Cassano B.
            </Typography>
          </Box>
        </Container>

        <Destaques />

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box>
              <LoremIpsun />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <LastFivePostsCreated />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <LastFivePostsUpdated />
            </Box>
          </Grid>
        </Grid>
      </main>
    </>
  );
}

export default Inicial;
