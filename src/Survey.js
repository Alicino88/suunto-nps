/*to customizw survey colors https://surveyjs.io/form-library/examples/create-custom-ui-theme/reactjs#content-docs */

import "survey-core/defaultV2.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { json } from "./json";
import { useCallback } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const SURVEY_ID = 1;

const NPSSurvey = () => {
  const survey = new Model(json);
  //HANDLING THE RESULTS:
  //2.surveyComplete takes as a parameter the callback function saveSurveyResults which is the one setting up the post request.

  //here the data are also saved inside a json object ("results") and displayed inside an alert
  const surveyComplete = useCallback((sender) => {
    saveSurveyResults("https://suunto.com/" + SURVEY_ID, sender.data);

    const results = JSON.stringify(sender.data);
    alert(results);
    console.log(results);
  }, []);

  //1.When the user clicks on the "complete" button, the data are sent to the server and the surveyComplete function is fired
  survey.onComplete.add(surveyComplete);

  //3.below the definition of saveSurveyResults function
  function saveSurveyResults(url, json) {
    const request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    //error handling
    request.addEventListener("error", () => {
      console.log("data could not be sent");
    });
    request.addEventListener("readystatechange", () => {
      console.log(request.readyState);
    });
    request.send(JSON.stringify(json));
  }

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
