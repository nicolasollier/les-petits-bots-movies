import React from "react";

//Custom classes
import classes from "./MoviePoster.module.css"

const MoviePoster = ({ imgUrl }) => {
  return <img className={classes.movie__poster} src={imgUrl} alt="movie poster" />;
};

export default MoviePoster;
