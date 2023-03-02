import "survey-core/modern.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

const surveyJson = {
  elements: [
    {
      type: "rating",
      name: "RecommendSuunto",
      title:
        "How likely would you recommend Suunto to your friends and colleagues?",
      description: "",
      minRateDescription: "not at all",
      maxRateDescription: "extremely likely",
      rateMax: 10,
    },
    {
      name: "RecommendExplanation",
      title: "Please tell us why you gave that score.",
      type: "comment",
    },

    {
      type: "rating",
      name: "OverallSatisfaction",
      title: "Overall, how satisfied are you with Suunto?",
      description: "",
      minRateDescription: "not at all",
      maxRateDescription: "extremely likely",
      rateMax: 10,
    },
    {
      type: "html",
      name: "info",
      html: "<div><h3>4. How much do you agree with the following statements:</h3><p>Reply from a scale from 1 to 10</p><div>",
    },
    {
      type: "rating",
      name: "Appreciation",
      title: "Suunto shows appreciation for me as a customer",
      rateMax: 10,
      hideNumber: true,
    },
    {
      type: "rating",
      name: "getHelp",
      title: "It is easy to get help from Suunto whenever I need to",
      rateMax: 10,
      hideNumber: true,
    },
    {
      type: "rating",
      name: "innovativeSolutions",
      title:
        "Suunto offers innovative solutions that make my everyday life easier",
      rateMax: 10,
      hideNumber: true,
    },
    {
      type: "rating",
      name: "needFit",
      title: "Suunto’s range of products and services fit my needs",
      rateMax: 10,
      hideNumber: true,
    },
    {
      type: "rating",
      name: "worksWell",
      title: "Suunto’s products work well whenever I need them",
      rateMax: 10,
      hideNumber: true,
    },
    {
      type: "rating",
      name: "valueeForMoney",
      title: "Suunto provides value for money",
      rateMax: 10,
      hideNumber: true,
    },
  ],
};

const NPSSurvey = () => {
  const survey = new Model(surveyJson);
  return <Survey model={survey} />;
};

export default NPSSurvey;
