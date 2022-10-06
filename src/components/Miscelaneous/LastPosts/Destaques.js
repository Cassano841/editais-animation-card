import "./LastFivePosts.css";
import { useEffect, useState } from "react";
import {
  Grid,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";
import PostModelo from "../../Posts/PostModelo";

function Destaques() {
  const [editais, setEditais] = useState([]);

  const fetchDestaques = async () => {
    const response = await fetch(
      "http://localhost:2300/api/editais/destaques"
    );
    const data = await response.json();
    setEditais(data);
  };

  useEffect(() => {
    fetchDestaques();
  }, []);

  return (
    <>
      <div>
        <main>
          <Grid
            sx={{
              margin: 5,
            }}
          >
            <Box>
              <Typography variant="h5">Editais em Destaque</Typography>
            </Box>
            <br />
            <Box>
              <Grid
                container
                spacing={1}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
              >
                {editais.map((editais) => (
                  <PostModelo key={editais._id} post={editais} />
                ))}
              </Grid>
            </Box>
          </Grid>
        </main>
      </div>
    </>
  );
}

export default Destaques;
