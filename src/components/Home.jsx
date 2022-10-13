import NavBar from "./NavBar";
import BookCard from "./Card";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://501-abs-r-challenge.deno.dev/api/v1/books")
      .then((response) => {
        setBooks(response.data);
      });
  }, []);

  return (
    <>
      <NavBar />
      <Container fluid>
        <Row>
          {books.map((b) => {
            return (
              <Col key={b.id} xs={4}>
                <BookCard b={b} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Home;
