//import Config & dependencies
import axios from "axios";
import React, { useEffect, useState } from "react";

//Components
import MoviePoster from "./MoviePoster/MoviePoster";

//Import the "Hidden Figures" poster from imdDB assets, anticipates futures img url's from API call
const imgUrl =
  "https://m.media-amazon.com/images/M/MV5BMzg2Mzg4YmUtNDdkNy00NWY1LWE3NmEtZWMwNGNlMzE5YzU3XkEyXkFqcGdeQXVyMjA5MTIzMjQ@._V1_.jpg";

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
      <MoviePoster imgUrl={imgUrl} />
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
