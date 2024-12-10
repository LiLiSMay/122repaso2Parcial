import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./estilos.css"



function Home(props) {
    return (
        <div className='page1'>
            <h1> hgfgffdxdfx</h1>
        </div>
    )
}
function Uno(props) {
    return (
        <div className='page1'>
            <h1> hgfgffdxdfx</h1>
        </div>
    )
}


function Dos() {
    return (
        <div className='page2'>
            <h1>Page2</h1>
        </div>
    )
}

function Tres() {
    return (
        <div className='page3'>
            <h1>Page3</h1>

        </div>
    )
}




//este la funcion principal

function Principal(props) {
    return (
        <div className='padre'>
            <ul className='lista'>
                <li>
                    <Link to="Home">HOME</Link>
                </li>
                <li>
                    <Link to="/">pagina 1P</Link>
                </li>

                <li>
                    <Link to="/Dos">page2</Link>
                </li>
                <li>
                    <Link to="/Tres">page3</Link>
                </li>
            </ul>

            <Routes>
                <Route path='/' element={<Uno></Uno>}></Route>
                <Route path='dos' element={<Dos></Dos>}></Route>
                <Route path='tres' element={<Tres></Tres>}></Route>
            </Routes>
        </div>
    );
}
export default Principal;
