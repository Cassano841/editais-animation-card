import Create from "../CRUD/Create";
import Navbar from "../Navbar/Navbar";
import "./CadastroEditais.css";
import Upload from "../Miscelaneous/Upload"
import { Alert, AlertTitle, Grid } from "@mui/material";
import Footer from "../Footer/Footer";
import UploadCalendario from "../Miscelaneous/UploadCalendario";


export default function Header() {
  return (
    <>
      <div>
        <Navbar />
        <div className="conteudo">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <div className="header-titulo">
                <h1>Cadastro de Edital</h1>
              </div>
              <div className="header-create">
                <Create />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="header-titulo">
                <h1>Subir arquivo para Edital</h1>
                <Alert severity="success">
                  <AlertTitle>Informação</AlertTitle>
                  Faça o upload de um arquivo JSON contendo as informações relacionadas aos editais, sendo 1 ou mais editais.
                </Alert>
                <Upload />
              </div>
              <hr></hr>
              <div className="header-titulo">
                <h1>Subir arquivo para Calendário</h1>
                <Alert severity="success">
                  <AlertTitle>Informação</AlertTitle>
                  Faça o upload de um arquivo JSON contendo as informações relacionadas ao calendário acadêmico.
                </Alert>
                <UploadCalendario />
              </div>
            </Grid>
          </Grid>
        </div>


      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
