import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import tmdb from "../apis/tmdb";
import { A11y, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";

const MovieCard = ({ imgUrl, title, movieId }) => {
  const navigate = useNavigate();
  return (
    <>
      <Card
        sx={{
          m: "1px",
          display: "flex",
          padding: "5px",
        }}
      >
        <CardActionArea
          onClick={() => {
            navigate(`../movie/${movieId}`, { replace: true });
          }}
        >
          <CardMedia component="img" image={imgUrl} alt={title} />
          <CardContent>
            <Typography>{title}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

const MovieList = ({ title, endpointUrl, height, width }) => {
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";
  const [movies, setMovies] = useState();

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const res = await tmdb.get(endpointUrl);
        setMovies(res.data.results);
        // console.log("movie list res", res.data.results);
      } catch (err) {
        console.log("err movie list", err);
      }
    };

    fetchDataMovies();
  }, []);

  if (!movies) {
    return (
      <>
        <Container></Container>
      </>
    );
  }

  return (
    <>
      <Container>
        <Typography
          sx={{
            marginBottom: 2,
            marginTop: 4,
          }}
          variant="h4"
        >
          {title}
        </Typography>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation
          speed={200}
          slidesPerView={5}
          className="swiper-container"
          zoom={{ maxRatio: 5 }}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard
                movieId={movie.id}
                imgUrl={`${baseUrlForMovie}${movie.poster_path}`}
                title={movie.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default MovieList;
