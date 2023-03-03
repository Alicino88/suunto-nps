import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";

import HeaderPic from "./suunto_3.png";
const Header = () => {
  return (
    <header>
      <Container className="position-relative px-0 h-auto">
        <Image
          fluid
          src={HeaderPic}
          alt="Runner"
          style={{
            objectFit: "cover",
            objectPosition: "right top",
            width: "100%",
            minHeight: "300px",
          }}
        />
        <div className="d-flex position-absolute top-0 s-0 bottom-0 e-0 text-white align-items-center justify-content-center">
          <div className="text-center">
            <h1 className="fw-bold display-2">HI, PARISA</h1>
            <h2 className="fw-semibold">Thank you for buying Suunto!</h2>
            <span className="d-block border-bottom border-2 border-danger"></span>
            <p className="mt-3 fs-5 fw-semibold">We are so happy to have you</p>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
