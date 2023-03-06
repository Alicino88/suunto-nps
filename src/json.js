export const json = {
  /*completedHtml: "Thanks for completing the survey!",*/
  completedHtmlOnCondition: [
    {
      expression:
        "{nps-score} + {nps-score1} + {nps-score2} + {nps-score3} + {nps-score4} + {nps-score5} + {nps-score6} + {nps-score7}  <= 63",
      html: "<p style='padding: 0 25px'>Thanks for your feedback.</p><p> Our goal is to create the best possible product, and your thoughts, ideas, and suggestions play a major role in helping us identify opportunities to improve.</p>",
    },
    {
      expression:
        "{nps-score} + {nps-score1} + {nps-score2} + {nps-score3} + {nps-score4} + {nps-score5} + {nps-score6} + {nps-score7} >= 64",
      html: "<p style='margin-left:5px; margin-right:5px'>Thanks for you feedback. It is great to hear that you are a fan of our product.</p><p> Follow Suunto on <a href='https://www.instagram.com/suunto/?hl=en' target='_blank' style='color:#147eab'>Instagram</a> and <a href='https://www.facebook.com/Suunto/' target='_blank' style='color:#147eab'>Facebook</a></p>",
    },
  ],
  elements: [
    {
      type: "rating",
      name: "nps-score",
      title:
        "How likely would you recommend Suunto to your friends and colleagues?",
      description:
        "The answers rate on a scale of 0 (not at all likely) to 10 (extremely likely)",
      /*minRateDescription: "not at all",
    maxRateDescription: "extremely likely",
    */
      rateMax: 10,
      isRequired: true,
    },
    {
      name: "RecommendExplanation",
      title: "Please tell us why you gave that score.",
      type: "comment",
    },
    {
      type: "panel",
      name: "panel1",
      title: "How much do you agree with the following statements:",
      elements: [
        {
          type: "rating",
          name: "nps-score1",
          title: "Overall, how satisfied are you with Suunto?",
          description: "",
          rateMax: 10,
          isRequired: true,
        },

        {
          type: "rating",
          name: "nps-score2",
          title: "Suunto shows appreciation for me as a customer",
          rateMax: 10,
          isRequired: true,
        },
        {
          type: "rating",
          name: "nps-score3",
          title: "It is easy to get help from Suunto whenever I need to",
          rateMax: 10,
          isRequired: true,
        },
        {
          type: "rating",
          name: "nps-score4",
          title:
            "Suunto offers innovative solutions that make my everyday life easier",
          rateMax: 10,
          isRequired: true,
        },
        {
          type: "rating",
          name: "nps-score5",
          title: "Suunto’s range of products and services fit my needs",
          rateMax: 10,
          isRequired: true,
        },
        {
          type: "rating",
          name: "nps-score6",
          title: "Suunto’s products work well whenever I need them",
          rateMax: 10,
          isRequired: true,
        },
        {
          type: "rating",
          name: "nps-score7",
          title: "Suunto provides value for money",
          rateMax: 10,
          isRequired: true,
        },
      ],
    },
  ],
};
