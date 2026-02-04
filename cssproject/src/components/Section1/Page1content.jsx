import React from "react";
import Leftcontent from "./Leftcontent";
import Rightcontent from "./Rightcontent";

const Page1content = (props) => {
  return (
    <div className="pb-10 pt-8 px-5 h-[90vh] flex  gap-15">
      <Leftcontent />
      <Rightcontent users={props.users} />
    </div>
  );
};

export default Page1content;
