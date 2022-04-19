//Import Config & Dependencies
import axios from "axios";
import React, { useEffect, useState } from "react";

//Components
import MoviePoster from "../MoviePoster/MoviePoster";
import MovieId from "../MovieId/MovieId";
import MovieName from "../MovieName/MovieName";

//Custom classes
import classes from "./MoviesList.module.css";

//Import the poster from Figma, anticipates future img url's from the API, can also be found in assets/images
const imgUrl =
  "https://s3-alpha-sig.figma.com/img/ebe6/6391/81a817fe10e42f4ecedff4b91a904bac?Expires=1651449600&Signature=TcGwKwUp0OZYIO~0GT2CKjrJ879CPJ4O38LJjka1sAGvoKwlAkY7xuTLfaCxt-a4gXUnwZEwGIpmRfJnJcaTHrF1MQI9qT6W3OmLUk1MnSpqtU5fvVRgcEixVFctoDDuQrbT8BSMS~FjDo0uQ8xQoHeSW4BQc6SvOyZ61M-USaIrIcD3VGHWpvYX8RXj--IXGHw9zHq~poLVUZ5DG8TOStv~1~uBLNHDxiXnZULNtcNfZLYPuYj0lPMZPERPReKCmeOg6~fXd0MyTuqI9LQCd9Xb~eehBynDJlwCacja6-8qF9ZdLflmevjiUZxWy2jo~kVcr6vAzVhdz280ZX~1Jg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

//Made with <3 to be scalable if more movies are wanted in list
const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  const getLastMovies = async () => {
    try {
      //API Call (proxy setup in package.json)
      const res = await axios.get("movies");
      const datas = res.data;

      //Modify here to get more items (actually limited to the last item)
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
          <div className={classes.movie__infos} key={movie.id}>
            <MovieId movieId={movie.id} />
            <MovieName movieName={movie.name} />
            <p>{movie.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default MoviesList;
