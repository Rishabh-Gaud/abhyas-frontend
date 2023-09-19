import { JobPosting, Problem } from "../types/problem";
import {SubjectDetails} from "../types/problem";
import {Jobs} from "../types/problem";
import { JobDescription } from "../types/problem";
import { CompanyInfo } from "../types/problem";


export const companyinfo:CompanyInfo = {
  logoSrc : '/your-logo.png', // Replace with your actual logo image path
  companyName : 'Your Company Name',
   description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tortor non ligula gravida efficitur. Maecenas auctor quam ac arcu malesuada, ac pellentesque velit mattis. Nullam nec elit vel mi tristique dictum. Proin sed libero non ex facilisis dictum vel non justo. In at libero ac enim consectetur viverra in eget elit. Suspendisse tristique dui quis nunc malesuada, sit amet vestibulum arcu vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras quis risus odio. Vivamus viverra metus id leo hendrerit, a malesuada felis tincidunt. Sed mattis, tortor at venenatis eleifend, neque urna facilisis justo, id vestibulum turpis justo et mi. Phasellus ultrices fermentum enim, eget tincidunt libero convallis id. Nunc ullamcorper mauris sit amet sapien eleifend, ut laoreet tortor dignissim. Nullam eget massa et velit egestas lacinia. Sed a lacinia turpis. Vivamus euismod, mi in malesuada auctor, sapien nunc volutpat nulla, a egestas eros justo eu massa.',

};

export const jobdescription : JobDescription = {
  position: 'Software Engineer',
    company: 'TechCo Inc.',
    experience: '3+ years',
    salary: '$80,000 per year',
    location: 'San Francisco, CA',
    postedDuration:'30+ days',
    openings:'10',
    applicants:'2000+',
    jobDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec dolor blandit, euismod purus sit amet, pellentesque purus. Aliquam varius dictum magna eget imperdiet. Integer gravida, augue nec dictum varius, purus tortor tincidunt libero, eu aliquam libero justo eu quam. Nullam posuere vel tellus eget lacinia. Sed a vestibulum lorem. Sed finibus, nulla et aliquet facilisis, tortor est sollicitudin tortor, in tincidunt libero ligula sed justo. Fusce non bibendum erat. Aenean id feugiat elit, quis lacinia lorem. Curabitur non tristique justo. Nulla facilisi. Proin tristique ut nisl et pellentesque. Sed eu justo arcu. Sed feugiat cursus risus nec dictum. Sed ac feugiat velit.',
    role: 'Developer',
    industryType: 'Tech',
    employmentType: 'Full-time',
    roleCategory: 'Software Development',
    jobRequirements: 'Bachelor\'s degree in Computer Science or equivalent\nStrong problem-solving skills\n',
    education: 'Bachelor\'s Degree',
    keySkills: 'JavaScript, React, Node.js, SQL, RESTful APIs',
    applyLink:"/applylink.com/",

};

