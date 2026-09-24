import workflow from '../assets/projects/workflow-builder.png';
import app from '../assets/projects/gelato-connect-app.png';
import mockup from '../assets/projects/mockup-studio.png';
import growth from '../assets/projects/growth-activation.png';

export const projects = [
  {
    id: 'workflow-builder',
    title: 'Workflow Builder',
    product: 'Gelato Connect',
    description:
      'Production workflows depended on engineering for every change. I designed a visual editor that gave print providers control, with testing and validation before changes went live.',
    outcome: 'Adopted as the default for new customers.',
    image: workflow,
    alt: 'A visual production workflow with connected processing and routing steps.',
    subject: 'Enquiry about Workflow Builder',
  },
  {
    id: 'gelato-connect-app',
    title: 'Gelato Connect App',
    product: 'Gelato Connect',
    description:
      'I focused the app redesign on what managers needed away from their desks: production status, alerts, and actions. We later added tools for handling jobs, inventory, and orders on the floor.',
    outcome: 'Daily active clients grew from 26% to ~85%.',
    image: app,
    alt: 'Gelato Connect mobile screens showing a production dashboard and job list.',
    subject: 'Enquiry about Gelato Connect App',
  },
  {
    id: 'mockup-studio',
    title: 'Mockup Studio',
    product: 'Gelato Create',
    description:
      'Sellers were using external tools to get product images that matched their style. I brought mockup creation into Gelato, with an editor and reusable layouts across products and variants.',
    outcome: 'More than 14,000 mockups created since launch.',
    image: mockup,
    alt: 'Mockup Studio editor placing artwork into a framed print in a room.',
    subject: 'Enquiry about Mockup Studio',
  },
  {
    id: 'growth-activation',
    title: 'Growth & Activation',
    product: 'Gelato Create',
    description:
      'New users were signing up but getting stuck before their first order. I tested ways to guide them through onboarding. We combined contextual prompts with a checklist that adapted as they progressed.',
    outcome: '21% increase in first-order conversion.',
    image: growth,
    alt: 'An onboarding checklist guiding a new seller toward their first order.',
    subject: 'Enquiry about Growth & Activation',
  },
];

export type Project = (typeof projects)[number];
