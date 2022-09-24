import Create from "../CRUD/Create";
import Navbar from "../../components/Navbar/Navbar";
import "./Header.css";
import InQA from "../Miscelaneous/InQA/InQA";
import Upload from "../Miscelaneous/Upload"


export default function Header() {
  return (
    <div>
      <Navbar />
      <InQA />
      <div className="header-titulo">
        <h2>Cadastro de Edital</h2>
      </div>
      <div className="header-create">
        <Create />
      </div>
      <div className="header-titulo">
        <h1>Subir arquivo</h1>
        <Upload/>
      </div>
    </div>
  );
}