// interface ProblemMap {
// 	[key: string]: Problem;
// }
export const jobpostings:JobPosting[]=[
  {
    title: "Software Development Engineer",
    location: "Pune",
    type: "In-Office Job",
    experience:"0-2 years",
    linkTo:"/job-details"
  },
  {
    title: "Software Development Engineer",
    location: "Pune",
    type: "In-Office Job",
    experience:"0-2 years",
    linkTo:"/job-details"
  },
  {
    title: "Software Development Engineer",
    location: "Pune",
    type: "In-Office Job",
    experience:"0-2 years",
    linkTo:"/job-details"
  },
  {
    title: "Software Development Engineer",
    location: "Pune",
    type: "In-Office Job",
    experience:"0-2 years",
    linkTo:"/job-details"
  },
  {
    title: "Software Development Engineer",
    location: "Pune",
    type: "In-Office Job",
    experience:"0-2 years",
    linkTo:"/job-details"
  },
  {
    title: "Software Development Engineer",
    location: "Pune",
    type: "In-Office Job",
    experience:"0-2 years",
    linkTo:"/job-details"
  },
  {
    title: "Software Development Engineer",
    location: "Pune",
    type: "In-Office Job",
    experience:"0-2 years",
    linkTo:"/job-details"
  },
]
export const jobs: Jobs[] = [ {
  _id: "64f803dbe59b56d82cd33ef0",
  companyName: "Mastercard",
  title: "Software Development Engineer",
  location: "Pune",
  imageUrl: "https://1000logos.net/wp-content/uploads/2017/03/Mastercard-logo.png",
  type: "In-Office Job",
  salary: "11 LPA - 19 LPA",
  redirectLink: "https://careers.mastercard.com/us/en/job/MASRUSR162856EXTERNALENUS/Software-Development-Engineer-in-Test?",
  requiredExperience: "0-2 years",
  skills: "SQL, Java",
  createdAt: "2023-09-06T04:45:12.533Z",
  
},

{
  _id: "64f803dbe59b56d82cd33ef1",
  companyName: "Mastercard",
  title: "Software Development Engineer",
  location: "Pune",
  imageUrl: "https://1000logos.net/wp-content/uploads/2017/03/Mastercard-logo.png",
  type: "In-Office Job",
  salary: "11 LPA - 19 LPA",
  redirectLink: "https://careers.mastercard.com/us/en/job/MASRUSR162856EXTERNALENUS/Software-Development-Engineer-in-Test?",
  requiredExperience: "0-2 years",
  skills: "SQL, Java",
  createdAt: "2023-09-06T04:45:12.533Z",
  
},

{
  _id: "64f803dbe59b56d82cd33ef2",
  companyName: "Mastercard",
  title: "Software Development Engineer",
  location: "Pune",
  imageUrl: "https://1000logos.net/wp-content/uploads/2017/03/Mastercard-logo.png",
  type: "In-Office Job",
  salary: "11 LPA - 19 LPA",
  redirectLink: "https://careers.mastercard.com/us/en/job/MASRUSR162856EXTERNALENUS/Software-Development-Engineer-in-Test?",
  requiredExperience: "0-2 years",
  skills: "SQL, Java",
  createdAt: "2023-09-06T04:45:12.533Z",
  
},

{
  _id: "64f803dbe59b56d82cd33ef3",
  companyName: "Mastercard",
  title: "Software Development Engineer",
  location: "Pune",
  imageUrl: "https://1000logos.net/wp-content/uploads/2017/03/Mastercard-logo.png",
  type: "In-Office Job",
  salary: "11 LPA - 19 LPA",
  redirectLink: "https://careers.mastercard.com/us/en/job/MASRUSR162856EXTERNALENUS/Software-Development-Engineer-in-Test?",
  requiredExperience: "0-2 years",
  skills: "SQL, Java",
  createdAt: "2023-09-06T04:45:12.533Z",
  
},

{
  _id: "64f803dbe59b56d82cd33ef4",
  companyName: "Mastercard",
  title: "Software Development Engineer",
  location: "Pune",
  imageUrl: "https://1000logos.net/wp-content/uploads/2017/03/Mastercard-logo.png",
  type: "In-Office Job",
  salary: "11 LPA - 19 LPA",
  redirectLink: "https://careers.mastercard.com/us/en/job/MASRUSR162856EXTERNALENUS/Software-Development-Engineer-in-Test?",
  requiredExperience: "0-2 years",
  skills: "SQL, Java",
  createdAt: "2023-09-06T04:45:12.533Z",
  
},


{
  _id: "64f803dbe59b56d82cd33ef5",
  companyName: "Mastercard",
  title: "Software Development Engineer",
  location: "Pune",
  imageUrl: "https://1000logos.net/wp-content/uploads/2017/03/Mastercard-logo.png",
  type: "In-Office Job",
  salary: "11 LPA - 19 LPA",
  redirectLink: "https://careers.mastercard.com/us/en/job/MASRUSR162856EXTERNALENUS/Software-Development-Engineer-in-Test?",
  requiredExperience: "0-2 years",
  skills: "SQL, Java",
  createdAt: "2023-09-06T04:45:12.533Z",
  
},



];







