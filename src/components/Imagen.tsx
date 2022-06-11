import type { imagen } from '../types/imagen';

const Imagen = (args: imagen) => {
  const { largeImageURL, likes, previewURL, tags, views } = args;
  return (
    <div className="bg-gray-800 rounded overflow-hidden shadow-md shadow-blue-900">
      <img className="w-full h-auto" src={previewURL} alt={tags} />
      <div className="m-2">
        <p>
          <span className="font-bold">Likes: </span>
          {likes}
        </p>
        <p>
          <span className="font-bold">Visitas: </span>
          {views}
        </p>
      </div>
      <a
        href={largeImageURL}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded py-2 mx-2 mb-2 font-bold cursor-pointer text-center bg-red-500 block"
      >
        Ver Imagen
      </a>
    </div>
  );
};

export default Imagen;
