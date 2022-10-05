import { useEffect } from "react";
import "./Filter.css";
import { Button, Stack } from "@mui/material";

function Filter({ setActiveButton, activeButton, setFiltered, eventos }) {
  useEffect(() => {
    if (activeButton === "all") {
      setFiltered(eventos);
      return;
    }
    const filtered = eventos.filter(
      (evento) => evento.titulo === activeButton
    );
    setFiltered(filtered);
  }, [activeButton, eventos, setFiltered]);

  return (
    <div className="filter-container">
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          className={activeButton === "all" ? "active" : ""}
          onClick={() => setActiveButton("all")}
        >
          All
        </Button>
        <Button
          variant="contained"
          className={activeButton === "Janeiro" ? "active" : ""}
          onClick={() => setActiveButton("Janeiro")}
        >
          Janeiro
        </Button>
        <Button
          variant="contained"
          className={activeButton === "Fevereiro" ? "active" : ""}
          onClick={() => setActiveButton("Fevereiro")}
        >
          Fevereiro
        </Button>
        <Button
          variant="contained"
          className={activeButton === "Março" ? "active" : ""}
          onClick={() => setActiveButton("Março")}
        >
          Março
        </Button>
      </Stack>
    </div>
  );
}

export default Filter;
