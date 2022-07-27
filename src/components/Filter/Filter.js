import { useEffect } from "react";
import "./Filter.css";
import { Button, Stack } from "@mui/material";

function Filter({ setActiveButton, activeButton, setFiltered, posts }) {
  useEffect(() => {
    if (activeButton === "all") {
      setFiltered(posts);
      return;
    }
    const filtered = posts.filter(
      (postagem) => postagem.label === activeButton
    );
    setFiltered(filtered);
  }, [activeButton, posts, setFiltered]);

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
          className={activeButton === "editais" ? "active" : ""}
          onClick={() => setActiveButton("editais")}
        >
          Editais
        </Button>
        <Button
          variant="contained"
          className={activeButton === "calendario" ? "active" : ""}
          onClick={() => setActiveButton("calendario")}
        >
          Calendário
        </Button>
        <Button
          variant="contained"
          className={activeButton === "Extensão" ? "active" : ""}
          onClick={() => setActiveButton("Extensão")}
        >
          Extensão
        </Button>
      </Stack>
    </div>
  );
}

export default Filter;
