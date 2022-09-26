import "./LastFivePosts.css";
import { useEffect, useState } from "react";
import {
  Grid,
  Card,
  Typography,
  CardActionArea,
  CardContent,
} from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";
import InQA from "../InQA/InQA";

function LastFivePosts() {
  const [posts, setPosts] = useState([]);

  const fetchLastFivePosts = async () => {
    const response = await fetch(
      "http://localhost:5000/api/editais/lastFivePosts"
    );
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchLastFivePosts();
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
            <InQA/>
            <Box>
              <Typography variant="h5">Últimos 5 Ediais Publicados</Typography>
            </Box>
            <Box>
              <Grid>
                {posts.map((posts) => (
                  <Grid>
                    <Card
                      sx={{ maxWidth: 600, margin: "5px", border: "2px solid" }}
                    >
                      <CardActionArea>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {posts.title}
                          </Typography>
                          <Grid container spacing={2}>
                            <Grid item xs={4}>
                              <p className="creationDate">
                                Publicado em:{" "}
                                {moment(posts.created).format("DD-MM-YYYY HH:mm")}
                              </p>
                              <p className="creationDate">
                                Atualizado em:{" "}
                                {moment(posts.updated).format("DD-MM-YYYY HH:mm")}
                              </p>
                            </Grid>
                            <Grid item xs={4} color="green" fontWeight={"bold"}>
                              <p className="creationDate">
                                Categoria: {posts.label}
                              </p>
                            </Grid>
                            <Grid item xs={4} color="red" fontWeight={"bold"}>
                              <p className="creationDate">Status: Vigente</p>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </main>
      </div>
    </>
  );
}

export default LastFivePosts;
