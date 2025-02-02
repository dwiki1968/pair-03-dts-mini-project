import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import tmdb from "../apis/tmdb";

const Banner = () => {
  const baseUrlForMovie = "https://image.tmdb.org/t/p";
  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const res = await tmdb.get("/movie/453395");
        setMovie(res.data);
      } catch (err) {
        console.log("err", err);
      }
    };

    fetchDataMovies();
  }, []);

  if (!movie) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "1",
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return (
    <>
      <Box
        sx={{
          minHeight: "500px",
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
        <Container
          sx={{
            paddingTop: 5,
          }}
        >
          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
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
                <Stack>
                  <Typography fontWeight="700" variant="h4">
                    {movie.title} ({movie.release_date.slice(0, 4)})
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                    <Typography>{movie.release_date}</Typography>
                    <Typography>&#x2022;</Typography>
                    {movie.genres.map((genre) => (
                      <Typography key={genre.id}>{genre.name}, </Typography>
                    ))}
                  </Box>
                </Stack>

                <Box>
                  <Typography fontStyle="italic" variant="body">
                    "{movie.tagline}"
                  </Typography>
                  <Typography variant="body">{movie.overview}</Typography>
                </Box>
              </Stack>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                zIndex: "1000",
              }}
            ></Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Banner;
