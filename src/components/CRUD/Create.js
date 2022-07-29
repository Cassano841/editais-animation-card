import React, { useState } from "react";
import axios from "axios";
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
} from "@mui/material";
import "./Create.css";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [title, setTitulo] = useState("");
  const [content, setDescricao] = useState("");
  const [label, setLabel] = useState("");

  const navigate = useNavigate();

  const navigateToWatcherHome = () => {
    navigate("/");
  };

  const handleChangeLabel = (event) => {
    setLabel(event.target.value);
  };

  const postData = () => {
    console.log(title);
    console.log(content);
    console.log(label);
    axios.post("http://localhost:5000/api/posts", {
      title,
      content,
      label,
    });
    window.location.reload(false);
  };

  return (
    <main>
      <div className="create-box">
        <Box sx={{ minWidth: 120 }}>
          <Paper>
            <Grid className="create-form">
              <Grid className="create-item">
                <TextField
                  className="create-fields"
                  placeholder="Título"
                  onChange={(e) => setTitulo(e.target.value)}
                />
              </Grid>
              <Grid className="create-item">
                <TextField
                  className="create-fields"
                  multiline
                  rows={4}
                  placeholder="Descrição"
                  onChange={(e) => setDescricao(e.target.value)}
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
              <Grid className="create-item">
                <Button
                  variant="contained"
                  color="warning"
                  onClick={navigateToWatcherHome}
                >
                  Cancelar
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  type="submit"
                  onClick={postData}
                >
                  Criar
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </div>
    </main>
  );
}
