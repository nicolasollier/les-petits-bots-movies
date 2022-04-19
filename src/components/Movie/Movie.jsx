import axios from "axios";
import React, { useEffect } from "react";

const Movie = () => {
  const makeAPICall = async () => {
    try {
      const res = await axios.get("movies");
      console.log(res);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    makeAPICall();
  }, []);

  return <div>Movie</div>;
};

export default Movie;
