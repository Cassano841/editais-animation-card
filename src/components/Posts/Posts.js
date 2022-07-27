import "../../App.css";
import { useEffect, useState } from "react";
import PostModelo from "../PostModelo"
import { motion } from "framer-motion";
import { CircularProgress } from "@mui/material";
import Filter from "../Filter/Filter";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeButton, setActiveButton] = useState("all");
  const [search, setSearch] = useState("");


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
      { !fetchPosts() ? <CircularProgress /> : 

      <motion.div className="posts-list" layout>

        {
        filtered.map((postagens) => (
          <PostModelo key={postagens._id} post={postagens} />
        ))}

      </motion.div>
       } 
    </div>
    
  );
}

export default Posts;
