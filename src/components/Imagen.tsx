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
    </div>
  );
};

export default Imagen;
