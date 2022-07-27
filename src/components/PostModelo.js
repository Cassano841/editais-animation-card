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
    <Card sx={{ maxWidth: 345 }}>
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
      <CardActions>
        <Button size="small" onClick={Update}>
        <RiPencilFill/>
        </Button>
        <Button size="small" onClick={Delete}>
        <AiFillDelete/>
        </Button>
        <Button size="small" onClick={Favoritar}>
        <AiFillStar/>
        </Button>
      </CardActions>
      <Button onClick={handleOpen}>Mais Informações</Button>
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
    </Card>
    
  );
}

export default PostModelo;
