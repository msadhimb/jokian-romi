import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieGenre, getMovieList } from "../api";
import { Col, Container, Row } from "react-bootstrap";
import ButtonLogin from "../components/ButtonLogin";
import ButtonRegis from "../components/ButtonRegis";

function MovieDetails() {
  const { id } = useParams();
  const [detailMovie, setdetailMovie] = useState([]);
  const [movieGenre, setmovieGenre] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setdetailMovie(result);
    });
  }, []);

  useEffect(() => {
    setGenre(getMovieGenre());
    console.log(genre);
  }, []);

  useEffect(() => {
    const query = detailMovie.filter((item) => item.id === parseInt(id));
    const queryGenre = query.map((genre) => {
      return genre.genre_ids;
    });
    // const genreFinal = genre?.map((genre) => {
    //   queryGenre.map((gen) => {
    //     if (gen.id === genre.id) {
    //       return genre.name;
    //     }
    //   });
    // });
    console.log(genre);
    setmovieGenre(queryGenre);
  }, [detailMovie]);

  console.log(movieGenre);

  // const search = async (q) => {
  //   if (q.length > 3) {
  //     const query = await searchMovie(q);
  //     setPopularMovies(query.results);
  //   }
  // };

  const MovieDetail = () => {
    return detailMovie.map((movie, i) => {
      if (movie.id === parseInt(id)) {
        return (
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
              backgroundSize: "cover",
              height: "100vh",
            }}
          >
            <Container
              style={{
                minHeight: "600px",
              }}
            >
              <Row>
                <Col className="mt-1">
                  <h1 style={{ color: "red", fontSize: "50px" }}>Movielist</h1>
                </Col>
                <Col className="mt-3">
                  <input
                    placeholder="What do you want to watch?"
                    className="Movie-search"
                    // onChange={({ target }) => search(target.value)}
                  />
                </Col>
                <Col
                  className="mt-3"
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "start",
                  }}
                >
                  <ButtonLogin />
                  <ButtonRegis />
                </Col>
              </Row>
              <Row>
                <Col style={{ paddingTop: "6vw" }}>
                  <h1 style={{ color: "white", fontSize: "70px" }}>
                    {movie.title}
                  </h1>
                  <h6>{movie.genre_ids}</h6>
                  <h6
                    style={{
                      color: "white",
                      fontSize: "18px",
                      paddingTop: "1.5vw",
                    }}
                  >
                    {movie.overview}
                  </h6>
                  <p>{movie.vote_average}</p>
                  <button className="button-trailer">WATCH TRAILER</button>
                </Col>
              </Row>
              <Row className="p-4">
                <Col>
                  <Link to={"/"}>Back to Home</Link>
                </Col>
              </Row>
            </Container>
          </div>
        );
      }
    });
  };

  return (
    <>
      <MovieDetail />
    </>
  );
}

export default MovieDetails;
