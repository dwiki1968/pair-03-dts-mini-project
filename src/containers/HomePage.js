import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";

import tmdb from "../apis/tmdb";
import MovieCard from "../components/MovieCard";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [moviesReady, setMoviesReady] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await tmdb.get("trending/movie/day");
        setMovies(fetchedMovies.data.results);
        setMoviesReady(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Grid bgcolor="#201F1F">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie}></MovieCard>
          ))}
        </Box>
      </Box>
    </Grid>
  );
};

export default HomePage;
