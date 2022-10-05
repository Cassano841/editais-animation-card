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
import "./Read.css";

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
                            </CardContent>
                        </Card>
                    </Grid>
                </Box>
            </main>
        </>
    );
}

export default Read;
