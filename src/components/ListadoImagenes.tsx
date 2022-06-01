import type { imagen } from '../types/imagen';
import Imagen from './Imagen';

const ListadoImagenes = ({ imagenes }: any) => {
  return (
    <div className="grid grid-cols-8 gap-6 m-3 mt-8">
      {imagenes.map((imagen: imagen) => (
        <Imagen
          key={imagen.id}
          largeImageURL={imagen.largeImageURL}
          likes={imagen.likes}
          previewURL={imagen.previewURL}
          tags={imagen.tags}
          views={imagen.views}
        />
      ))}
    </div>
  );
};

export default ListadoImagenes;
