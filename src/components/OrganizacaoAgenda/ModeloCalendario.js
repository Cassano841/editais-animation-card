import * as React from "react";
import { Alert, AlertTitle } from "@mui/material/";
import moment from "moment";
import "./ModeloCalendario.css";

function ModeloCalendario({ evento }) {
  return (
    <Alert icon={false} severity="success" variant="filled">
      <AlertTitle var>{moment(evento.dataEvento).format("DD/MM/YYYY")}</AlertTitle>
      {evento.titulo}
    </Alert>
  );
}

export default ModeloCalendario;
