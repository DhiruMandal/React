import React from "react";
import Card from "./components/Cards.jsx";


const App = () => {
  const jobs = [
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    posted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    posted: "1 week ago",
    post: "iOS Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$145/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    company: "Google",
    posted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$160/hr",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    company: "Meta",
    posted: "2 weeks ago",
    post: "React Frontend Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$95/hr",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    posted: "4 days ago",
    post: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$170/hr",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    posted: "6 days ago",
    post: "Product Designer",
    tag1: "Freelance",
    tag2: "Mid Level",
    pay: "$130/hr",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    company: "Tesla",
    posted: "2 days ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    company: "Adobe",
    posted: "1 week ago",
    post: "UI Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$110/hr",
    location: "San Jose, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    company: "NVIDIA",
    posted: "3 weeks ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$180/hr",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    company: "Oracle",
    posted: "5 days ago",
    post: "Database Administrator",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$105/hr",
    location: "Austin, USA"
  }
];

  return (
    <div className="parent">
     {jobs.map(function(elem){
      return<Card company = {elem.company} post ={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} posted={elem.posted}  brandLogo={elem. brandLogo}/>
     })}
    </div>
  );
};

export default App;
