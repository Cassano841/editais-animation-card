import "../Posts/PostModelo.css";
import {
  Paper,
  Alert,
  AlertTitle
} from "@mui/material/";
import moment from "moment";
import "moment/locale/pt-br";


function ModeloCalendario({ evento }) {

  return (
    <Paper>
      <Alert icon={false} variant="filled">
        <AlertTitle>
          {moment(evento.dataEvento).format("DD/MMMM/YYYY")}
        </AlertTitle>
        {evento.titulo}
      </Alert>
    </Paper>
  );
}

export default ModeloCalendario;
