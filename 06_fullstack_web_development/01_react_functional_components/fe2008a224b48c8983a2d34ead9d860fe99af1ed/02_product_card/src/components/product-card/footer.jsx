import React from "react";

const CardFooter = (props) => {
  return (
    <div>
      <a href={"games/" + props.slug}>See more</a>
    </div>
  );
};

export default CardFooter;
