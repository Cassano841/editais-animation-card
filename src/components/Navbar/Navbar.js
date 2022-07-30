import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import AddCircle from "@mui/icons-material/AddCircle";
import SearchFilter from "../Filter/SearchFilter";
import { useNavigate } from "react-router-dom";

export default function PrimarySearchAppBar({ search, setSearch }) {
  //const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const navigateToWatcherHome = () => {
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
              cursor: "pointer",
            }}
            onClick={navigateToWatcherHome}
          >
            Watcher
          </Typography>

          <SearchFilter />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              href="/cadastro"
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              alt="Criar novo edital"
            >
              <AddCircle />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              href="/login"
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
