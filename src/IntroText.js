import { Container, Col } from "react-bootstrap";

const IntroText = () => {
  return (
    <Container className="bg-light px-0">
      <Col md={7} className="ms-5 ps-5 pt-5">
        <h1 className="fs-4 fw-semibold">
          What do you think of using our product so far?
        </h1>
        <h2 className="fs-5 mb-0">
          Your feedback matters as it lets us improve
        </h2>
      </Col>
    </Container>
  );
};

export default IntroText;
