import React from "react";

import Rightcardcontent from "./Rightcardcontent";

const Rightcard = (props) => {
  return (
    <div className="h-full flex flex-nowrap gap-5 overflow-x-auto no-scrollbar">
      {props.users.map(function (elem, idx) {
        return (
          <Rightcardcontent
            key={idx}
            idx={idx + 1}
            img={elem.img}
            intro={elem.intro}
            tag={elem.tag}
          />
        );
      })}
    </div>
  );
};

export default Rightcard;
