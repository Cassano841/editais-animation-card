import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CadastroEditais from "./components/Cadastros/CadastroEditais";
import Login from "./components/Login/Login";
import Error404 from "./components/Miscelaneous/Error404/error404";
import CalendarioLista from "./components/CalendarioLista/CalendarioLista";
import SignUp from "./components/SignUp/SignUp";
import Inicial from "./components/Inicial/Inicial";
import Posts from "./components/Posts/Posts";
import FAQ from "./components/Inicial/FAQ";
import Read from "./components/CRUD/Read";
//import Update from "./components/CRUD/Update";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cadastro" element={<CadastroEditais />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/calendario" element={<CalendarioLista/>}/>
        <Route path="/inicial" element={<Inicial/>}/>
        <Route path="/editais" element={<Posts/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/editais/:id" element={<Read/>}/>
        <Route
           path="*"
          element={
            <Error404 />
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
