import axios from "axios";
import React, { useEffect } from "react";

const Movie = () => {
  const getMovies = async () => {
    try {
      const res = await axios.get("movies");
      const datas = res.data;

      return datas;
      
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div>Movie</div>;
};

export default Movie;
