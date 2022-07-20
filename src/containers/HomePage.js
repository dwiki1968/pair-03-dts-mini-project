import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";

import tmdb from "../apis/tmdb";
import Banner from "../components/Banner";
import MovieCard from "../components/MovieCard";
import MovieList from "../components/MovieList";

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
    <>
      <Banner />
      <MovieList
        endpointUrl="/movie/popular?language=en-US&page=1"
        title="Popular"
      />

      <MovieList
        endpointUrl="movie/top_rated?language=en-US&page=1"
        title="Top Rated"
      />

      <MovieList
        endpointUrl="movie/upcoming?language=en-US&page=1"
        title="Upcoming"
      />

      <MovieList
        endpointUrl="movie/now_playing?language=en-US&page=1"
        title="Now Playing"
      />
      <Container maxWidth="xl">
        <Grid>
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
      </Container>
    </>
  );
};

export default HomePage;
