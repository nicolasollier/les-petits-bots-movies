import axios from "axios";
import React, { useEffect, useState } from "react";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  const getLastMovies = async () => {
    try {
      // API Call (proxy setup in package.json)
      const res = await axios.get("movies");
      const datas = res.data;

      // Modify here to selected more items (actually limited to last)
      let movie = [datas[datas.length - 1]];

      setMovies(movie);

    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getLastMovies();
  }, []);

  return (
    <>
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <p>{movie.id}</p>
            <p>{movie.name}</p>
            <p>{movie.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default Movie;
