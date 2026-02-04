import React from "react";
import Headers from "./components/Headers";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import { Tag } from "lucide-react";

const users = [
  {
    img: "https://images.unsplash.com/photo-1753833303467-c6c7e2b1036d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWwlMjBkYXJrfGVufDB8fDB8fHww",
    intro: "lorem12 ha bhai tera selection fixed hai samajh le tu ",
    tag: "Satisfied",
  },
  {
    img: "https://images.unsplash.com/photo-1555421689-43cad7100750?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
    intro: "lorembgf bgfdwwdfj nhe vvd",
    tag: "Underserved",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1732098508768-821b33fb4166?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWwlMjBkYXJrfGVufDB8fDB8fHww",
    intro:
      "bgfreyhj nhgrfg bvgfdewc bgfev bhuy nhgr vfetbn nhttjjklso bhyttfyw nbguftrisj",
    tag: "Underbanked",
  },
  {
    img: "https://media.istockphoto.com/id/1992917389/photo/exhausted-businessman-working-in-evening-office-alone-tired-anxious-manager-losing-failure.webp?a=1&b=1&s=612x612&w=0&k=20&c=Rr8NwbnWkBvC7FkTGVvhT4Rcbr2rFQ1zszejBqnrmi0=",
    intro: "bgfde bgtre this is a sample text ..",
    tag: "frustation",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1731860729218-e276f512bedc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWwlMjBkYXJrfGVufDB8fDB8fHww",
    intro:
      "sample texrvb  : jjhgt tgus is my new web site sedign i am working hardv on this site ",
    tag: "hardworker",
  },
];

const App = () => {
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
