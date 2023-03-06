/*to customizw survey colors https://surveyjs.io/form-library/examples/create-custom-ui-theme/reactjs#content-docs */

import "survey-core/defaultV2.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { json } from "./json";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const NPSSurvey = () => {
  const survey = new Model(json);
  return (
    <>
      <Container className="bg-light px-0">
        <Col lg={9} className="py-3 px-1 mx-auto">
          <Survey model={survey} />
        </Col>
      </Container>
    </>
  );
};

export default NPSSurvey;

/*
"type": "panel",
      "name": "panel1",
      "title": "Please, help us improve our product",
      */
