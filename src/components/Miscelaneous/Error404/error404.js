import Navbar from "../../Navbar/Navbar";
import "./error404.css";

function Error404() {
  return (
    <div>
      <Navbar />
      <div className="error">
        <h2>404 - Página não encontrada</h2>
      </div>
    </div>
  );
}

export default Error404;
