import { Bookmark } from "lucide-react";
import Card from "./components/Card";
const App = () => {
  const jobs = [
    {
      id: 1,
      company: "Amazon",
      posted: "5 days ago",
      role: "Senior UI/UX Designer",
      type: "Part time",
      level: "Senior level",
      salary: "$120/hr",
      location: "Mumbai, India",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=amazon.com",
    },
    {
      id: 2,
      company: "Google",
      posted: "2 days ago",
      role: "Frontend Developer",
      type: "Full time",
      level: "Mid level",
      salary: "$150/hr",
      location: "Bangalore, India",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=google.com",
    },
    {
      id: 3,
      company: "Microsoft",
      posted: "1 week ago",
      role: "React Developer",
      type: "Full time",
      level: "Senior level",
      salary: "$170/hr",
      location: "Hyderabad, India",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=microsoft.com",
    },
    {
      id: 4,
      company: "Meta",
      posted: "3 days ago",
      role: "Product Designer",
      type: "Part time",
      level: "Mid level",
      salary: "$140/hr",
      location: "Remote",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=meta.com",
    },
    {
      id: 5,
      company: "Netflix",
      posted: "6 days ago",
      role: "UI Designer",
      type: "Contract",
      level: "Senior level",
      salary: "$160/hr",
      location: "Pune, India",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=netflix.com",
    },
    {
      id: 6,
      company: "Adobe",
      posted: "4 days ago",
      role: "UX Researcher",
      type: "Full time",
      level: "Entry level",
      salary: "$110/hr",
      location: "Noida, India",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=adobe.com",
    },
    {
      id: 7,
      company: "Spotify",
      posted: "1 day ago",
      role: "Web Designer",
      type: "Part time",
      level: "Mid level",
      salary: "$130/hr",
      location: "Remote",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=spotify.com",
    },
    {
      id: 8,
      company: "Uber",
      posted: "2 weeks ago",
      role: "Mobile App Designer",
      type: "Full time",
      level: "Senior level",
      salary: "$155/hr",
      location: "Delhi, India",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=uber.com",
    },
    {
      id: 9,
      company: "Airbnb",
      posted: "5 days ago",
      role: "Interaction Designer",
      type: "Contract",
      level: "Mid level",
      salary: "$145/hr",
      location: "Remote",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=airbnb.com",
    },
    {
      id: 10,
      company: "Flipkart",
      posted: "3 days ago",
      role: "UI Developer",
      type: "Full time",
      level: "Entry level",
      salary: "$100/hr",
      location: "Bangalore, India",
      logo: "https://www.google.com/s2/favicons?sz=128&domain=flipkart.com",
    },
  ];

  return (
    <div className="parent">
      {jobs.map(function (elem) {
        return (
          <Card
            key={jobs.id}
            logo={elem.logo}
            companyname={elem.company}
            role={elem.role}
            salary={elem.salary}
            posted={elem.posted}
            level={elem.level}
            location={elem.location}
            type={elem.type}
          />
        );
      })}
    </div>
  );
};

export default App;
