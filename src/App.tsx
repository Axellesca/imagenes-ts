import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';

function App() {
  const [busqueda, setBusqueda] = useState<string>('');
  const [imagenes, setImagenes] = useState<any>([]);

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === '') {
        return;
      }
      const imgPagina: number = 40;
      const key: string = '20659903-c5bae6cdcde5e828e9205dce0';
      const url: string = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imgPagina}`;

      const resp = await fetch(url);
      const resultado = await resp.json();
      // console.log(resultado.hits);
      setImagenes(resultado.hits);
    };
    consultarApi();
  }, [busqueda]);

  return (
    <div className="container mx-auto">
      <h1 className="mt-8 text-6xl italic text-center">
        Buscador Imagenes TSX
      </h1>
      <Formulario guardarBusqueda={setBusqueda} />
      <ListadoImagenes imagenes={imagenes} />
    </div>
  );
}

export default App;
