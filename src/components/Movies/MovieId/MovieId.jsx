import React from "react";
import Card from "../../UI/Card/Card";

//Custom classes
import classes from "./MovieId.module.css"

const MovieId = ({ movieId }) => {
  return (
    <Card>
      <span className={classes.id}>ID</span>
      <p>#{movieId}</p>
    </Card>
  );
};

export default MovieId;
