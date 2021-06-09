

function Peliculas(props) {//en props ya tengo el objeto videoclub
    //1 paso, creamos la constante que la almacena, con 2 parametros, elemento y posición
    const catalogo= props.videoclub.peliculas.map((pelicula, index)=>{//pelicula index es una función
        //ponemos directamente un return, ya que no vamos a hacer nada con esos datos solo mostrarlos
        return (
            <Tarjeta //lo llamamos igual que hemos llamado en app a cabecera o a footer
            index={index}
            titulo={pelicula.titulo}
            cartel={pelicula.cartel}
            sinopsis={pelicula.sinopsis}
            />
        );

    })

    function Tarjeta(props){//este es el nieto, por eso tenemos que enviarlo en peliculas
        return(//esto es lo que va a rellenarse con lo que pongamos en el return de catalogo
            //cada elemento debe tener su propia key
            <>
            <div key={props.index} className="card">
            <img src={props.cartel} alt={props.titulo}/>
            <div className="container">
            <h4><b>{props.titulo}</b></h4>
            <p>{props.sinopsis}</p>
            </div>
            </div>
            </>
        )
    }

    return (//este es el return de la función Peliculas
        <>
        <div key="peliculas" className="catalogo">{catalogo}
        </div>
        </>
    );
    
  }
  
  export default Peliculas;