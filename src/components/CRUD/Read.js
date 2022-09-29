import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { AiFillDelete, AiFillStar } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";
import moment from "moment";
import Delete from "../CRUD/Delete";
import Update from "../CRUD/Update";
import Favoritar from "../CRUD/Favoritar";
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    Chip,
    Box,
    Grid
} from "@mui/material";

function Read() {
    const [edital, setEdital] = useState([]);


    const { id } = useParams();
    const fetchEdital = async () => {
        const response = await fetch(`http://localhost:5000/api/editais/${id}`);
        const edital = await response.json();
        setEdital(edital);
    };

    useEffect(() => {
        fetchEdital();
    });

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Box>
                    <Grid>
                        <Card>
                            {/*Início do conteúdo do card, puxando as infos do servidor */}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ backgroundColor: "lightgray" }}>
                                    {edital.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {edital.content} <br />
                                    <br />
                                </Typography>
                                <Chip label={edital.label} />
                                <Grid container spacing={2}>
                                    <Grid item xs={8}>
                                        <p className="creationDate">
                                            Publicado em: {moment(edital.created).format("DD-MM-YYYY HH:mm")}
                                        </p>
                                        <p className="creationDate">
                                            Atualizado em: {moment(edital.updated).format("DD-MM-YYYY HH:mm")}
                                        </p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <p className="creationDate">Status: OK </p>
                                    </Grid>
                                </Grid>
                                <Box>
                                    <Box>
                                        <Typography id="modal-modal-title" variant="h6" component="h6">
                                            Etapas do Processo
                                        </Typography>
                                        <br></br>
                                        <Grid>
                                        
                                            
                                        </Grid>
                                    </Box>
                                </Box>
                            </CardContent>

                            {/*Fim do código modal do botão Mais Informações*/}
                            <div className="card-buttons">
                                {/*Início da seção de Edit, Delete e Favorite do card*/}
                                <CardActions>
                                    {/*Este botão abre um modal para EDITAR o edital*/}
                                    <Button size="large" onClick={(e) => Update(e)}>
                                        <RiPencilFill />
                                    </Button>
                                    {/*Final do código de EDIÇÃO do edital */}

                                    {/*Este botão DELETA o edital em questão pelo ID*/}
                                    <Button size="large" onClick={(e) => Delete(edital._id, e)}>
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
                    </Grid>
                </Box>
            </main>
        </>
    );
}

export default Read;
