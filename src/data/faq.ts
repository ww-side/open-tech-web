// Core
import { v4 as uuid } from 'uuid';

export const faq = [
  {
    id: uuid(),
    title: 'Who are we?',
    content: `OpenTech is a web development agency with 5 years of 
      experience. We specialize in building complex and scalable web 
      applications using modern web technology such as React, Node.js, 
      and others. We have participated in projects of varying complexity, 
      from small startups to large enterprises. We are passionate about 
      building web applications that are both user-friendly and 
      efficient. We also believe in the importance of communication 
      and collaboration, and we work closely with our clients to ensure 
      that they are happy with the end product.`,
  },
  {
    id: uuid(),
    title: 'What are we focused on as a software development team?',
    content: `At OpenTech we've strategically chosen to specialize in different 
      industries. This deep-seated understanding of their unique operations and 
      challenges allows us to deliver truly meaningful and impactful solutions 
      to our clients.`,
  },
  {
    id: uuid(),
    title: 'Does your service provide access to the source code?',
    content: `You will receive the full value of your investment. We 
      will deliver both the completed solution and the source code, giving 
      you the flexibility to customize it using your own resources or opt 
      for our ongoing software support.`,
  },
  {
    id: uuid(),
    title: 'How do I get in touch with you?',
    content: `You can fill out the form, send a message to our email or 
      contact us through the support chat located in the bottom right corner 
      and we will get back to you as soon as possible.`,
  },
];
