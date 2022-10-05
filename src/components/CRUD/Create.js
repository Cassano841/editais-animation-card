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
  Checkbox,
  FormControlLabel
} from "@mui/material";
import "./Create.css";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [title, setTitulo] = useState("");
  const [content, setContent] = useState("");
  const [label, setLabel] = useState("");
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  const navigateToWatcherHome = () => {
    navigate("/");
  };

  const handleChangeLabel = (event) => {
    setLabel(event.target.value);
  };

  const handleChangeCheck = (event) => {
    setChecked(event.target.checked);
  }

  const postData = () => {
    if (!title || !content || !label) {
      alert("É necessário preencher todos os campos para criação do edital!")
      window.location.reload(false);
    } else {
      axios.post("http://localhost:5000/api/editais", {
        title,
        content,
        label,
        checked,
      });
      window.location.reload(false);
    }
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
              <Grid className="create-buttons">
                <Button
                  variant="contained"
                  color="success"
                  type="submit"
                  onClick={postData}
                >
                  Criar
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={navigateToWatcherHome}
                >
                  Cancelar
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </div>
    </main>
  );
}
