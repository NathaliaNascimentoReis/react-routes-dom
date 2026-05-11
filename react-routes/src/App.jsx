import './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Contatos from './pages/Contatos/Contatos.jsx';
import Sobre from './pages/Sobre/Sobre.jsx';
import Servicos from './pages/Servicos/Servicos.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import Extra from './pages/Extra/Extra.jsx';

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar></NavBar>
                <main style={{ padding: '20px', minHeight: '80vh' }}>
                    <Routes>
                        <Route path="/" element={<Home></Home>}></Route>
                        <Route path="/sobre" element={<Sobre></Sobre>}></Route>
                        <Route path="/servicos" element={<Servicos></Servicos>}></Route>
                        <Route path="/equipe" element={<Extra></Extra>}></Route>
                        <Route path="/contatos" element={<Contatos></Contatos>}></Route>
                        <Route path="/*" element={<NotFound></NotFound>}></Route>
                    </Routes>
                </main>
                <Footer></Footer>
            </BrowserRouter>
        </>
    );
}

export default App;
