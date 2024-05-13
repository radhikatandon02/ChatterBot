import React from "react";
import { createChatBotMessage } from 'react-chatbot-kit';
import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";


const config = { 
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
      widget: "learningOptions",
    }),
  ],
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
    widgets: [
      {
        widgetName: "learningOptions",
        widgetFunc: (props) => <LearningOptions {...props} />,
      },
      {
        widgetName: "javascriptLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
          options: [
            {
              text: "Introduction to JS",
              url:
                "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
              id: 1,
            },
            {
              text: "Mozilla JS Guide",
              url:
                "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
              id: 2,
            },
            {
              text: "Frontend Masters",
              url: "https://frontendmasters.com",
              id: 3,
            },
          ],
        },
      },
      {
        widgetName: "dataVisualLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
          options: [
            {
              text: "Data Visualization Certification",
              url:
                "https://www.freecodecamp.org/learn/data-visualization/",
              id: 1,
            },
            {
              text: "What is Data Visualization - Tableau Guide",
              url:
                "https://www.tableau.com/learn/articles/data-visualization",
              id: 2,
            },
            {
              text: "Learn Data Visualization - Kaggle",
              url: "https://www.kaggle.com/learn/data-visualization",
              id: 3,
            },
          ],
        },
      },
      {
        widgetName: "apiLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
          options: [
            {
              text: "Introduction to API",
              url:
                "https://www.ibm.com/topics/api",
              id: 1,
            },
            {
              text: "AWS Guide on API",
              url:
                "https://aws.amazon.com/what-is/api/#:~:text=API%20stands%20for%20Application%20Programming,other%20using%20requests%20and%20responses.",
              id: 2,
            },
            {
              text: "What is an API?",
              url: "https://www.geeksforgeeks.org/what-is-an-api/",
              id: 3,
            },
          ],
        },
      },
      {
        widgetName: "interviewPrepLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
          options: [
            {
              text: "Interview Warmup by Google",
              url:
                "https://grow.google/certificates/interview-warmup/",
              id: 1,
            },
            {
              text: "Complete Interview Guide - InterviewBit",
              url:
                "https://www.interviewbit.com/",
              id: 2,
            },
            {
              text: "Interview Dashboard - PrepInsta",
              url: "https://prepinsta.com/interview-preparation/",
              id: 3,
            },
          ],
        },
      },
    ],
}


export default config