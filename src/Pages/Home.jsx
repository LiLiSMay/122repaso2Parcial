import Carrusel from "../Components/Carrusel";
import Cardsito from "../Components/Cardsito";


const Home = () => {
    return (
        <>
            <div className="contenedor-carrusel my-5">
                <Carrusel className="imagen-carrusel" />
            </div>
            <Cardsito />
        </>
    )
}

export default Home;