import Create from "../CRUD/Create";
import Navbar from "../../components/Navbar/Navbar";
import "./Header.css";
import InQA from "../Miscelaneous/InQA/InQA";

export default function Header() {
  return (
    <div>
      <Navbar />
      <InQA/>
      <div className="header-titulo">
        <h2>Cadastro de Edital</h2>
      </div>
      <div className="header-create">
        <Create />
      </div>
    </div>
  );
}
