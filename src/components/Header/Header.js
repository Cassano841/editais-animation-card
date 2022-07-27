import Create from "../CRUD/Create";
import Navbar from "../../components/Navbar/Navbar";
import "./Header.css";

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
    </div>
  );
}
