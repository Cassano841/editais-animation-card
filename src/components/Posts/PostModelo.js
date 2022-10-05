import "./PostModelo.css";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Chip,
  Modal,
  Box,
  Grid,
} from "@mui/material/";
import Favoritar from "../CRUD/Favoritar";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function PostModelo({ post }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ width: 570, border: '2px solid' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ backgroundColor: "lightgray" }}>
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.content} <br />
          <br />
        </Typography>
        <Chip label={post.label} />
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <p className="creationDate">
              Publicado em: {moment(post.created).format("DD-MM-YYYY HH:mm")}
            </p>
            <p className="creationDate">
              Atualizado em: {moment(post.updated).format("DD-MM-YYYY HH:mm")}
            </p>
          </Grid>
          <Grid item xs={4}>
            <p className="creationDate">Status: Vigente</p>
          </Grid>
        </Grid>
      </CardContent>
      <div className="mais-info">
        <Button
          variant="contained"
          onClick={handleOpen}
          className="card-button-info"
        >
          Ver Mais
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {post.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 4 }}>
            {post.content}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 4 }}>
            Categoria: {post.label}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              Atualizado em: {moment(post.updated).format("DD-MM-YYYY HH:mm")}
            </Grid>
            <Grid item xs={4}>
              Status: Vigente
            </Grid>
          </Grid>
          <br></br>
          <Box>
            <Typography id="modal-modal-title" variant="h6" component="h6">
              Etapas do Processo
            </Typography>
            <br></br>
            <Grid>
              <Grid>
                {post.etapas.map(etapa =>
                  <>
                    <div>{moment(etapa.primeiraEtapa.data).format("DD-MM-YYYY")} - {etapa.primeiraEtapa.nome}</div>
                    <br />
                    <div>{moment(etapa.segundaEtapa.data).format("DD-MM-YYYY")} - {etapa.segundaEtapa.nome}</div>
                    <br />
                    <div>{moment(etapa.terceiraEtapa.data).format("DD-MM-YYYY")} - {etapa.terceiraEtapa.nome}</div>
                  </>
                )}
              </Grid>
            </Grid>
            <br></br>
            <Box className="mais-info">
              <Link
                key={post._id}
                to={{
                  pathname: `/editais/${post._id}`
                }}
              >
                <Button variant="contained">
                  Mais Informações
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Modal>
      <div className="card-buttons">
        <CardActions>
          <Button size="large" onClick={(e) => Favoritar(post._id, e)}>
            <AiFillStar />
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}

export default PostModelo;
