import { useState } from 'react';
import { busqueda } from '../types/busqueda';
import { Error } from './Error';

const Formulario = ({ guardarBusqueda }: busqueda) => {
  const [buscador, setBuscador] = useState<String>('');
  const [error, setError] = useState<Boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuscador(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (buscador.trim() === '') {
      setError(true);
      return;
    }
    setError(false);

    //Enviar busqueda
    guardarBusqueda(buscador);
  };

  return (
    <>
      <form
        className="mt-11 grid grid-cols-3 gap-4 px-30 m-3 text-2xl"
        onSubmit={handleSubmit}
      >
        <input
          className="col-span-2 rounded-sm border border-cyan-500 hover:border-cyan-400 shadow-xl focus:outline-cyan-700 focus:border-cyan-700 text-black"
          type="text"
          name="text"
          id="text"
          placeholder="Buscar:"
          onChange={handleChange}
          autoComplete={'off'}
        />

        <input
          className="bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 rounded"
          type="submit"
          name="enviar"
          id="enviar"
          value="Enviar"
        />
      </form>
      {error ? <Error mensaje="Agrega un término de búsqueda" /> : null}
    </>
  );
};

export default Formulario;
