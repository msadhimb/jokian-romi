import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailList } from "../api";
import { Col, Container, Row } from "react-bootstrap";

function MovieDetails() {
  //   const params = useParams();
  const [detailMovie, setdetailMovie] = useState({});

  useEffect(() => {
    getDetailList().then((result) => {
      setdetailMovie(result);
    });
  }, []);

  const DetailMovieList = () => {
    return detailMovie.map((detail, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <img
            className="Movie-image"
            src={`${process.env.REACT_APP_BASEIMGURL}/${detail.backdrop_path}`}
          />
          <div className="Movie-title">{detail.title}</div>
          <div className="Movie-genre">{detail.genre_ids}</div>
          <div className="Movie-overview">{detail.overview}</div>
          <div className="Movie-rate">{detail.vote_average}</div>
        </div>
      );
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <DetailMovieList />
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetails;
