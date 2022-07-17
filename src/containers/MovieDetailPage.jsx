import { PlayArrow, InfoOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import tmdb from "../apis/tmdb";

const MovieDetailPage = () => {
  const baseUrlForMovie = "https://image.tmdb.org/t/p";
  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const res = await tmdb.get("/movie/438148");
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDataMovies();
  }, []);

  if (!movie) {
    console.log("loading");
    return (
      <Box
        sx={{
          backgroundColor: "black",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }

  console.log(movie.title);
  return (
    <>
      <Box sx={{ backgroundColor: "#141414", minHeight: "100vh" }}>
        <Box
          sx={{
            position: "relative",
            backgroundImage: `url(${baseUrlForMovie}/original${movie.backdrop_path})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            paddingY: 5,
            "&::after": {
              position: "absolute",
              content: '""',
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              background: "rgba(0, 0, 0, 0.5)",
            },
          }}
        >
          <Container>
            <Grid container spacing={4}>
              <Grid
                item
                xs={4}
                sx={{
                  zIndex: "1000",
                }}
              >
                <img
                  style={{ borderRadius: "4px" }}
                  src={`${baseUrlForMovie}/w300${movie.poster_path}`}
                  alt={movie.title}
                />
              </Grid>
              <Grid
                item
                xs={8}
                sx={{
                  zIndex: "1000",
                }}
              >
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  spacing={2}
                  sx={{
                    height: "100%",
                  }}
                >
                  <Stack spacing={1}>
                    <Typography fontWeight="700" variant="h4">
                      {movie.title} ({movie.release_date.slice(0, 4)})
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      {movie.genres.map((genre) => (
                        <Chip
                          key={genre.id}
                          label={genre.name}
                          variant="outlined"
                        />
                      ))}
                    </Stack>
                  </Stack>

                  <Box>
                    <Typography variant="h5">Description</Typography>
                    <Typography variant="body">{movie.overview}</Typography>
                  </Box>

                  <Stack spacing={2} direction="row">
                    <Button
                      variant="contained"
                      startIcon={<PlayArrow />}
                      size="large"
                      color="secondary"
                    >
                      Play
                    </Button>
                    <Button
                      variant="contained"
                      color="tertiary"
                      startIcon={<InfoOutlined />}
                      size="large"
                    >
                      More Information
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default MovieDetailPage;