export const problems: Problem[] = [
  {
    id: "jump-game",
    title: "jump game",
    dificulty: "Easy",
    category: "dp",
    order: 1,
    videoId: "",
  },
  {
    id: "reversed-linked-list",
    title: "Reversed Linked List",
    dificulty: "Medium",
    category: "list",
    order: 2,
    videoId: "",
  },
  // "reverse-linked-list: reverseLinkedList,
  // "jump-game: jumpGame,
];

export const subject_details: SubjectDetails[] = [
  {
    name: "cpp",
    displayname: "C++ Language",
    desc:"here is the description about c++ language"
  },
  {
    name: "cprogramming",
    displayname: "C Programming",
    desc:"here is the description about c Programming"
  },
  {
    name: "arithmaticaptitude",
    displayname: "Arithmatic Aptitude",
    desc:"here is the description about Arithmatic Aptitude"
  },
  {
    name: "datainterpretation",
    displayname: "Data Interpretation",
    desc:"here is the description about data interpretation"
  },
  {
    name: "logicalreasoning",
    displayname: "Logical Reasoning",
    desc:"here is the description about logical reasoning"
  },
  {
    name: "nonverbalreasoning",
    displayname: "Non Verbal Reasoning",
    desc:"here is the description about Non Verbal Reasoning"
  },
  {
    name: "verbalreasoning",
    displayname: "Non Verbal Reasoning",
    desc:"here is the description about Verbal Reasoning"
  },
  {
    name: "verbalability",
    displayname: "Verbal Ability",
    desc:"here is the description about Verbal Ability"
  },
];
export const mcq = [
  {
    id: 1,
    explaination:
      "bvghk n,gyuc mnbyuc  yugbnm mvybs mnbyubcsm  hughjcsnmgy7ub cshjugjhc nmh78hnc,m hjuc m,hyhncm hu",
    discription:
      "jhgyudfh jhuid,m nuihiucd m,nuihncdm jhhb cdmbyun dhjuj dm,hyunmd hjguj sm,nhuhn mdfjhghyuj mdnbyuhnm dfmnhyun m,cxnuhnnm cjhhj",
    options: ["ram", "radha", "seeta", "shyam"],
    correctAnswer: 2,
  },
  {
    id: 2,
    explaination:
      "bvghk n,gyuc mnbyuc  yugbnm mvybs mnbyubcsm  hughjcsnmgy7ub cshjugjhc nmh78hnc,m hjuc m,hyhncm hu",
    discription:
      "jhgyudfh jhuid,m nuihiucd m,nuihncdm jhhb cdmbyun dhjuj dm,hyunmd hjguj sm,nhuhn mdfjhghyuj mdnbyuhnm dfmnhyun m,cxnuhnnm cjhhj",
    options: ["ram", "radha", "seeta", "shyam"],
    correctAnswer: 1,
  },
  {
    id: 3,
    explaination:
      "bvghk n,gyuc mnbyuc  yugbnm mvybs mnbyubcsm  hughjcsnmgy7ub cshjugjhc nmh78hnc,m hjuc m,hyhncm hu",
    discription:
      "jhgyudfh jhuid,m nuihiucd m,nuihncdm jhhb cdmbyun dhjuj dm,hyunmd hjguj sm,nhuhn mdfjhghyuj mdnbyuhnm dfmnhyun m,cxnuhnnm cjhhj",
    options: ["ram", "radha", "seeta", "shyam"],
    correctAnswer: 2,
  },
  {
    id: 4,
    explaination:
      "bvghk n,gyuc mnbyuc  yugbnm mvybs mnbyubcsm  hughjcsnmgy7ub cshjugjhc nmh78hnc,m hjuc m,hyhncm hu",
    discription:
      "jhgyudfh jhuid,m nuihiucd m,nuihncdm jhhb cdmbyun dhjuj dm,hyunmd hjguj sm,nhuhn mdfjhghyuj mdnbyuhnm dfmnhyun m,cxnuhnnm cjhhj",
    options: ["ram", "radha", "seeta", "shyam"],
    correctAnswer: 2,
  },
  {
    id: 5,
    explaination:
      "bvghk n,gyuc mnbyuc  yugbnm mvybs mnbyubcsm  hughjcsnmgy7ub cshjugjhc nmh78hnc,m hjuc m,hyhncm hu",
    discription:
      "jhgyudfh jhuid,m nuihiucd m,nuihncdm jhhb cdmbyun dhjuj dm,hyunmd hjguj sm,nhuhn mdfjhghyuj mdnbyuhnm dfmnhyun m,cxnuhnnm cjhhj",
    options: ["ram", "radha", "seeta", "shyam"],
    correctAnswer: 2,
  },
  {
    id: 6,
    explaination:
      "bvghk n,gyuc mnbyuc  yugbnm mvybs mnbyubcsm  hughjcsnmgy7ub cshjugjhc nmh78hnc,m hjuc m,hyhncm hu",
    discription:
      "jhgyudfh jhuid,m nuihiucd m,nuihncdm jhhb cdmbyun dhjuj dm,hyunmd hjguj sm,nhuhn mdfjhghyuj mdnbyuhnm dfmnhyun m,cxnuhnnm cjhhj",
    options: ["ram", "radha", "seeta", "shyam"],
    correctAnswer: 2,
  },
  {
    id: 7,
    explaination:
      "bvghk n,gyuc mnbyuc  yugbnm mvybs mnbyubcsm  hughjcsnmgy7ub cshjugjhc nmh78hnc,m hjuc m,hyhncm hu",
    discription:
      "jhgyudfh jhuid,m nuihiucd m,nuihncdm jhhb cdmbyun dhjuj dm,hyunmd hjguj sm,nhuhn mdfjhghyuj mdnbyuhnm dfmnhyun m,cxnuhnnm cjhhj",
    options: ["ram", "radha", "seeta", "shyam"],
    correctAnswer: 2,
  },
  {
    id: 8,
    explaination:
      "bvghk n,gyuc mnbyuc  yugbnm mvybs mnbyubcsm  hughjcsnmgy7ub cshjugjhc nmh78hnc,m hjuc m,hyhncm hu",
    discription:
      "jhgyudfh jhuid,m nuihiucd m,nuihncdm jhhb cdmbyun dhjuj dm,hyunmd hjguj sm,nhuhn mdfjhghyuj mdnbyuhnm dfmnhyun m,cxnuhnnm cjhhj",
    options: ["ram", "radha", "seeta", "shyam"],
    correctAnswer: 2,
  },
  {
    id: 9,
    explaination:
      "bvghk n,gyuc mnbyuc  yugbnm mvybs mnbyubcsm  hughjcsnmgy7ub cshjugjhc nmh78hnc,m hjuc m,hyhncm hu",
    discription:
      "jhgyudfh jhuid,m nuihiucd m,nuihncdm jhhb cdmbyun dhjuj dm,hyunmd hjguj sm,nhuhn mdfjhghyuj mdnbyuhnm dfmnhyun m,cxnuhnnm cjhhj",
    options: ["ram", "radha", "seeta", "shyam"],
    correctAnswer: 2,
  },
  {
    id: 10,
    explaination:
      "bvghk n,gyuc mnbyuc  yugbnm mvybs mnbyubcsm  hughjcsnmgy7ub cshjugjhc nmh78hnc,m hjuc m,hyhncm hu",
    discription:
      "jhgyudfh jhuid,m nuihiucd m,nuihncdm jhhb cdmbyun dhjuj dm,hyunmd hjguj sm,nhuhn mdfjhghyuj mdnbyuhnm dfmnhyun m,cxnuhnnm cjhhj",
    options: ["ram", "radha", "seeta", "shyam"],
    correctAnswer: 2,
  },
  {
    id: 11,
    explaination:
      "bvghk n,gyuc mnbyuc  yugbnm mvybs mnbyubcsm  hughjcsnmgy7ub cshjugjhc nmh78hnc,m hjuc m,hyhncm hu",
    discription:
      "jhgyudfh jhuid,m nuihiucd m,nuihncdm jhhb cdmbyun dhjuj dm,hyunmd hjguj sm,nhuhn mdfjhghyuj mdnbyuhnm dfmnhyun m,cxnuhnnm cjhhj",
    options: ["ram", "radha", "seeta", "shyam"],
    correctAnswer: 2,
  },
  {
    id: 12,
    explaination:
      "bvghk n,gyuc mnbyuc  yugbnm mvybs mnbyubcsm  hughjcsnmgy7ub cshjugjhc nmh78hnc,m hjuc m,hyhncm hu",
    discription:
      "jhgyudfh jhuid,m nuihiucd m,nuihncdm jhhb cdmbyun dhjuj dm,hyunmd hjguj sm,nhuhn mdfjhghyuj mdnbyuhnm dfmnhyun m,cxnuhnnm cjhhj",
    options: ["ram", "radha", "seeta", "shyam"],
    correctAnswer: 2,
  },
  {
    id: 13,
    explaination:
      "bvghk n,gyuc mnbyuc  yugbnm mvybs mnbyubcsm  hughjcsnmgy7ub cshjugjhc nmh78hnc,m hjuc m,hyhncm hu",
    discription:
      "jhgyudfh jhuid,m nuihiucd m,nuihncdm jhhb cdmbyun dhjuj dm,hyunmd hjguj sm,nhuhn mdfjhghyuj mdnbyuhnm dfmnhyun m,cxnuhnnm cjhhj",
    options: ["ram", "radha", "seeta", "shyam"],
    correctAnswer: 2,
  },
  {
    id: 14,
    explaination:
      "bvghk n,gyuc mnbyuc  yugbnm mvybs mnbyubcsm  hughjcsnmgy7ub cshjugjhc nmh78hnc,m hjuc m,hyhncm hu",
    discription:
      "jhgyudfh jhuid,m nuihiucd m,nuihncdm jhhb cdmbyun dhjuj dm,hyunmd hjguj sm,nhuhn mdfjhghyuj mdnbyuhnm dfmnhyun m,cxnuhnnm cjhhj",
    options: ["ram", "radha", "seeta", "shyam"],
    correctAnswer: 2,
  },
  {
    id: 15,
    explaination:
      "bvghk n,gyuc mnbyuc  yugbnm mvybs mnbyubcsm  hughjcsnmgy7ub cshjugjhc nmh78hnc,m hjuc m,hyhncm hu",
    discription:
      "jhgyudfh jhuid,m nuihiucd m,nuihncdm jhhb cdmbyun dhjuj dm,hyunmd hjguj sm,nhuhn mdfjhghyuj mdnbyuhnm dfmnhyun m,cxnuhnnm cjhhj",
    options: ["ram", "radha", "seeta", "shyam"],
    correctAnswer: 2,
  },
  {
    id: 16,
    explaination:
      "bvghk n,gyuc mnbyuc  yugbnm mvybs mnbyubcsm  hughjcsnmgy7ub cshjugjhc nmh78hnc,m hjuc m,hyhncm hu",
    discription:
      "jhgyudfh jhuid,m nuihiucd m,nuihncdm jhhb cdmbyun dhjuj dm,hyunmd hjguj sm,nhuhn mdfjhghyuj mdnbyuhnm dfmnhyun m,cxnuhnnm cjhhj",
    options: ["ram", "radha", "seeta", "shyam"],
    correctAnswer: 2,
  },
  {
    id: 17,
    explaination:
      "bvghk n,gyuc mnbyuc  yugbnm mvybs mnbyubcsm  hughjcsnmgy7ub cshjugjhc nmh78hnc,m hjuc m,hyhncm hu",
    discription:
      "jhgyudfh jhuid,m nuihiucd m,nuihncdm jhhb cdmbyun dhjuj dm,hyunmd hjguj sm,nhuhn mdfjhghyuj mdnbyuhnm dfmnhyun m,cxnuhnnm cjhhj",
    options: ["ram", "radha", "seeta", "shyam"],
    correctAnswer: 2,
  },
];
