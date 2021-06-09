import './App.css';
import Cabecera from './Cabecera'
import Peliculas from './Peliculas'
import Footer from './Footer'
import videoclub from './videoclub'


function App() {
  return (
    <>
    <Cabecera />
    <Peliculas videoclub={videoclub}/>
    <Footer />

    </>
  );
}

export default App;
