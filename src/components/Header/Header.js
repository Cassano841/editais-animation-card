import Create from "../CRUD/Create";
import Navbar from "../../components/Navbar/Navbar";
import "./Header.css";
import Upload from "../Miscelaneous/Upload"
import { Alert, AlertTitle } from "@mui/material";


export default function Header() {
  return (
    <div>
      <Navbar />
      <div className="header-titulo">
        <h2>Cadastro de Edital</h2>
      </div>
      <div className="header-create">
        <Create />
      </div>
      <div className="header-titulo">
        <h1>Subir arquivo</h1>
        <Alert severity="success">
          <AlertTitle>Informação</AlertTitle>
          Faça o upload de um arquivo JSON contendo as informações relacionadas aos editais, sendo 1 ou mais editais.
        </Alert>
        <Upload />
      </div>
    </div>
  );
}
