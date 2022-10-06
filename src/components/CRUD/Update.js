import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Paper,
    TextField,
    Grid,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Checkbox,
    FormControlLabel
} from "@mui/material";
import Navbar from "../Navbar/Navbar";
import axios from 'axios';

export default function Update() {
    const [title, setTitulo] = useState('');
    const [content, setContent] = useState('');
    const [label, setLabel] = useState('');
    const [checked, setChecked] = useState(false);


    const handleChangeLabel = (event) => {
        setLabel(event.target.value);
    };

    const handleChangeCheck = (event) => {
        setChecked(event.target.value);
    };

    const [id, setID] = useState();

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setTitulo(localStorage.getItem('Title'));
        setContent(localStorage.getItem('Content'));
        setLabel(localStorage.getItem('Label'))
    }, []);

    const updateEdital = () => {
        axios.put(`http://localhost:2300/api/editais/${id}`, {
            title,
            content,
            label
        })
        console.log("Funciona!");
    }

    return (
        <div>
            <Navbar />
            <form>
                <Box sx={{ minWidth: 120 }}>
                    <Paper>
                        <Grid>
                            <Grid className="create-item">
                                <TextField
                                    className="create-fields"
                                    placeholder="Título"
                                    value={title}
                                    onChange={(e) => setTitulo(e.target.value)}
                                />
                            </Grid>
                            <Grid className="create-item">
                                <TextField
                                    className="create-fields"
                                    multiline
                                    rows={4}
                                    value={content}
                                    placeholder="Descrição"
                                    onChange={(e) => setContent(e.target.value)}
                                />
                            </Grid>
                            <FormControl fullWidth>
                                <Grid className="create-item">
                                    <InputLabel>Categoria</InputLabel>
                                    <Select
                                        value={label}
                                        onChange={handleChangeLabel}
                                        label="Categoria"
                                        className="create-item-select"
                                    >
                                        <MenuItem value={"Ensino"}>Ensino</MenuItem>
                                        <MenuItem value={"Extensão"}>Extensão</MenuItem>
                                        <MenuItem value={"Pesquisa"}>Pesquisa</MenuItem>
                                    </Select>
                                </Grid>
                            </FormControl>
                            <FormControl fullWidth>
                                <Grid className="create-item">
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                value="remember"
                                                color="primary"
                                                checked={checked}
                                                onChange={handleChangeCheck}
                                                inputProps={{ 'aria-label': 'controlled' }}
                                            />}
                                        label="Destaque"
                                    />
                                </Grid>
                            </FormControl>
                        </Grid>
                    </Paper>
                    <Button variant="contained" type='submit' onClick={updateEdital}>Editar</Button>
                </Box>
            </form>
        </div>
    )
}
