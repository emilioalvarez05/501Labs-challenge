import { Container, Row, Col, Card, Button } from "react-bootstrap";

const BookCard = ({ b }) => {
  const { title, synopsis, cover, isNew } = b;

  const cutSynopsis = (synopsis) => {
    if (synopsis.length < 300) {
      return synopsis;
    } else return synopsis.substring(0, 300) + " [...]";
  };
  return (
    <Card style={{ height: "350px" }} className="my-4">
      <Container>
        <Row>
          <Col xs={4}>
            <div
              className="d-flex flex-column justify-content-end"
              style={{
                height: "325px",
                marginTop: "12.5px",
                width: "100%",
                backgroundImage: `url(${cover})`,
                backgroundSize: "100% 100%",
              }}
            >
              {isNew ? (
                <div
                  className="text-center bg-success w-100"
                  style={{
                    height: "30px",
                  }}
                >
                  <span className="text-white">Nuevo</span>
                </div>
              ) : null}
            </div>
          </Col>
          <Col xs={8}>
            <Card.Body
              style={{ height: "100%" }}
              className="d-flex flex-column justify-content-between"
            >
              <Card.Title>{title}</Card.Title>

              <Card.Text>{cutSynopsis(synopsis)}</Card.Text>

              <Button variant="primary" className="ms-auto">
                Ver mas
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default BookCard;
