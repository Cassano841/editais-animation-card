import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { AiFillDelete, AiFillStar } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";
import moment from "moment";
import Delete from "../CRUD/Delete";
import Favoritar from "../CRUD/Favoritar";
import { Link } from 'react-router-dom';
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
import "./Read.css";

function Read() {
    const [edital, setEdital] = useState([]);
    const { id } = useParams();
    const fetchEdital = async () => {
        const response = await fetch(`http://localhost:2300/api/editais/${id}`);
        const edital = await response.json();
        setEdital(edital);
    };

    useEffect(() => {
        fetchEdital();
    });

    const setData = (edital) => {
        let { _id, title, content, label } = edital;
        localStorage.setItem('ID', _id);
        localStorage.setItem('Title', title);
        localStorage.setItem('Content', content);
        localStorage.setItem('Label', label)
}

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Box>
                    <Grid>
                        <Card>
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
                                            Publicado em: {moment(edital.created_at).format("DD/MM/YYYY HH:mm")}
                                        </p>
                                        <p className="creationDate">
                                            Atualizado em: {moment(edital.updated_at).format("DD/MM/YYYY HH:mm")}
                                        </p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <p className="creationDate">{edital.status}</p>
                                    </Grid>
                                </Grid>
                                <Box>
                                    <Box>
                                        <Typography id="modal-modal-title" variant="h6" component="h6">
                                            Etapas do Processo
                                        </Typography>
                                        <br></br>
                                        <Grid>
                                            <Grid>
                                                {edital.etapas?.map(etapa =>
                                                    <>
                                                        <table>
                                                            <tr>
                                                                <th>Data</th>
                                                                <th>Detalhe</th>
                                                            </tr>
                                                            <tr>
                                                                <td>{moment(etapa.primeiraEtapa.data).format("DD/MM/YYYY")}</td>
                                                                <td> {etapa.primeiraEtapa.nome}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>{moment(etapa.segundaEtapa.data).format("DD/MM/YYYY")}</td>
                                                                <td> {etapa.segundaEtapa.nome}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>{moment(etapa.terceiraEtapa.data).format("DD/MM/YYYY")}</td>
                                                                <td> {etapa.terceiraEtapa.nome}</td>
                                                            </tr>
                                                        </table>
                                                    </>
                                                )}
                                            </Grid>

                                        </Grid>
                                    </Box>
                                </Box>
                            </CardContent>
                            <div className="card-buttons">
                                <CardActions>
                                    <Link
                                        key={edital.id}
                                        to={{
                                            pathname: `/editais/edit/${edital._id}`
                                        }}
                                    >
                                        <Button size="large" onClick={() => setData(edital)}>
                                            <RiPencilFill />
                                        </Button>
                                    </Link>
                                    <Button size="large" onClick={(e) => Delete(edital._id, e)}>
                                        <AiFillDelete />
                                    </Button>
                                    <Button size="large" onClick={(e) => Favoritar(edital._id, e)}>
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
