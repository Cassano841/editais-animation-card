import "./LastFivePosts.css";
import { useEffect, useState } from "react";
import {
  Grid,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";
import PostModelo from "../../Posts/PostModelo";


function LastFivePostsUpdated() {
  const [posts, setPosts] = useState([]);

  const fetchLastFivePostsUpdated = async () => {
    const response = await fetch(
      "http://localhost:2300/api/editais/lastFivePostsUpdated"
    );
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchLastFivePostsUpdated();
  }, []);

  return (
    <>
      <div className="lastFiveUpdated">
        <main>
          <Grid
            sx={{
              margin: 5,
            }}
          >
            <Box align="center">
              <Typography variant="h5" alignSelf={"center"}>5 Últimos Editais Updated</Typography>
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
                {posts.map((post) => (
                  <PostModelo key={post._id} post={post} />
                ))}
              </Grid>
            </Box>
          </Grid>
        </main>
      </div>
    </>
  );
}

export default LastFivePostsUpdated;
