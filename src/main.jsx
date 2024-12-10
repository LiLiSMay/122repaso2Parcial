import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import Principal from './Principal.jsx';

import Carrusel from './Components/Carrusel.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Principal />
    <Home />
  </BrowserRouter>,
)
