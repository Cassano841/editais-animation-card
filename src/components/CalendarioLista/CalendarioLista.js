import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./CalendarioLista.css";
import Agosto from "../OrganizacaoAgenda/Agosto";
import Setembro from "../OrganizacaoAgenda/Setembro";
import Outubro from "../OrganizacaoAgenda/Outubro";


function CalendarioLista () {
    return (
        <>
        <navbar>
            <Navbar/>
        </navbar>
        <main className="calendario-listagem">
            <Agosto/>
            <Setembro/>
            <Outubro/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
    )
}

export default CalendarioLista;