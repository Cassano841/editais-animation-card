import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./CalendarioLista.css";
import Agosto from "../OrganizacaoAgenda/Agosto";
import Setembro from "../OrganizacaoAgenda/Setembro";
import Outubro from "../OrganizacaoAgenda/Outubro";
import InConstruction from "../Miscelaneous/InConstruction/InConstruction";


function CalendarioLista () {
    return (
        <>
        <navbar>
            <Navbar/>
            <InConstruction />
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