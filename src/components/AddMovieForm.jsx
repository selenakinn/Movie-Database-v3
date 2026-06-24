import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddMovieForm = ({ setMovies }) => {
const history = useHistory();
  const [movie, setMovie] = useState({
    title: '',
    director: '',
    genre: '',
    metascore: '',
    description: '',
  });

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  axios
    .post(
      'https://nextgen-project.onrender.com/api/s11d3/movies',
      movie
    )
    .then((res) => {
  setMovies((prev) => [...prev, res.data]);
  history.push('/movies');
})
    .catch((err) => console.log(err));
};

  return (
    <div className="bg-white rounded-md shadow flex-1 dark:bg-slate-800 dark:text-white">
      <form onSubmit={handleSubmit}>
        <div className="p-5 pb-3 border-b border-zinc-200">
          <h4 className="text-xl font-bold">
            Yeni Film Ekle
          </h4>
        </div>

        <div className="px-5 py-3">
          <div className="py-2">
            <label htmlFor="title">Title</label>
<input
  id="title"
  name="title"
  value={movie.title}
  onChange={handleChange}
/>
          </div>

          <div className="py-2">
            <label htmlFor="director">Director</label>
<input
  id="director"
  name="director"
  value={movie.director}
  onChange={handleChange}
/>
          </div>

          <div className="py-2">
            <label htmlFor="genre">Genre</label>
<input
  id="genre"
  name="genre"
  value={movie.genre}
  onChange={handleChange}
/>
          </div>

          <div className="py-2">
            <label htmlFor="metascore">Metascore</label>
<input
  id="metascore"
  type="number"
  name="metascore"
  value={movie.metascore}
  onChange={handleChange}
/>
          </div>

          <div className="py-2">
            <label htmlFor="description">Description</label>
<textarea
  id="description"
  name="description"
  value={movie.description}
  onChange={handleChange}
/>
          </div>
        </div>

        <div className="px-5 py-4 border-t border-zinc-200 flex justify-end">
          <button
            type="submit"
            className="myButton bg-green-700 hover:bg-green-600"
          >
            Yeni Filmi Kaydet
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovieForm;
