import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import "./Filter.css";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";


function SearchFilter() {
  const [search, setSearch] = useState();
  console.log(search);
  const navigate = useNavigate();


  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      console.log(search);
      navigate(`/calendario?${search}`);
    }
  };

  return (
    <div className="filter-search">
      <IconButton type="button" sx={{ p: '12px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 , width: 800}}
        placeholder="Pesquisar"
        onInput={(e) => setSearch(e.target.value)}
        onKeyDown={handleEnter}
      />
    </div>
  );
}

export default SearchFilter;
