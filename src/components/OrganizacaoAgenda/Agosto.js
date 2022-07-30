import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Paper } from "@mui/material";
import "../Calendario/Calendario.css";

function Agosto() {
  return (
    <>
      <header className="calendario">
        <h2>Agosto</h2>
      </header>
      <main className="calendario">
        <Paper elevation={5} sx={{height: 300}}>
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
        </Paper>
      </main>
    </>
  );
}

export default Agosto;
