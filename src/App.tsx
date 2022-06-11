import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';

function App() {
  const [busqueda, setBusqueda] = useState<string>('');
  const [imagenes, setImagenes] = useState<any>([]);
  const [pagActual, setPagActual] = useState<number>(1);
  const [pagTotal, setPagTotal] = useState<number>(1);

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === '') {
        return;
      }
      const imgPagina: number = 40;
      const key: string = '20659903-c5bae6cdcde5e828e9205dce0';
      const url: string = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imgPagina}&page=${pagActual}`;

      const resp = await fetch(url);
      const resultado = await resp.json();
      // console.log(resultado.hits);
      setImagenes(resultado.hits);

      const calcTotalPag = Math.ceil(resultado.totalHits / imgPagina);
      setPagTotal(calcTotalPag);

      const subir = document.querySelector('#arriba');
      subir?.scrollIntoView({ behavior: 'smooth' });
    };
    consultarApi();
  }, [busqueda, pagActual]);

  const pagAnterior = () => {
    const newPag = pagActual - 1;
    if (newPag === 0) {
      return;
    }
    setPagActual(newPag);
  };

  const pagSiguiente = () => {
    const newPag = pagActual + 1;
    if (newPag > pagTotal) {
      return;
    }
    setPagActual(newPag);
  };
  return (
    <div className="container mx-auto grid">
      <h1 className="mt-8 text-6xl italic text-center" id="arriba">
        Buscador Imagenes TSX
      </h1>
      <Formulario guardarBusqueda={setBusqueda} />
      <ListadoImagenes imagenes={imagenes} />
      {pagActual === 1 ? null : (
        <button
          type="button"
          className="bg-cyan-800 rounded py-1 px-1 mb-2"
          onClick={pagAnterior}
        >
          &laquo; Anterior
        </button>
      )}
      {pagActual === pagTotal ? null : (
        <button
          type="button"
          className="bg-cyan-800 rounded py-1 px-1"
          onClick={pagSiguiente}
        >
          Siguiente &raquo;
        </button>
      )}
    </div>
  );
}

export default App;
