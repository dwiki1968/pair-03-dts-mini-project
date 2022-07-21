import tmdb from "../apis/tmdb";
import { useEffect, useState } from "react";

const CardList = () => {
  const [movies, setMovies] = useState([]);
  const [moviesReady, setMoviesReady] = useState(false);

  useEffect(() => {
    const fetchMovies = async (endpoint) => {
      try {
        const fetchedMovies = await tmdb.get(endpoint);
        setMovies(fetchedMovies.data.results);
        setMoviesReady(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);
};
export default CardList;
