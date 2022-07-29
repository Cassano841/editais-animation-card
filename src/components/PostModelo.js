import "./PostModelo.css";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Chip,
  Modal,
  Box
} from "@mui/material/";
import Delete from "./CRUD/Delete";
import Update from "./CRUD/Update";
import Favoritar from "./CRUD/Favoritar";
import { AiFillDelete, AiFillStar } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";
import { useState } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function PostModelo({ post }) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    //Iníco do código onde monta o card padrão
    <Card sx={{ maxWidth: 345 }}>
      {/*Início do conteúdo do card, puxando as infos do servidor */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title} 
        </Typography>
        <p>Publicado em: {post.date}</p>
        <Typography variant="body2" color="text.secondary">
          {post.content} <br />
          <br />
        </Typography>
        <Chip label={post.label} />
      </CardContent>
      {/*Botão que gera o modal para maior visualização do edital */}
      <Button onClick={handleOpen} className="card-button-info">Mais Informações</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edital
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {post.content}
          </Typography>
        </Box>
      </Modal>
      {/*Fim do código modal do botão Mais Informações*/}

      {/*Início da seção de Edit, Delete e Favorite do card*/}
      <CardActions>
        {/*Este botão abre um modal para EDITAR o edital*/}
        <Button size="small" onClick={handleOpen}>
        <RiPencilFill/>
          <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Update/>
            </Box>
          </Modal>
        </Button>
        {/*Final do código de EDIÇÃO do edital */}
        
        {/*Este botão DELETA o edital em questão pelo ID*/}
        <Button size="small" onClick={(e) => Delete(post._id, e)}>
        <AiFillDelete/>
        </Button>
        {/*Final do código de DELEÇÃO do edital */}

        {/*Este botão favorita o edital e vincula ao usuário*/}
        {/*EM DESENVOLVIMENTO*/}
        <Button size="small" onClick={Favoritar}>
        <AiFillStar/>
        </Button>
      </CardActions>
    </Card>
    
  );
}

export default PostModelo;
