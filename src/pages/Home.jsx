import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import ButtonLogin from "../components/ButtonLogin";
import ButtonRegis from "../components/ButtonRegis";
import SearchHome from "../components/SearchHome";
import backgroundImage from "../styles/image.jpg";

function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Container>
          <Row>
            <Col className="mt-1">
              <h1 style={{ color: "red" }}>Movielist</h1>
            </Col>
            <Col className="mt-3">
              <SearchHome />
            </Col>
            <Col
              className="mt-3"
              style={{ display: "flex", justifyContent: "end" }}
            >
              <ButtonLogin />

              <ButtonRegis />
            </Col>
          </Row>

          <Row>
            <Col style={{ paddingTop: "6vw" }}>
              <h1 style={{ color: "white", fontSize: "4vw" }}>
                Doctor Strange in the Multiverse of Madness
              </h1>
              <h6
                style={{
                  color: "white",
                  fontSize: "18px",
                  paddingTop: "1.5vw",
                }}
              >
                After encountering a girl with the power to traverse the
                multiverse, Stephen Strange turns to Wanda Maximoff for advice
                and help with fighting off the monstrous and mysterious entity
                that is on the girl's trail
              </h6>
            </Col>

            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
