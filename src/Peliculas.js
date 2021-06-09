

function Peliculas(props) {//en props ya tengo el objeto videoclub
    // La constante almacena el código que va saliendo de la función .map que se le hace al array. Elemento y posición son dos argumentos que nos proporciona la función .map y su scope es dentro de la función, no fuera. 
    const catalogo= props.videoclub.peliculas.map((pelicula, index)=>{//Son los argumentos de una función. Vienen dados por la función .map()
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