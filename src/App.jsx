import { useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AppProvider } from './Contexto/contexto';

import { supabase } from "./supabase";
import Aleatorio from './Componentes/Aleatorios'
import Capturados from './Componentes/Capturados'
import Favoritos from './Componentes/Favoritos'
import Lista from './Componentes/Listas'
import Pokemon from './Componentes/Pokemon'
import Usuario from './Componentes/Usuario'
import Menu from './Componentes/Menu';
import Login from './Componentes/login';
import Registro from './Componentes/Registro';
import Administrador from './Componentes/Administrador';
import './App.css'

function App() {
const [usuario, setUsuario] = useState(null);
const [cargando, setCargando] = useState(true);


useEffect(() => {
async function verificarSesion() {
const { data: { session } } = await supabase.auth.getSession();
setUsuario(session?.user || null);
setCargando(false);
}
verificarSesion();


// Escucha cambios en la sesión
supabase.auth.onAuthStateChange((_event, session) => {

setUsuario(session?.user || null);
});
}, []);

if (cargando) return <p>Cargando...</p>;
return (
<AppProvider>
<Router>
{usuario && <Menu />}


<Routes>
  
<Route path="/" element={usuario ? <Lista /> : <Navigate to="/login"/>} />

<Route path="/Usuario" element={usuario ? <Usuario /> : <Navigate to="/login" />} />

<Route path="/Aleatorios" element={usuario ? <Aleatorio /> : <Navigate to="/login" />} />

<Route path="/Capturados" element={usuario ? <Capturados /> : <Navigate to="/login" />} />

<Route path="/Favoritos" element={usuario ? <Favoritos /> : <Navigate to="/login" />} />

<Route path="/Pokemon/:name" element={usuario ? <Pokemon /> : <Navigate to="/login" />} />

<Route path="/login" element={<Login/>} />
<Route path="/Registro" element={<Registro/>} />
<Route path="/administrador" element={<Administrador/>} />
</Routes>
</Router>
</AppProvider>
);
}


export default App;
