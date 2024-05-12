import { chatsType } from "./Types/dataTypes";

export const chats: chatsType[] = [
  {
    title: "Welcome to this AI Chatbot task",
    conversation: [
      {
        text: "What is marketing?",
        isResponse: false,
      },

      {
        text: "Marketing refers to the process of promoting and selling products or services to customers. It invoives researching customer needs and wants,developing products and services that meet those needs,pricing products and sorvices appropriately.creating markoting materials to promote products and services,and distributing those materials through various channels to reach potential customers.The ultimate goal of marketing is to generate interest and increase sales for a business or organization.",
        isResponse: true,
      },

      {
        text: "Give me a list of top 5 digital marketing agencies near me who offers services like social media marketing, content marketing and influencer marketing",
        isResponse: false,
      },
    ],
  },
];
