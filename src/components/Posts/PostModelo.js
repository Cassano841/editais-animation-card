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
import Delete from "../CRUD/Delete";
import Update from "../CRUD/Update";
import Favoritar from "../CRUD/Favoritar";
import { AiFillDelete, AiFillStar } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";
import { useState } from "react";
import moment from "moment";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 400,
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
    //Iníco do código onde monta o card padrão

    <Card sx={{ width: 570, border: '2px solid' }}>
      {/*Início do conteúdo do card, puxando as infos do servidor */}
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
              Publicado em: {moment(post.date).format("DD-MM-YYYY HH:mm")}
            </p>
          </Grid>
          <Grid item xs={4}>
            <p className="creationDate">Status: Vigente</p>
          </Grid>
        </Grid>
      </CardContent>
      {/*Botão que gera o modal para maior visualização do edital */}
      <div className="mais-info">
          <Button
            variant="contained"
            
            onClick={handleOpen}
            className="card-button-info"
          >
            Mais Informações
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
              Publicado em: {moment(post.date).format("DD-MM-YYYY HH:mm")}
            </Grid>
            <Grid item xs={4}>
              Status: Vigente
            </Grid>
          </Grid>
        </Box>
      </Modal>
      {/*Fim do código modal do botão Mais Informações*/}
      <div className="card-buttons">
        {/*Início da seção de Edit, Delete e Favorite do card*/}
        <CardActions>
          {/*Este botão abre um modal para EDITAR o edital*/}
          <Button size="large" onClick={(e) => Update}>
            <RiPencilFill />
          </Button>
          {/*Final do código de EDIÇÃO do edital */}

          {/*Este botão DELETA o edital em questão pelo ID*/}
          <Button size="large" onClick={(e) => Delete(post._id, e)}>
            <AiFillDelete />
          </Button>
          {/*Final do código de DELEÇÃO do edital */}

          {/*Este botão favorita o edital e vincula ao usuário*/}
          {/*EM DESENVOLVIMENTO*/}
          <Button size="large" onClick={Favoritar}>
            <AiFillStar />
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}

export default PostModelo;
