import { Container, Col } from "react-bootstrap";

const IntroText = () => {
  return (
    <Container className="bg-light px-0 justify-content-center d-flex">
      <Col md={7} lg={6} className="pt-5 px-3 text-center">
        <p className="fs-6 fw-semibold">
          What do you think of using our product so far?
        </p>
        <h2 className="fs-6 mb-0">
          Your feedback is important to us as it lets us improve our products
          and customer support.
        </h2>
      </Col>
    </Container>
  );
};

export default IntroText;
