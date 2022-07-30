import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Calendario.css";

function Calendario() {
  return (
    <>
      <navbar>
        <Navbar />
      </navbar>
      <main className="calendario">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Teste
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Teste 2
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Calendario;
