import "../../App.css";
import { useEffect, useState } from "react";
import PostModelo from "../PostModelo";
import { motion } from "framer-motion";
import { CircularProgress, Grid } from "@mui/material";
import Filter from "../Filter/Filter";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeButton, setActiveButton] = useState("all");
  const [setSearch] = useState("");
  //const [search, setSearch] = useState(""); <<== Revisar e utilizar este
  

  const fetchPosts = async () => {
    const response = await fetch("http://localhost:5000/api/posts");
    const data = await response.json();
    setPosts(data);
    //setFiltered(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Filter
        posts={posts}
        setFiltered={setFiltered}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        setSearch={setSearch}
      />
      {!fetchPosts() ? (
        <CircularProgress />
      ) : (
        <motion.div className="posts-list" layout>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {filtered.map((postagens) => (
              <Grid item xs={2} sm={4} md={4}>
                <PostModelo key={postagens._id} post={postagens} />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      )}
    </div>
  );
}

export default Posts;
