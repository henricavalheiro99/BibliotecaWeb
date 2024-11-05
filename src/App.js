import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "./paginas/Login";
import Cadastro from "./paginas/Cadastro";
import Home from "./paginas/Home";
import PaginaDeLivros from "./paginas/PaginaDeLivros";
import LivroEspecifico from "./paginas/LivroEspecifico";
import Galeria from "./paginas/Galeria";
import GaleriaIndividual from "./paginas/GaleriaIndividual";
import Chat from "./paginas/Chat";
import Perfil from "./paginas/Perfil";
import {DadosProvider} from "./context/ApiContext";


function App() {
  return (
      <DadosProvider>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Navigate to="/login" />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/cadastro" element={<Cadastro />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/paginalivros" element={<PaginaDeLivros />} />
                  <Route path="/livroespecifico/:livroId" element={<LivroEspecifico />} />
                  <Route path="/galeria" element={<Galeria />} />
                  <Route path="/galeriaindividual" element={<GaleriaIndividual />} />
                  <Route path="/chat" element={<Chat />} />
                  <Route path="/perfil" element={<Perfil />} />
              </Routes>
          </BrowserRouter>
      </DadosProvider>
  )
}
export default App;
