import "../../App.css";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./CalendarioLista.css";
import ModeloCalendario from "../OrganizacaoAgenda/ModeloCalendario";

function CalendarioLista() {
    const [eventos, setEventos] = useState([]);

    const fetchEventos = async () => {
        const response = await fetch("http://localhost:5000/api/eventos");
        const data = await response.json();
        setEventos(data);
    }

    useEffect(() => {
        fetchEventos();
    }, []);

    return (
        <>
            <div>
                <Navbar />
                {eventos.map((eventos) => (
                    <main className="calendario-listagem">
                        <Grid container spacing={2}>
                            <Grid item xs={2}>

                            </Grid>
                            <Grid item xs={8}>
                                <ModeloCalendario key={eventos._id} evento={eventos} />
                            </Grid>
                            <Grid item xs={2}>

                            </Grid>
                        </Grid>
                    </main>
                ))}
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default CalendarioLista;