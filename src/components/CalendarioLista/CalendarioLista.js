import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import Navbar from "../Navbar/Navbar";
//import FilterEvento from "../Filter/FilterEvento"
import Footer from "../Footer/Footer";
import InConstruction from "../Miscelaneous/InConstruction/InConstruction";
import ModeloCalendario from "../OrganizacaoAgenda/ModeloCalendario";
import FilterEvento from "../Filter/FilterEvento";
import "./CalendarioLista.css";

function CalendarioLista() {
  const [eventos, setEventos] = useState([]);

  const fetchCalendarioLista = async () => {
    const response = await fetch("http://localhost:5000/api/eventos");
    const data = await response.json();
    setEventos(data);

  };

  useEffect(() => {
    fetchCalendarioLista();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="conteudo">
        <InConstruction />
      
        <motion.div className="posts-list" layout>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {eventos.map((eventos) => (
              <Grid item xs={2} sm={4} md={4}>
                <ModeloCalendario key={eventos._id} evento={eventos} />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default CalendarioLista;
