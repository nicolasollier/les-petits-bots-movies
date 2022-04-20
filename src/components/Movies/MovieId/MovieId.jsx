import React from "react";
import Card from "../../UI/Card/Card";

//Custom classes
import classes from "./MovieId.module.css";

const MovieId = ({ movieDatas }) => {
  return (
    <Card>
      <div style={{ padding: "24px" }}>
        <span className={classes.subheading}>ID</span>
        <p className={classes.movieId}>#{movieDatas.id}</p>
      </div>
    </Card>
  );
};

export default MovieId;
