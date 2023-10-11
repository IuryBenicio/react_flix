import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Filme from "./pages/filmes";
import Erro from "./pages/error";
import Favoritos from "./pages/favoritos";

import { Header } from "./components/Header";

function RoutesApp(){
  return(
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Filme/:id" element={<Filme/>}/>
        <Route path="/Favoritos" element={<Favoritos/>}/>

        <Route path='*' element={<Erro/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
